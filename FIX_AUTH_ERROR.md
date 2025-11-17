# 🔧 Fix Firebase Phone Authentication Error

## Error: `auth/invalid-app-credential`

### Root Cause:
Your Firebase project is missing SHA-1 and SHA-256 certificate fingerprints, which are **required** for phone authentication on Android.

---

## ✅ Step-by-Step Fix:

### 1️⃣ Get Your Debug SHA Certificates (for development):

Open PowerShell and run:

```powershell
cd C:\Users\user\Pegasus-1\android
.\gradlew signingReport
```

**Look for output like:**
```
Variant: debug
Config: debug
Store: C:\Users\user\.android\debug.keystore
Alias: AndroidDebugKey
MD5: XX:XX:XX...
SHA1: AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD
SHA-256: 11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11
```

**Copy both SHA-1 and SHA-256 values!**

---

### 2️⃣ Alternative Method - Get Debug Keystore SHA:

If gradle command doesn't work, use keytool directly:

```powershell
keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android
```

---

### 3️⃣ Add SHA Fingerprints to Firebase Console:

1. **Go to Firebase Console:**
   - Visit: https://console.firebase.google.com/
   - Select project: `pegasus-2be94`

2. **Navigate to Project Settings:**
   - Click the gear icon ⚙️ → "Project settings"
   - Scroll down to "Your apps" section
   - Find the Android app: `com.pegasus.rider` (package name)

3. **Add SHA Fingerprints:**
   - Click "Add fingerprint" button
   - Paste your **SHA-1** value
   - Click "Save"
   - Click "Add fingerprint" again
   - Paste your **SHA-256** value
   - Click "Save"

4. **Download New google-services.json:**
   - Click "Download google-services.json" button
   - Save it to replace the file at: `C:\Users\user\Pegasus-1\google-services.json`

---

### 4️⃣ Enable Phone Authentication in Firebase:

1. In Firebase Console, go to: **Authentication** → **Sign-in method**
2. Enable **Phone** if not already enabled
3. Scroll down to **Phone numbers for testing** (optional for development):
   - Add test phone: `+60 1234567856`
   - Add test code: `123456`

---

### 5️⃣ Rebuild Your App:

After adding SHA fingerprints and updating google-services.json:

```powershell
cd C:\Users\user\Pegasus-1

# Clean build
ionic capacitor sync android

# Rebuild
cd android
.\gradlew clean
.\gradlew assembleDebug

# Or build from root
cd ..
ionic build
ionic capacitor copy android
```

---

### 6️⃣ Verify Configuration:

Check your new `google-services.json` should now contain OAuth clients:

```json
"oauth_client": [
  {
    "client_id": "xxx.apps.googleusercontent.com",
    "client_type": 1,
    "android_info": {
      "package_name": "com.pegasus.rider",
      "certificate_hash": "your_sha1_here"
    }
  }
]
```

---

## 🚀 For Production (Release Build):

When you're ready to release, you need **release keystore SHA**:

```powershell
keytool -list -v -keystore "C:\path\to\your\release.keystore" -alias your-key-alias
```

Add those SHA fingerprints to Firebase Console as well.

---

## 🧪 Use Test Mode (Temporary Workaround):

While fixing the SHA issue, you can use test mode:

1. Your app already has test mode built-in
2. When you see the error, click "Use Test Mode"
3. It will auto-fill: `+60 1234567856` and OTP: `123456`

---

## ❓ Common Issues:

### Issue: "gradlew command not found"
**Solution:** Make sure you're in the `android` folder:
```powershell
cd C:\Users\user\Pegasus-1\android
```

### Issue: SHA fingerprints still not working
**Solution:** Make sure you:
- Downloaded the NEW google-services.json after adding SHA
- Replaced the old file completely
- Did a clean rebuild

### Issue: "Permission denied" error
**Solution:** Run PowerShell as Administrator

---

## 📞 Need Help?

If issues persist after adding SHA fingerprints:
1. Check Firebase Console → Authentication → Settings → Authorized domains
2. Verify your app's package name matches: `com.pegasus.rider`
3. Make sure Phone authentication is enabled in Firebase Console
4. Check if your Firebase project billing is active (required for phone auth)

---

## ✨ Quick Test After Fix:

1. Run your app
2. Try to sign in with a real phone number
3. You should receive an actual SMS OTP
4. No more `invalid-app-credential` error!
