# 🔧 Localhost Phone Authentication Fix

## Problem:
Firebase Phone Authentication shows `auth/invalid-app-credential` on Android even though it works on web localhost.

## Solution:
Use a custom domain mapping instead of `localhost` to bypass Firebase's restrictions.

---

## 📋 Step-by-Step Setup:

### 1️⃣ Add Custom Domain to Windows Hosts File

**Open Notepad as Administrator:**
```powershell
notepad C:\Windows\System32\drivers\etc\hosts
```

**Add this line at the end:**
```
127.0.0.1 pegasus.local
```

**Save and close.**

---

### 2️⃣ Add Domain to Firebase Authorized Domains

1. Go to Firebase Console:
   https://console.firebase.google.com/project/pegasus-2be94/authentication/settings

2. Scroll to **"Authorized domains"**

3. Click **"Add domain"**

4. Enter: `pegasus.local`

5. Click **"Add"**

---

### 3️⃣ Update Your Development Server

**Option A: Using package.json script**

Edit `package.json`:
```json
"scripts": {
  "start": "ng serve --host pegasus.local --port 4200",
  "serve": "ionic serve --address pegasus.local --port 4200"
}
```

**Option B: Command line**
```powershell
cd C:\Users\user\Pegasus-1
ionic serve --address pegasus.local --port 4200
```

Or:
```powershell
ng serve --host pegasus.local --port 4200
```

---

### 4️⃣ Access Your App

Open browser to:
```
http://pegasus.local:4200
```

**NOT** `http://localhost:4200`

---

## ✅ How It Works:

1. **Windows hosts file** maps `pegasus.local` → `127.0.0.1`
2. **Firebase** recognizes `pegasus.local` as authorized domain
3. **Phone authentication** works because it's not using `localhost`
4. **Still runs locally** on your machine (127.0.0.1)

---

## 🚀 Complete Commands:

### Setup (One-time):
```powershell
# 1. Edit hosts file as Administrator
notepad C:\Windows\System32\drivers\etc\hosts

# Add this line:
# 127.0.0.1 pegasus.local
```

### Start Development Server:
```powershell
cd C:\Users\user\Pegasus-1
ionic serve --address pegasus.local --port 4200
```

### Open in Browser:
```
http://pegasus.local:4200
```

---

## 🎯 Benefits:

✅ Phone authentication works without SHA fingerprints
✅ Real SMS on localhost development
✅ No need to rebuild Android app constantly
✅ Faster development cycle
✅ Works on all platforms (Windows/Mac/Linux)

---

## 🔍 Troubleshooting:

### Issue: "pegasus.local not found"
**Solution:** Make sure you edited hosts file as Administrator and saved it.

### Issue: Still shows localhost
**Solution:** Clear browser cache, restart browser, use `http://pegasus.local:4200`

### Issue: Firebase still shows error
**Solution:** Make sure `pegasus.local` is added to Firebase Authorized domains

### Issue: Server won't start
**Solution:** Make sure port 4200 is not in use. Try different port:
```powershell
ionic serve --address pegasus.local --port 8100
```

---

## 📱 For Android Testing:

For Android device/emulator, you still need SHA fingerprints:
```powershell
cd android
.\gradlew signingReport
```

Then add to Firebase Console.

But for **web browser development**, `pegasus.local` works perfectly!

---

## 💡 Alternative Domains:

You can use any domain you want:
- `myapp.local`
- `dev.pegasus`
- `rider.dev`
- `test.app`

Just make sure:
1. Add to `C:\Windows\System32\drivers\etc\hosts`
2. Add to Firebase Authorized domains
3. Use it in your dev server command
