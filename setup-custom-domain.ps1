# ============================================
# Setup Custom Domain for Firebase Phone Auth
# ============================================
# This script adds pegasus.local to your hosts file
# Run as Administrator!

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Firebase Phone Auth Domain Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if running as Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "❌ ERROR: This script must be run as Administrator!" -ForegroundColor Red
    Write-Host ""
    Write-Host "To run as Administrator:" -ForegroundColor Yellow
    Write-Host "1. Right-click PowerShell" -ForegroundColor Yellow
    Write-Host "2. Select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host "3. Run this script again" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Running as Administrator" -ForegroundColor Green
Write-Host ""

# Hosts file path
$hostsPath = "C:\Windows\System32\drivers\etc\hosts"

# Domain to add
$domain = "pegasus.local"
$entry = "127.0.0.1 $domain"

Write-Host "📋 Checking hosts file..." -ForegroundColor Cyan

# Check if entry already exists
$hostsContent = Get-Content $hostsPath -Raw

if ($hostsContent -match [regex]::Escape($entry)) {
    Write-Host "✅ $domain is already in hosts file" -ForegroundColor Green
} elseif ($hostsContent -match [regex]::Escape($domain)) {
    Write-Host "⚠️  $domain exists but with different IP" -ForegroundColor Yellow
    Write-Host "   Current entry will be updated" -ForegroundColor Yellow
} else {
    Write-Host "➕ Adding $domain to hosts file..." -ForegroundColor Yellow
    
    # Backup hosts file
    $backupPath = "$hostsPath.backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
    Copy-Item $hostsPath $backupPath
    Write-Host "✅ Backup created: $backupPath" -ForegroundColor Green
    
    # Add entry
    Add-Content -Path $hostsPath -Value "`n# Firebase Phone Auth Custom Domain"
    Add-Content -Path $hostsPath -Value $entry
    
    Write-Host "✅ $domain added to hosts file" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Next Steps" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "1️⃣  Add to Firebase Console:" -ForegroundColor Yellow
Write-Host "   Go to: https://console.firebase.google.com/project/pegasus-2be94/authentication/settings" -ForegroundColor White
Write-Host "   → Scroll to 'Authorized domains'" -ForegroundColor White
Write-Host "   → Click 'Add domain'" -ForegroundColor White
Write-Host "   → Enter: $domain" -ForegroundColor White
Write-Host "   → Click 'Add'" -ForegroundColor White
Write-Host ""

Write-Host "2️⃣  Start your development server:" -ForegroundColor Yellow
Write-Host "   cd C:\Users\user\Pegasus-1" -ForegroundColor White
Write-Host "   ionic serve --address $domain --port 4200" -ForegroundColor White
Write-Host ""

Write-Host "3️⃣  Open in browser:" -ForegroundColor Yellow
Write-Host "   http://${domain}:4200" -ForegroundColor White
Write-Host ""

Write-Host "4️⃣  Test phone authentication!" -ForegroundColor Yellow
Write-Host "   SMS should work now! 🎉" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Test DNS resolution
Write-Host "🔍 Testing DNS resolution..." -ForegroundColor Cyan
try {
    $resolved = [System.Net.Dns]::GetHostAddresses($domain)
    if ($resolved) {
        Write-Host "✅ $domain resolves to: $($resolved[0].IPAddressToString)" -ForegroundColor Green
    }
} catch {
    Write-Host "⚠️  DNS resolution test failed (this is normal, restart may be needed)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""

# Ask if user wants to open Firebase Console
$openFirebase = Read-Host "Do you want to open Firebase Console now? (Y/N)"
if ($openFirebase -eq "Y" -or $openFirebase -eq "y") {
    Start-Process "https://console.firebase.google.com/project/pegasus-2be94/authentication/settings"
    Write-Host "✅ Firebase Console opened in browser" -ForegroundColor Green
}

Write-Host ""
Read-Host "Press Enter to exit"
