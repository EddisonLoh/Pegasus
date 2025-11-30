# Quick Fix Reference - Google Maps Error

## The Error
```
Unhandled Promise rejection: Cannot read properties of undefined (reading 'setMap')
at web.js:204:53
at CapacitorGoogleMapsWeb.removeMarker
```

## Root Cause
Attempting to remove markers that are:
- `null` or `undefined`
- Already removed
- Never created
- From an uninitialized map

## Key Fixes Applied

### 1. Safe Marker Removal Pattern
```typescript
// Before (UNSAFE):
await this.map.newMap.removeMarker(this.marker1);

// After (SAFE):
if (marker !== null && marker !== undefined && this.map?.newMap) {
  await this.map.newMap.removeMarker(marker).catch(e => 
    console.error('Error removing marker:', e)
  );
}
```

### 2. Marker Size Improvements
```typescript
// Before:
const markerSize = { width: 30, height: 30 };

// After:
const markerSize = { width: 40, height: 40 }; // Better visibility
```

### 3. Z-Index for Visibility
```typescript
// Before:
zIndex: 10

// After:
zIndex: 100 // Ensures markers appear above polylines
```

### 4. Zoom Level Constraints
```typescript
// Driver to Rider:
const minZoom = 12;
const maxZoom = 16;

// Rider to Destination:
const minZoom = 11;
const maxZoom = 16;

// Adjust for padding:
const adjustedZoomLevel = Math.max(zoomLevel - 1, minZoom);
```

### 5. Location Polling Frequency
```typescript
// Before:
}, 5000); // 5 seconds - too slow

// After:
}, 3000); // 3 seconds - more responsive
```

## Files Modified
- `src/app/home/home.page.ts` - Main component with all map logic

## Functions Updated
1. `clearMarkers()` - Safe marker removal
2. `UpdateCarMarker()` - Fixed removal and zoom
3. `clearPrevMarkers()` - Enhanced validation
4. `clearMarker()` - Added null checks
5. `animateMarker()` - Improved cleanup
6. `handleDriverToRider()` - Better markers and zoom
7. `handleRiderToDestination()` - Better markers and zoom
8. `createAndAddMarkers()` - Improved visibility
9. `startPollingPosition()` - Faster updates

## Testing Commands
```powershell
# Check for errors
ionic serve

# Test on device
ionic capacitor run android

# View logs
adb logcat | Select-String "marker"
```

## Common Issues After Fix

### If markers still don't show:
1. Check icon URLs are valid
2. Verify coordinates are within bounds
3. Check z-index values
4. Ensure map is fully initialized

### If zoom is still wrong:
1. Verify bounds include all markers
2. Check map container height is set
3. Ensure zoom constraints are appropriate
4. Test with different screen sizes

### If tracking is laggy:
1. Reduce UPDATE_INTERVAL (currently 5000ms)
2. Reduce polling interval (currently 3000ms)
3. Check network latency
4. Verify Firebase connection

## Validation Checklist
- [ ] No console errors on page load
- [ ] Markers visible when booking ride
- [ ] No errors when canceling ride
- [ ] Smooth marker animation during tracking
- [ ] Proper zoom showing all markers
- [ ] Location updates working (every 3s)
- [ ] Route updates working (every 5s)
- [ ] No memory leaks (subscriptions cleaned up)

## Quick Rollback
If issues occur, check git history:
```powershell
git log --oneline src/app/home/home.page.ts
git show <commit-hash>
```

## Support
For issues, check:
1. Browser console for JavaScript errors
2. Network tab for API failures
3. Capacitor logs for native errors
4. Firebase console for database issues
