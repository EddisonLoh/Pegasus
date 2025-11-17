# 🌐 Enable Phone Authentication on Localhost

## ✅ YES - It CAN work on localhost!

Phone authentication works perfectly in the browser (localhost) **without SHA fingerprints**. You just need to configure Firebase properly.

---

## 🔧 Firebase Console Configuration (Required)

### Step 1: Add Localhost to Authorized Domains

1. **Go to Firebase Console:**
   - Visit: https://console.firebase.google.com/
   - Select project: `pegasus-2be94`

2. **Navigate to Authentication Settings:**
   - Click "Authentication" in left sidebar
   - Click "Settings" tab
   - Scroll to "Authorized domains" section

3. **Add localhost:**
   - Click "Add domain"
   - Enter: `localhost`
   - Click "Add"

4. **Verify these domains are listed:**
   - `localhost` ✓
   - `pegasus-2be94.firebaseapp.com` (default)
   - `pegasus-2be94.web.app` (default)

---

### Step 2: Enable Phone Authentication

1. In Firebase Console → **Authentication** → **Sign-in method**
2. Click on **Phone** provider
3. Enable it (toggle switch to ON)
4. Click "Save"

---

### Step 3: Add Test Phone Numbers (Optional but Recommended)

For development without using real SMS:

1. In Firebase Console → **Authentication** → **Sign-in method**
2. Scroll down to **Phone numbers for testing**
3. Click "Add phone number"
4. Add:
   - Phone: `+60 1234567856`
   - Code: `123456`
5. Click "Add"

This lets you test without consuming SMS quota!

---

## 🚀 Run on Localhost

### Start the Development Server:

```powershell
cd C:\Users\user\Pegasus-1
npm start
```

Or:

```powershell
ionic serve
```

Or:

```powershell
ng serve
```

This will start the app on: **http://localhost:4200**

---

## 🧪 Testing Phone Authentication

### Option A: Use Real Phone Numbers

1. Open http://localhost:4200
2. Enter your real phone number (e.g., `+60 123456789`)
3. Click "Continue"
4. Wait for SMS (you'll receive actual OTP via SMS)
5. Enter the OTP code
6. Sign in!

### Option B: Use Test Phone Number (No SMS needed)

1. Open http://localhost:4200
2. Enter test phone: `+60 1234567856`
3. Click "Continue"
4. Enter test OTP: `123456` (no SMS sent)
5. Sign in!

---

## 🐛 Troubleshooting

### Issue 1: "auth/invalid-app-credential" on localhost

**Cause:** This error should NOT happen on localhost/web. If it does:

**Solution:**
1. Clear browser cache and cookies
2. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Try incognito/private browsing mode
4. Check Firebase Console → Authentication → Settings → Authorized domains

### Issue 2: reCAPTCHA not appearing

**Cause:** reCAPTCHA container or initialization issue

**Solution:**
1. Check browser console for errors (F12)
2. Verify `<div id="sign-in-button"></div>` exists in login.page.html ✓ (you have it!)
3. Make sure reCAPTCHA is initialized in ngOnInit
4. Try visible reCAPTCHA instead of invisible (for debugging):

```typescript
// In auth.service.ts, change size to 'normal' temporarily:
this.appVerifier = new RecaptchaVerifier('sign-in-button', {
  size: 'normal',  // Changed from 'invisible'
  callback: (response) => {
    console.log('reCAPTCHA verified:', response);
  }
}, this.auth);
```

### Issue 3: CORS errors

**Cause:** Firebase configuration issue

**Solution:**
1. Make sure you're using `http://localhost:4200` (not file://)
2. Check if `localhost` is in Firebase authorized domains
3. Restart dev server after Firebase changes

### Issue 4: "reCAPTCHA not initialized"

**Cause:** DOM not ready or container missing

**Solution:**
Your code already handles this! The `signInWithPhoneNumber` method waits 1000ms for initialization.

If still failing:
```typescript
// In login.page.ts ngOnInit, increase delay:
setTimeout(() => {
  this.auth.recaptcha();
}, 1000); // Increased from 500ms
```

---

## 🌟 Key Differences: Localhost vs Android

| Feature | Localhost (Web) | Android App |
|---------|----------------|-------------|
| SHA Fingerprints | ❌ Not needed | ✅ Required |
| Authorized Domains | ✅ Need to add localhost | ❌ Not applicable |
| reCAPTCHA | ✅ Visible/Invisible | ⚠️ Invisible only |
| google-services.json | ❌ Not used | ✅ Required |
| OAuth clients in config | ❌ Not needed | ✅ Required |

---

## 📝 Quick Checklist

Before running on localhost, make sure:

- [x] Firebase project exists: `pegasus-2be94`
- [ ] Phone authentication is **enabled** in Firebase Console
- [ ] `localhost` is added to **Authorized domains**
- [ ] Test phone number added (optional): `+60 1234567856` → `123456`
- [ ] Dev server is running: `ionic serve` or `npm start`
- [ ] Browser is open: http://localhost:4200
- [ ] reCAPTCHA container exists in HTML: `<div id="sign-in-button"></div>` ✓

---

## 🎯 Expected Behavior on Localhost

### ✅ What SHOULD happen:

1. App loads on http://localhost:4200
2. reCAPTCHA initializes (invisible or visible)
3. User enters phone number
4. Clicks "Continue"
5. Firebase sends OTP via SMS (or uses test code)
6. User enters OTP
7. User is authenticated ✓

### ❌ What should NOT happen:

- No `auth/invalid-app-credential` error (that's Android-only)
- No CORS errors
- No "Unauthorized domain" errors

---

## 🔐 Security Note

⚠️ **Important:** Localhost testing is for **development only**!

For production:
- Use proper domain (not localhost)
- Add production domain to Firebase authorized domains
- Use environment variables for API keys
- Implement proper rate limiting

---

## 🚀 Next Steps After Localhost Works

Once phone auth works on localhost:

1. **For Android:** Follow `FIX_AUTH_ERROR.md` to add SHA fingerprints
2. **For iOS:** Configure iOS app in Firebase Console
3. **For Production Web:** Add your domain to authorized domains

---

## 💡 Pro Tip: Use Test Phone Numbers

During development, use Firebase test phone numbers to:
- ✅ Avoid SMS costs
- ✅ No SMS delays
- ✅ Bypass rate limits
- ✅ Work offline
- ✅ Predictable testing

Just add them in Firebase Console → Authentication → Phone numbers for testing!

---

## 🆘 Still Having Issues?

If phone auth still doesn't work on localhost:

1. **Check browser console** (F12) for specific errors
2. **Check Firebase Console** → Authentication → Users (see if test worked)
3. **Try test phone number** first before real numbers
4. **Clear all Firebase state:**
   ```javascript
   // In browser console:
   localStorage.clear();
   sessionStorage.clear();
   location.reload();
   ```

5. **Verify Firebase config** in `environment.ts` matches Firebase Console

---

## ✨ Summary

**YES, phone authentication works perfectly on localhost!** 

The `auth/invalid-app-credential` error you're seeing is likely from:
1. Testing on Android emulator/device (needs SHA fingerprints)
2. OR missing `localhost` in Firebase authorized domains

Just add `localhost` to Firebase authorized domains and it should work fine! 🎉
