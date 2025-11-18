# New API Endpoint for Stripe Payment Processing

Add this endpoint to your Express API (index.js) to process actual ride payments with Stripe and split payment between driver and company.

## Add this endpoint after the existing Stripe routes:

```javascript
// Process ride payment with split between driver and company
app.post('/process-ride-payment', cors(corsOptions), async (req, res) => {
  try {
    const { 
      email, 
      amount, 
      currency, 
      paymentMethodId, 
      driverId, 
      rideId,
      driverAmount,
      companyAmount,
      description 
    } = req.body;

    console.log('Processing ride payment:', {
      email,
      amount,
      currency,
      paymentMethodId,
      driverId,
      rideId,
      driverAmount,
      companyAmount
    });

    // 1. Get or create customer
    let customer = await stripe.customers.list({ email: email, limit: 1 });
    if (customer.data.length === 0) {
      customer = await stripe.customers.create({
        email: email,
      });
    } else {
      customer = customer.data[0];
    }

    // 2. Create the payment intent with the full amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customer.id,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
      description: description || `Ride payment for ${rideId}`,
      metadata: {
        rideId: rideId,
        driverId: driverId,
        driverAmount: driverAmount.toString(),
        companyAmount: companyAmount.toString()
      }
    });

    console.log('Payment Intent created:', paymentIntent.id);

    // 3. Create a transfer to the driver (if you have Stripe Connect set up)
    // NOTE: This requires you to have the driver's Stripe Connect account ID
    // For now, we'll just log this - you'll need to implement Stripe Connect
    // to actually transfer funds to drivers
    
    // Example (commented out - requires Stripe Connect setup):
    /*
    if (driverAmount > 0) {
      const transfer = await stripe.transfers.create({
        amount: driverAmount,
        currency: currency,
        destination: 'acct_DRIVER_STRIPE_CONNECT_ID', // Driver's Stripe Connect account
        transfer_group: rideId,
        description: `Driver payment for ride ${rideId}`
      });
      console.log('Transfer to driver created:', transfer.id);
    }
    */

    // For now, we'll just record the split in the payment metadata
    console.log('Payment split:', {
      total: amount,
      driver: driverAmount,
      company: companyAmount
    });

    res.status(200).send({
      success: true,
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      driverAmount: driverAmount,
      companyAmount: companyAmount
    });

  } catch (error) {
    console.error('Stripe Payment Error:', error);
    res.status(500).send({ 
      success: false,
      error: error.message || error.toString() 
    });
  }
});

// Alternative endpoint: Create payment intent (without immediate charge)
app.post('/create-payment-intent', cors(corsOptions), async (req, res) => {
  try {
    const { email, amount, currency, paymentMethodId, description } = req.body;

    // Get or create customer
    let customer = await stripe.customers.list({ email: email, limit: 1 });
    if (customer.data.length === 0) {
      customer = await stripe.customers.create({
        email: email,
      });
    } else {
      customer = customer.data[0];
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customer.id,
      payment_method: paymentMethodId,
      description: description,
      // Don't auto-confirm - let client confirm
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      }
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });

  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(500).send({ error: error.message || error.toString() });
  }
});
```

## Important Notes:

### 1. **Stripe Connect Setup (Required for Real Driver Payouts)**

To actually transfer money to drivers, you need to set up **Stripe Connect**:

1. Enable Stripe Connect in your Stripe Dashboard
2. Each driver needs to create a Stripe Connect account
3. Store the driver's `stripeAccountId` in your Firestore `Drivers` collection
4. Update the transfer code to use the driver's actual account ID:

```javascript
// In the /process-ride-payment endpoint, replace the commented transfer code with:
if (driverAmount > 0 && driverStripeAccountId) {
  const transfer = await stripe.transfers.create({
    amount: driverAmount,
    currency: currency,
    destination: driverStripeAccountId, // From your database
    transfer_group: rideId,
    description: `Driver payment for ride ${rideId}`,
    metadata: {
      driverId: driverId,
      rideId: rideId
    }
  });
  console.log('Transfer to driver created:', transfer.id);
}
```

### 2. **Payment Split Configuration**

Current split: 80% driver, 20% company
- Modify in `home.page.ts` in the `processRidePayment` method
- Change the percentages as needed:
```typescript
const driverAmount = Math.round(totalAmount * 0.80); // 80% to driver
const companyAmount = totalAmount - driverAmount;    // 20% to company
```

### 3. **Testing**

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Requires 3D Secure: `4000 0027 6000 3184`
- Declined: `4000 0000 0000 0002`

### 4. **Environment Variables**

Replace the hardcoded Stripe secret key with an environment variable:

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
```

### 5. **Webhook for Payment Confirmation (Recommended)**

Add a webhook endpoint to handle payment events:

```javascript
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('Payment succeeded:', paymentIntent.id);
        // Update your database with successful payment
        break;
      
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('Payment failed:', failedPayment.id);
        // Handle failed payment
        break;
    }

    res.json({received: true});
  } catch (err) {
    console.error('Webhook error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});
```

## Deployment Checklist:

- [ ] Add the new endpoints to your Express server
- [ ] Test with Stripe test cards
- [ ] Set up Stripe Connect for driver payouts
- [ ] Configure webhook for payment events
- [ ] Update environment variables
- [ ] Test the complete flow: book ride → confirm → payment → completion
- [ ] Monitor Stripe Dashboard for successful charges

## Summary:

The payment now works as follows:

1. **User books ride** → selects card payment
2. **Driver confirms** → `handleRideConfirmation` triggers payment
3. **Payment processed** → Full amount charged to user's card
4. **Split recorded** → Metadata shows driver/company split
5. **Future: Stripe Connect** → Automatically transfer driver portion

The payment is charged immediately when the driver confirms the ride, ensuring funds are secured before the ride begins.
