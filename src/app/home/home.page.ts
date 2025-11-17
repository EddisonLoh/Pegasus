import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { ModalOptions, ModalController, Platform, NavController, AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { OverlayService } from '../services/overlay.service';
import { GeocodeService } from '../services/geocode.service';
import { MapService } from '../services/map.service';
import { AvatarService } from '../services/avatar.service';
import { Drivers } from '../interfaces/drivers';
import { Observable, timer, interval, BehaviorSubject, throwError, Subscription } from 'rxjs';
import { doc as firestoreDoc, updateDoc, getDoc, collection, onSnapshot, doc, Firestore, query, where } from '@angular/fire/firestore';
import { Marker, Polyline } from '@capacitor/google-maps';
import { AuthService } from '../services/auth.service';
import { EnrouteChatComponent } from '../enroute-chat/enroute-chat.component';
import { NetworkService } from '../services/network.service'
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { PaymentService } from '../services/payment.service';
import { AddCardComponent } from '../add-card/add-card.component';
import { switchMap } from 'rxjs/operators';
import { LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { LatLng } from '@capacitor/google-maps/dist/typings/definitions';
import { Preferences } from '@capacitor/preferences';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import Debug from 'onesignal-cordova-plugin/dist/DebugNamespace';
import { TripSummaryComponent } from '../trip-summary/trip-summary.component';
import { geohashForLocation } from 'geofire-common';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  [x: string]: any;
  profile = null;
  presets: Array<any> = [];
  @ViewChild('map',  { static: true }) mapRef: ElementRef<HTMLElement>;
  @ViewChild('topBar', { static: true }) topBar: ElementRef<HTMLElement>;
  @ViewChild('bottomBar', { static: true }) bottomBar: ElementRef<HTMLElement>;
  mappy;
  @ViewChild('mapElement') mapElement: ElementRef<HTMLElement>;
  coordinates: Position;
  address: any = 'Unknown';
  bookingStage: any;
  confirmStage: any;
  trackingStage: any;
  searchingStage: any;
  noDriverStage: any;
  drivingToDestinationStage: any;
  data: any;
  cash: any = false;
  state: any = [];
  mapPinStage: boolean;
  D_LatLng: { lat: any; lng: any; };
  mapPinDrag: any;
  showResetLocationButton: any = false;
  showloader: boolean;
  mapClass: any;
  destinationAddress: string = 'Drag To Pick Destination';
  locationAddress: string = null;
  distance: any;
  direction: any;
  actualDestination: any;
  markers: any;
  allDrivers: Observable<Drivers[]>;
  NoDrivers: boolean;
  driverMarker: string;
  driver_duration_apart: number;
  driver_number_of_seats: any;
  price: any = 0;
  carname: any;
  driver_ID: any;
  bounds: any;
  DriverLatLng: { lat: any; lng: any; };
  drivers_Requested: any[];
  current_Request_Number: number = -1;
  Driver_Rejected: any;
  numCalls: any;
  currentDriver: any;
  private countdownActive = false;

  unsubscribe: import("@angular/fire/firestore").Unsubscribe;
  driverInfo: import("@angular/fire/firestore").DocumentData;
  duration: any = null;
  riderCleared: any;
  updateDriverSubcription: any;
  canCheck: boolean;
  marker1: any;
  marker2: any;
  actualLocation: string;
  LatLng: { lat: number; lng: number; };
  mapy: boolean;
  AllCarMarkers: Marker[];
  private _carmarkers: { id: string, marker: any }[] = [];
  private rider_marker: any;
  private driver_marker: any;

  cards: import("@angular/fire/firestore").DocumentData[];
  selected: any;
  selectedCard: any;
  closeDrivers: any;
  countDown: any;
  places: import("@angular/fire/firestore").DocumentData[];
  newPoly: string[];
  isConnected: boolean;
  private networkStatus$ = new BehaviorSubject<boolean>(true);
  pollingInterval: any;
  animatedMarker: any;
  driverImage: any;
  private permissionCheckInterval: any;
  savedPaymentMethods: any;
  requestID: string;
  rideHasStarted: boolean;
  driverLocation: { lat: number, lng: number } | null = null;
  stopPolling: boolean = false;
  riderMarker: string;
  routePath: google.maps.MVCArray<google.maps.LatLng> | (google.maps.LatLng | google.maps.LatLngLiteral)[];
  destinationMarker: any;
  D_duration: any;
  routePolyline: any;
  private routeUpdateSubscription: Subscription;
  topBarHeight: any;
  bottomBarHeight:any;
  private readonly RIDE_STATE_KEY = 'activeRideState';
  private isLoadingDriver = false;

  // Add these stage constants at the class level
  private readonly STAGES = {
    BOOKING: 'booking',
    CONFIRM: 'confirm',
    TRACKING: 'tracking',
    SEARCHING: 'searching',
    DRIVING: 'driving',
    NO_DRIVER: 'noDriver',
    MAP_PIN: 'mapPin',
    NO_DRIVERS: 'noDrivers'
  } as const;

  // Add this to your class properties
  private lastHandledState: string | null = null;

  // Add this property to the class
  private isRideStopProcessed = false;

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private router: Router,
    private networkService: NetworkService,
    public map: MapService,
    private nav: NavController,
    private platform: Platform,
    private firestore: Firestore,
    private readonly database: AvatarService,
    private ngZone: NgZone,
    private geocode: GeocodeService,
    private overlay: OverlayService,
    private modalCtrl: ModalController,
    private alert: AlertController,
    private payME: PaymentService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController
  
  ) {
    this.initializeApp();
  }

  async ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    window.removeEventListener('resize', this.setMapHeight.bind(this));
    this.clearSubscriptions();
    await this.clearPrevMarkers();
    await this.clearAllPolylines();
  }


  async ngAfterViewInit() {
    try {
      // First check location permissions
      const hasPermission = await this.checkAndRequestLocationPermissions();
      if (!hasPermission) {
        return;
      }
      
      // Initialize profile first
      await this.initializeProfile();
      
      // Then proceed with other initializations
      await this.initializeApp();
      await this.initializeNetworkMonitoring();
      await this.fetchSavedPaymentMethods();
  // load user preset places (localStorage-backed)
  await this.loadPresets();
      this.EnterBookingStage();
      await this.initializeGeolocation();
      await this.initializeMap();
      
      // Set up real-time listener for ride state
      this.initializeRideStateListener();
    } catch (e) {
      console.error('Error in ngAfterViewInit:', e);
      this.overlay.hideLoader();
      this.overlay.showAlert('Error', 'An error occurred during initialization. Please try again.');
    }
  }

  // Preset places management (localStorage)
  async loadPresets() {
    try {
      const raw = localStorage.getItem('presetPlaces');
      if (raw) {
        this.presets = JSON.parse(raw);
      } else {
        // default presets
        this.presets = [
          { name: 'Queensbay Mall, Penang', address: 'Queensbay Mall, Bayan Lepas, Penang', lat: 5.2939, lng: 100.2719 },
          { name: 'George Town Ferry Terminal', address: 'Weld Quay, George Town, Penang', lat: 5.4141, lng: 100.3294 }
        ];
        localStorage.setItem('presetPlaces', JSON.stringify(this.presets));
      }
    } catch (e) {
      console.error('Failed to load presets', e);
      this.presets = [];
    }
  }

  async savePresets() {
    try {
      localStorage.setItem('presetPlaces', JSON.stringify(this.presets));
    } catch (e) {
      console.error('Failed to save presets', e);
    }
  }

  // Add current destination as preset
  async addCurrentAsPreset() {
    try {
      if (!this.destinationAddress || !this.D_LatLng || !this.D_LatLng.lat) {
        const alert = await this.alert.create({
          header: 'Add preset',
          message: 'Please choose a destination on the map first (pin or search).',
          buttons: ['OK']
        });
        await alert.present();
        return;
      }

      const name = this.destinationAddress || 'New Place';
      this.presets.unshift({ name, address: name, lat: this.D_LatLng.lat, lng: this.D_LatLng.lng });
      // keep only latest 10
      if (this.presets.length > 10) this.presets.length = 10;
      await this.savePresets();
    } catch (e) {
      console.error('Error adding preset', e);
    }
  }

  // Delete preset by index
  async deletePreset(i: number) {
    this.presets.splice(i, 1);
    await this.savePresets();
  }

  // Select a preset: set destination and trigger directions
  async selectPreset(preset: any) {
    try {
      this.destinationAddress = preset.name || preset.address || '';
      if (preset.lat && preset.lng) {
        this.D_LatLng = { lat: preset.lat, lng: preset.lng };
        // trigger distance/directions calculation
        await this.getDistanceAndDirections();
      } else {
        // fallback: if no coords, open autocomplete modal with address prefilled
        // set data for modal then open it
        await this.showAutocompleteModal();
      }
    } catch (e) {
      console.error('Failed to select preset', e);
    }
  }

  // Add this new method
  private async initializeProfile() {
    try {
      // Show loader while initializing profile
     // await this.overlay.showLoader('Loading profile...');

      // Wait for auth state to be ready
      const user = await new Promise<any>((resolve) => {
        const unsubscribe = onAuthStateChanged(this.auth, (user) => {
          unsubscribe();
          resolve(user);
        });
      });

      if (!user) {
        throw new Error('User not authenticated');
      }

      // Get profile data
      this.profile = await this.database.getUserProfile();
      
      if (!this.profile) {
        console.log('Creating new profile...');
        // If profile doesn't exist, create it with default values
        this.profile = {
          userId: user.uid,
          email: user.email,
          createdAt: new Date().toISOString(),
          // Add any other default profile fields you need
        };
        await this.database.createUserProfile(this.profile);
      }

      console.log('Profile initialized:', this.profile);
      this.overlay.hideLoader();
    } catch (error) {
      console.error('Error initializing profile:', error);
      this.overlay.hideLoader();
      await this.overlay.showAlert(
        'Profile Error',
        'Unable to initialize user profile. Please try again or contact support.'
      );
      throw error;
    }
  }

  // Add this method to check profile before any ride-related action
  private async ensureProfileInitialized(): Promise<boolean> {
    if (!this.profile) {
      try {
        await this.initializeProfile();
        return true;
      } catch (error) {
        console.error('Error ensuring profile is initialized:', error);
        return false;
      }
    }
    return true;
  }

  private initializeRideStateListener() {
    console.log('Initializing ride state listener');
    
    // Reset lastHandledState on initialization to ensure proper state restoration
    this.lastHandledState = null;
    
    onAuthStateChanged(this.auth, (user) => {
      if (!user) return;

      // Listen to the Request collection for active rides for this user
      const requestsQuery = query(
        collection(this.firestore, 'Request'),
        where('Rider_id', '==', user.uid),
        where('status', 'in', ['pending', 'confirmed', 'started'])
      );

      this.unsubscribe = onSnapshot(requestsQuery, async (snapshot) => {
        try {
          // If no active rides found, go to booking stage
          if (snapshot.empty) {
            console.log('No active rides found');
            this.setStage(this.STAGES.BOOKING);
            return;
          }

          // Get the most recent active ride
          const activeRides = snapshot.docs;
          const currentRide = activeRides[0];
          const rideData = currentRide.data();
          this.requestID = currentRide.id;

          // Restore price information
          this.price = rideData.price || 0;
          console.log('Restored ride price:', this.price);
          console.log('Current ride status:', rideData.status);

          // IMPORTANT: On app initialization, always restore ride state regardless of lastHandledState
          const isAppInitialization = !this.lastHandledState;
          
          // Only skip if we've already handled this state AND it's not initial app load
          if (this.lastHandledState === rideData.status && !isAppInitialization) {
            console.log('State already properly handled:', rideData.status);
            return;
          }

          // Store location data for later use
          if (rideData.Loc_lat && rideData.Loc_lng) {
            this.LatLng = {
              lat: rideData.Loc_lat,
              lng: rideData.Loc_lng
            };
          }
          
          if (rideData.Des_lat && rideData.Des_lng) {
            this.D_LatLng = {
              lat: rideData.Des_lat,
              lng: rideData.Des_lng
            };
          }
          
          // Store addresses
          this.locationAddress = rideData.Rider_Location || 'Unknown location';
          this.destinationAddress = rideData.Rider_Destination || 'Unknown destination';

          console.log('Restoring ride state:', rideData.status);

          // Handle different ride states
          switch (rideData.status) {
            case 'pending':
              await this.handlePendingState();
              break;
            case 'confirmed':
              console.log('Handling confirmed state on restore...');
              await this.handleRideConfirmation(rideData);
              break;
            case 'started':
              await this.handleRideStart(currentRide);
              break;
            case 'cancelled':
              await this.handleRideCancellation(rideData);
              break;
            default:
              console.log('Unknown ride status:', rideData.status);
              this.setStage(this.STAGES.BOOKING);
          }
          
          // Only update lastHandledState AFTER successful handling
          this.lastHandledState = rideData.status;
          
        } catch (error) {
          console.error('Error handling ride state:', error);
          if (error.code === 'permission-denied' || error.code === 'not-found') {
            this.overlay.showAlert('Error', 'Failed to restore ride state. Please try again.');
            this.setStage(this.STAGES.BOOKING);
          }
        }
      }, (error) => {
        console.error('Error in ride state listener:', error);
        this.setStage(this.STAGES.BOOKING);
      });
    });
  }


  private handleRemovedRide() {
    console.log('Ride was removed');
    this.clearRideData();
    this.setStage(this.STAGES.BOOKING);
  }

  private clearRideData() {
    this.requestID = null;
    this.driverInfo = null;
    this.rideHasStarted = false;
    this.lastHandledState = null;
    // Clear any other ride-specific data
  }

  async checkAndRequestLocationPermissions() {
    try {
      // Check if running on web platform
      if (this.platform.is('capacitor')) {
        const permissionStatus = await Geolocation.checkPermissions();
        
        if (permissionStatus.location === 'granted') {
          this.overlay.hideLoader();
          return true;
        }

        const alert = await this.alert.create({
          header: 'Location Permission Required',
          message: 'This app needs access to your location to function properly.',
          buttons: [
            {
              text: 'Enable Location',
              handler: async () => {
                const newStatus = await Geolocation.requestPermissions();
                this.overlay.hideLoader();
                
                if (newStatus.location !== 'granted') {
                  await this.showLocationRequiredAlert();
                  return false;
                }
                return true;
              }
            }
          ],
          backdropDismiss: false
        });

        await alert.present();
        const { role } = await alert.onDidDismiss();
        
        if (role === 'backdrop') {
          this.overlay.hideLoader();
          await this.showLocationRequiredAlert();
          return false;
        }
      } else {
        // Web platform - use browser's geolocation API
        if ('geolocation' in navigator) {
          return new Promise((resolve) => {
            navigator.permissions.query({ name: 'geolocation' }).then((result) => {
              if (result.state === 'granted') {
                this.overlay.hideLoader();
                resolve(true);
              } else {
                this.overlay.hideLoader();
                resolve(this.showWebLocationPrompt());
              }
            });
          });
        } else {
          this.overlay.hideLoader();
          await this.overlay.showAlert('Error', 'Geolocation is not supported in this browser.');
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error('Error checking/requesting location permissions:', error);
      this.overlay.hideLoader();
      throw error;
    }
  }

  private async showWebLocationPrompt(): Promise<boolean> {
    const alert = await this.alert.create({
      header: 'Location Access',
      message: 'This app needs your location. Please allow location access when prompted by your browser.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            return new Promise((resolve) => {
              navigator.geolocation.getCurrentPosition(
                () => resolve(true),
                () => {
                  this.showLocationRequiredAlert();
                  resolve(false);
                }
              );
            });
          }
        }
      ]
    });
    await alert.present();
    return true;
  }

  private async showLocationRequiredAlert() {
    const alert = await this.alert.create({
      header: 'Location Required',
      message: 'Location permission is required to use this app. Please enable location services in your device settings.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async fetchSavedPaymentMethods() {
    try {
      this.savedPaymentMethods = await this.database.getSavedPaymentMethods();
      console.log('Saved Payment Methods:', this.savedPaymentMethods);
      
      // Set default payment method to cash if no cards are saved
      if (this.savedPaymentMethods.length === 0) {
        this.selectedCard = 'cash';
        this.cash = true;
      } else {
        this.selectedCard = this.savedPaymentMethods[0].cardId;
        this.cash = false;
      }
    } catch (error) {
      console.error('Error fetching saved payment methods:', error);
    }
  }

  chooseCard(event: any) {
    this.selectedCard = event.detail.value;
    this.cash = this.selectedCard === 'cash';
    if (!this.cash) {
     // this.processPayment(this.authService.user.email, this.defaultAmount, this.selectedCard);
    }
  }

  async processPayment(email: string, amount: number, cardId: any) {
    this.overlay.showLoader('Processing payment...');

    try {
      const paymentResult = await this.payME.processPaymentWithCardId(email, amount, cardId).toPromise();
      console.log('Payment successful:', paymentResult);
      await this.overlay.showAlert('Success', 'Payment successful!');
    } catch (error) {
      console.error('Error during payment:', error);
      const errorMessage = error.error ? error.error.error : 'An unexpected error occurred.';
      await this.showPaymentErrorModal(errorMessage);
    } finally {
      this.overlay.hideLoader();
    }
  }

  async showPaymentErrorModal(errorMessage: string) {
    const alert = await this.alert.create({
      header: 'Payment Error',
      message: errorMessage,
      buttons: [
        {
          text: 'Add New Card',
          handler: async () => {
            const modal = await this.modalCtrl.create({
              component: AddCardComponent, // Create this component to handle adding a new card
            });
            await modal.present();
            const { data } = await modal.onWillDismiss();
            if (data && data.newCardId) {
              this.selectedCard = data.newCardId;
              this.cash = false;
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }


  // Add this single unified method for all map height calculations
  setMapContainerHeight(extraPadding = 0) {
    if (!this.mapRef || !this.topBar || !this.bottomBar) return;
    
    // Get proper measurements of the bars
    const topHeight = this.topBar.nativeElement.offsetHeight || 0;
    const bottomHeight = this.bottomBar.nativeElement.offsetHeight || 0;
    
    // Calculate available height properly
    const availableHeight = window.innerHeight - topHeight - bottomHeight + extraPadding;
    
    // Set map height
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
    
    // Ensure map container is positioned properly
    this.mapRef.nativeElement.style.top = `${topHeight}px`;
    this.mapRef.nativeElement.style.position = 'absolute';
    this.mapRef.nativeElement.style.zIndex = '1'; // Lower than UI elements
    this.mapRef.nativeElement.style.left = '0';
    this.mapRef.nativeElement.style.right = '0';
    
    console.log(`Map container height set to: ${availableHeight}px (top: ${topHeight}px, bottom: ${bottomHeight}px)`);
  }

  // Update these methods to use the unified approach
  setMapHeight() {
    this.setMapContainerHeight(0);
  }

  setMapHeightCreateAndAddMarkers() {
    this.setMapContainerHeight(40); // Add some padding if needed
  }

  setMapHeightHandleDrivertoRider() {
    this.setMapContainerHeight(20);
  }

  setMapHeightHandleDrivertoDestination() {
    this.setMapContainerHeight(0);
  }

  ResetMapHeight() {
    this.setMapContainerHeight(0);
  }

  private async initializeNetworkMonitoring() {
    const status = await Network.getStatus();
    this.isConnected = status.connected;
    this.networkStatus$.next(this.isConnected);
    console.log('Network monitoring initialized. Initial status:', this.isConnected);

    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed:', status);
      this.isConnected = status.connected;
      this.networkStatus$.next(this.isConnected);
    });

    this.networkStatus$.subscribe((isConnected) => {
      if (isConnected) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['network']);
      }
    });
  }


  initializeApp() {
    this.platform.ready().then(async () => {
      try {
        await this.initializeRideStateListener();
      } catch (error) {
        console.error('Error initializing app:', error);
        this.setStage(this.STAGES.BOOKING);
      }
    });
  }

  
 
  async initializeGeolocation() {
    try {
      let coordinates;
      
      if (this.platform.is('capacitor')) {
        coordinates = await Geolocation.getCurrentPosition({
          timeout: 10000
        });
      } else {
        // Web fallback
        coordinates = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                coords: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  accuracy: position.coords.accuracy,
                  altitude: position.coords.altitude,
                  altitudeAccuracy: position.coords.altitudeAccuracy,
                  heading: position.coords.heading,
                  speed: position.coords.speed
                },
                timestamp: position.timestamp
              });
            },
            (error) => reject(error),
            { timeout: 10000 }
          );
        });
      }
      
      this.coordinates = coordinates;
      this.LatLng = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
      
      await this.database.updateLocation(this.LatLng);
      console.log('Geolocation initialized:', this.LatLng);
      
      this.startPollingPosition();
    } catch (error) {
      console.error('Error initializing geolocation:', error);
      this.overlay.hideLoader();
      await this.overlay.showAlert(
        'Location Error',
        'Unable to get your location. Please check your device settings and try again.'
      );
    }
  }
  
  startPermissionPolling() {
    this.permissionCheckInterval = setInterval(async () => {
      const permissionStatus = await Geolocation.checkPermissions();
      if (permissionStatus.location === 'granted') {
        this.overlay.hideLoader();
        clearInterval(this.permissionCheckInterval);
        // Try to get the current position again if permissions are granted
        const coordinates = await Geolocation.getCurrentPosition();
        this.coordinates = coordinates;
        this.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        };
        console.log('Geolocation initialized:', this.LatLng);
  
        // Start polling the user's position
        this.startPollingPosition();
      }
    }, 1000); // Check every second
  }

  
  startPollingPosition() {
    let lastLatLng = { lat: null, lng: null };
    let lastAddress = null;
  
    this.pollingInterval = setInterval(async () => {
      try {
        let position;
        
        if (this.platform.is('capacitor')) {
          position = await Geolocation.getCurrentPosition();
        } else {
          // Web fallback
          position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        }

        const newLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        await this.database.updateLocation(newLatLng);
  
        if (this.hasSignificantLocationChange(lastLatLng, newLatLng, 50)) { // Check if moved at least 50 meters
          lastLatLng = newLatLng;
  
          const address = await this.map.getAddress(newLatLng.lat, newLatLng.lng);
          
          if (address && address.results && address.results.length > 1) {
            const components = address.results[1].address_components;
            if (components.length >= 2) {
              this.locationAddress = components[0].long_name + ' ' + components[1].long_name;
              this.actualLocation = address.results[0].formatted_address;
              if (this.locationAddress !== lastAddress) {
                console.log('Updated Location Address:', this.locationAddress);
                lastAddress = this.locationAddress;
              }
            }
          } else {
            console.log('Unable to update location address');
          }
        }
  
        if (this.networkService.isConnected() && !this.stopPolling) {
          const center: [number, number] = [newLatLng.lat, newLatLng.lng];
          const radiusInM = 8000; // Example radius in meters
          await this.fetchAndDisplayDrivers(center, radiusInM);
        } else {
          console.log('No network connection.', this.stopPolling);
        }
      } catch (err) {
        console.error('Error getting position:', err);
        // Reduce error alerts by not showing specific errors repeatedly
      }
    }, 5000); // Poll every 10 seconds
  }
  
  hasSignificantLocationChange(oldLatLng, newLatLng, minDistance) {
    if (!oldLatLng.lat || !oldLatLng.lng) return true;
    
    const R = 6371e3; // Earth radius in meters
    const φ1 = oldLatLng.lat * Math.PI/180;
    const φ2 = newLatLng.lat * Math.PI/180;
    const Δφ = (newLatLng.lat - oldLatLng.lat) * Math.PI/180;
    const Δλ = (newLatLng.lng - oldLatLng.lng) * Math.PI/180;
  
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
    const distance = R * c; // Distance in meters
  
    return distance >= minDistance;
  }

  
  stopPollingPosition() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
      console.log('Stopped polling position.');
    } else {
      console.log('No polling to stop.');
    }
  }
  
  async initializeMap() {
    try {
      // Ensure coordinates are available before creating map
      
      if (!this.coordinates || !this.coordinates.coords) {
         await this.overlay.showAlert('Coordinates not available, using default location', '');
        console.warn('Coordinates not available, using default location');
        // Use default coordinates (Kuala Lumpur, Malaysia)
        this.coordinates = {
          coords: {
            latitude: 3.1390,
            longitude: 101.6869,
            accuracy: 0,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null
          },
          timestamp: Date.now()
        };
      }
      
      await this.map.createMap(this.mapRef.nativeElement, this.coordinates);
      this.mapy = true;
      this.actualLocation = this.map.actualLocation;
     // console.log('Map initialized:', this.actualLocation, this.locationAddress);
    } catch (error) {
      this.overlay.showAlert('Error initializing map:', error);
      throw new Error('Map initialization failed');
    }
  }
  
  initializeDatabaseSubscriptions() {
    this.database.getKnownPlaces().subscribe((d) => {
      console.log('Received data:', d);
      this.places = d.slice(0, 3);
    });
  }


  initializeBackButtonCustomHandler(): void {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back button pressed');
    });
  
    App.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        // Show a confirmation dialog before exiting the app
        if (confirm('Are you sure you want to exit the app?')) {
          App.exitApp();
        }
      } else {
        console.log("back clicked");
        // Use Ionic's NavController to navigate back
        // Replace 'NavController' with your specific navigation method
        // this.navCtrl.pop();
        window.history.back();
      }
    });

    // App.addListener('appStateChange', (state) => {
    //   if (!state.isActive) {
    //     this.stopPollingPosition();
    //   } else {
    //     this.startPollingPosition();
    //   }
    // });
  }
  


  
  setupMapListeners() {
    this.map.newMap.setOnCameraIdleListener(async (g) => {
      this.ngZone.run(async () => {
        this.showResetLocationButton = true;
        if (this.mapPinStage) {
          const addressResponse = await this.geocode.getAddress(g.latitude, g.longitude).toPromise();
          this.processAddressResponse(addressResponse);
        }
      });
    });
  }
  
  async logout() {
    await this.authService.logout();
  }
  
  async fetchAndDisplayDrivers(center: [number, number], radiusInM: number): Promise<void> {
    try {
      const drivers: Drivers[] = await this.database.checkDriversWithin(center, radiusInM);
      console.log('Fetched drivers:', drivers);
  
      await this.handleDrivers(drivers);
  
      if (this.drivers_Requested.length > 0) {
        this.current_Request_Number = 0; // Set to the first available driver
        await this.UpdateCarMarker(this.drivers_Requested);
        this.NoDrivers = false;
      } else {
        this.current_Request_Number = -1; // No valid driver
        await this.UpdateCarMarker([]); // Clear all markers if no drivers are requested
        this.NoDrivers = true;
      }
    } catch (error) {
      console.error('Error fetching drivers:', error);
      this.current_Request_Number = -1; // Reset the request number
      await this.UpdateCarMarker([]); // Clear all markers if there's an error
      this.NoDrivers = true;
    }
  }
  
  
  async handleDrivers(drivers: Drivers[]) {
    this.drivers_Requested = [];
    this.closeDrivers = null;
  
    console.log('Handling drivers:', drivers);
  
    if (drivers.length === 0) {
      this.NoDrivers = true;
      console.log('No drivers found.');
      return;
    }
  
    drivers.forEach((driver) => {
      if (driver) {
        console.log('Processing driver:', driver);
        if (driver.duration <= 1000 && driver.onlineState) {
          this.drivers_Requested.push(driver);
          this.updateDriverInfo(driver);
        }
  
        if (!this.closeDrivers || driver.duration < this.closeDrivers.duration) {
          this.closeDrivers = driver;
        }
      } else {
        console.error('Driver is null or undefined:', driver);
      }
    });
  
    if (this.drivers_Requested.length === 0) {
      this.NoDrivers = true;
    } else {
      // Ensuring current_Request_Number is within the bounds
      this.current_Request_Number = Math.min(this.current_Request_Number, this.drivers_Requested.length - 1);
    }
  
    console.log('Final requested drivers list:', this.drivers_Requested);
  }
  
   // Unsubscribe from all active listeners (for cleanup)
   cleanupListeners() {
    Object.values(this.database.activeListeners).forEach(unsubscribe => unsubscribe());
    this.database.activeListeners = {};
  }
 
  
  updateDriverInfo(driver) {
    console.log(this.drivers_Requested);
    this.carname = driver.Driver_car;
    this.driverImage = driver.Driver_imgUrl,
    this.driver_duration_apart = Math.ceil(driver.duration / 60000);
    this.driver_ID = driver.Driver_id;
    this.driver_number_of_seats = driver.seats;
    this.DriverLatLng = {
      lat: driver.Driver_lat,
      lng: driver.Driver_lng
    };
  }
  
  async StartRide() {
    if (this.isLoadingDriver) {
      console.log('Ride request already in progress...');
      return;
    }

    this.isLoadingDriver = true;
    this.overlay.showLoader('Preparing your ride...');

    try {
      // Group operations that can be done concurrently
      await Promise.all([
        this.clearPrevMarkers(),
        this.clearAllPolylines()
      ]);
      
      this.map.newMap.enableTouch();
      await this.BookRide();
      
    } catch (error) {
      console.error('Error starting ride:', error);
      await this.overlay.showAlert('Starting Ride Error', error.message || 'Failed to start ride');
    } finally {
      // Ensure we always hide the loader and reset the loading state
      this.isLoadingDriver = false;
      this.overlay.hideLoader();
    }
  }

async clearMarkers() {
  if (this.marker1) {
    await this.map.newMap.removeMarker(this.marker1);
    this.marker1 = null;
  }

  if (this.marker2) {
    await this.map.newMap.removeMarker(this.marker2.toString());
    this.marker2 = null;
  }

  if (this._carmarkers) {
    for (const { marker } of this._carmarkers) {
      await this.map.newMap.removeMarker(marker); // Assuming marker is the instance
    }
    this._carmarkers = []; // Clear the array after removing markers
  }
}

async BookRide() {
  try {
    if (!await this.ensureProfileInitialized()) {
      throw new Error('Profile not initialized');
    }
    if (!this.hasValidDriver()) {
      this.showNoDriversAlert();
      return;
    }
    
    const driver = this.drivers_Requested[this.current_Request_Number];
    const userDocRef = doc(this.firestore, `Drivers`, driver.Driver_id);
    
    const docSnapshot = await getDoc(userDocRef);
    
    if (!docSnapshot.exists()) {
      throw new Error('Driver document not found');
    }

    const data = docSnapshot.data();
    if (!data?.onlineState) {
      await this.handleNoAvailableDriver();
      return;
    }

    this.driverInfo = data;
    await this.requestRideWithDriverDetails(driver, userDocRef);
    this.updateDriverInfo(driver);
    
  } catch (error) {
    console.error('Error in BookRide:', error);
    this.overlay.showAlert('Error', 'Unable to book ride. Please try again.');
  }
}

hasValidDriver(): boolean {
  return this.drivers_Requested?.[this.current_Request_Number]?.Driver_id != null;
}

async requestRideWithDriverDetails(driver, userDocRef) {
  try {
    if (!await this.ensureProfileInitialized()) {
      throw new Error('Profile not initialized');
    }
    const requestDetails = {
      latLng: this.LatLng,
      destinationAddress: this.destinationAddress,
      locationAddress: this.locationAddress,
      dLatLng: this.D_LatLng,
      driverId: driver.Driver_id,
      price: this.price,
      cash: this.cash
    };

    this.requestID = await this.database.RequestRideWithRiderDetails(requestDetails);

    if (this.requestID) {
      this.currentDriver = driver;
      
      // Set up listener before handling pending state
      const rideRequestDocRef = doc(this.firestore, `Request`, this.requestID);
      const unsub = onSnapshot(rideRequestDocRef, async (doc) => {
        if (doc.exists()) {
          await this.handleRideUpdates(doc);
        } else {
          console.error('Ride request document does not exist.');
        }
      });

      this.unsubscribe = unsub;
      
      // Now handle the pending state
      await this.handlePendingState();
    } else {
      throw new Error('Failed to generate requestID');
    }
  } catch (error) {
    console.error('Error in requestRideWithDriverDetails:', error);
    this.overlay.showAlert('Error', 'Unable to request ride. Please try again.');
  }
}

showNoDriversAlert() {
  console.error('No valid driver available to book a ride.');
  this.overlay.showAlert('No Drivers ', 'No available drivers found. Please try again later.');
}

async handleNoAvailableDriver() {
  console.log('Driver is not available, moving to next.');
  this.current_Request_Number++;
  if (this.hasValidDriver()) {
    await this.BookRide();
  } else {
    this.showNoDriversAlert();
  }
}

// Make sure to clear the subscription when it's no longer needed
clearSubscriptions() {
  console.log('Clearing all subscriptions');
  
  // Clear routeUpdateSubscription first as it's the main culprit
  if (this.routeUpdateSubscription) {
    this.routeUpdateSubscription.unsubscribe();
    this.routeUpdateSubscription = null;
  }
  
  // Clear other subscriptions
  if (this.numCalls) {
    this.numCalls.unsubscribe();
    this.numCalls = null;
  }
  if (this.countDown) {
    this.countDown.unsubscribe();
    this.countDown = null;
  }
  if (this.unsubscribe) {
    this.unsubscribe();
    this.unsubscribe = null;
  }
  
  // Stop any polling interval
  if (this.pollingInterval) {
    clearInterval(this.pollingInterval);
    this.pollingInterval = null;
  }
  
  // Reset any animation state
  this.animatedMarker = null;
}

async handleRideUpdates(doc) {
  const data = doc.data();
  if (!data) return;

  try {
    switch (data.status) {
      case 'confirmed':
        await this.handleRideConfirmation(doc);
        break;
      case 'started':
        await this.handleRideStart(doc);
        break;
      case 'stopped':
        await this.handleRideStop(doc);
        break;
      case 'cancelled':
        await this.handleRideCancellation(data);
        break;
    }
  } catch (error) {
    console.error('Error handling ride updates:', error);
    if (error.code === 'permission-denied' || error.code === 'not-found') {
      await this.ReturnHome();
    }
  }
}


async handlePendingState() {
  try {
    // Don't show another loader here since BookRide is already showing one
    if (!this.currentDriver?.Driver_id) {
      throw new Error('No valid driver ID found');
    }

    // Get driver location with timeout
    const locationPromise = this.getDriverLocation(this.currentDriver.Driver_id);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Location fetch timeout')), 10000)
    );
    
    await Promise.race([locationPromise, timeoutPromise]);

    if (!this.DriverLatLng) {
      throw new Error('Failed to get driver location');
    }

    // Group all map operations
    await Promise.all([
      this.clearPrevMarkers(),
      this.clearPolyline(this.newPoly),
      this.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: this.DriverLatLng
      })
    ]);
    
    // Update map height properly instead of using fixed positioning
    this.ngZone.run(() => {
      this.setMapHeightHandleDrivertoRider();
    });
    
    await this.handleDriverToRider(this.DriverLatLng, this.LatLng);
    this.EnterSearchingStage();
    await this.startCountdown(20, this.requestID);
    
  } catch (error) {
    console.error('Error in handlePendingState:', error);
    throw error; // Let BookRide handle the error and cleanup
  }
}


async presentCancelRideActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Cancel Ride',
    buttons: [
      {
        text: 'Changed my mind',
        handler: () => {
          this.cancelRide('Changed my mind');
        }
      },
      {
        text: 'Driver took too long',
        handler: () => {
          this.cancelRide('Driver took too long');
        }
      },
      {
        text: 'Found another ride',
        handler: () => {
          this.cancelRide('Found another ride');
        }
      },
      {
        text: 'Other',
        handler: () => {
          this.cancelRide('Other');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });
  await actionSheet.present();
}

async cancelRide(reason: string) {
  const rideRef = doc(this.firestore, 'Request', this.requestID);
  await updateDoc(rideRef, {
    status: 'cancelled',
    cancellationReason: reason,
    canceledBy: 'rider'
  });
  const toast = await this.toastController.create({
    message: 'Ride has been cancelled.',
    duration: 2000
  });
  await toast.present();
}



async handleRideCancellation(data) {
  this.stopCountdown();
  await this.clearPrevMarkers();
  this.unsubscribe();
  this.clearSubscriptions();
  if (this.drivers_Requested[this.current_Request_Number + 1] && !this.rideHasStarted) {
    this.current_Request_Number++;
    await this.BookRide();
        } else {
    if (data.canceledBy == 'driver') {
      this.overlay.showAlert('Cancelled', 'Driver cancelled');
    } 
    this.ClearRide();
      this.ReturnHome();
  }
}


async handleRideStart(doc) {
  try {
    console.log('Starting ride tracking setup...');
    
    // Clear previous visual elements
    await this.clearPrevMarkers();
    await this.clearPolyline(this.newPoly);
    
    // Get ride data and validate
    const data = doc.data();
    if (!data) {
      console.warn('handleRideStart: No data found in document');
      throw new Error('No ride data available');
    }
    
    console.log('handleRideStart data:', data);
    
    // Set ride state flag first to prevent race conditions
    this.rideHasStarted = true;
    
    // Set current driver from document data with fallback options
    if (data.driverDetails) {
      this.currentDriver = data.driverDetails;
      this.driverInfo = data.driverDetails;
    } else if (data.driverId) {
      console.log('Driver details missing, attempting to fetch from driver ID');
      try {
        const driverDoc = await getDoc(doc(this.firestore, 'Drivers', data.driverId));
        if (driverDoc.exists()) {
          this.driverInfo = driverDoc.data();
          this.currentDriver = this.driverInfo;
        }
      } catch (error) {
        console.warn('Failed to fetch driver details:', error);
        // Continue with limited driver info
      }
    }
    
    // Adjust map height before adding markers
    this.setMapHeightHandleDrivertoDestination();
    window.addEventListener('resize', this.setMapHeightHandleDrivertoDestination.bind(this));
    
    // Initialize locations with fallbacks
    this.LatLng = {
      lat: data.Loc_lat || (this.LatLng?.lat || 0),
      lng: data.Loc_lng || (this.LatLng?.lng || 0)
    };
    
    this.D_LatLng = {
      lat: data.Des_lat || (this.D_LatLng?.lat || 0),
      lng: data.Des_lng || (this.D_LatLng?.lng || 0)
    };
    
    // Ensure map is initialized
    if (!this.map.newMap) {
      console.log('Map not initialized in handleRideStart, initializing now...');
      try {
        await this.initializeMap();
      } catch (mapError) {
        console.error('Failed to initialize map:', mapError);
        // Allow continuation with limited functionality
      }
    }
    
    // Get driver location with better error handling
    let driverLocationFetched = false;
    
    if (data.driverId) {
      try {
        console.log('Fetching driver location for ID:', data.driverId);
        
        // Use Promise.race with a timeout to prevent hanging
        const locationPromise = this.database.getDriverLocation(data.driverId);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Driver location fetch timeout')), 5000)
        );
        
        const driverLocation = await Promise.race([locationPromise, timeoutPromise]) as any;
        
        if (driverLocation && typeof driverLocation === 'object' && 'lat' in driverLocation && 'lng' in driverLocation) {
          console.log('Got real-time driver location:', driverLocation);
          this.DriverLatLng = {
            lat: driverLocation.lat,
            lng: driverLocation.lng
          };
          driverLocationFetched = true;
        }
      } catch (locationError) {
        console.warn('Error getting real-time driver location:', locationError);
        // Will use fallback below
      }
    }
    
    // Fallback to location in document if real-time fetch failed
    if (!driverLocationFetched) {
      console.log('Using driver location from document data');
      this.DriverLatLng = {
        lat: data.driverDetails?.Driver_lat || data.driver_lat || this.LatLng.lat,
        lng: data.driverDetails?.Driver_lng || data.driver_lng || this.LatLng.lng
      };
    }
    
    // Setup UI state even if visualization might fail
    this.EnterDrivingToDestinationStage();
    this.canCheck = true;
    
    // Proceed with visualization if we have valid coordinates
    if (this.DriverLatLng?.lat && this.D_LatLng?.lat) {
      console.log('Calling handleRiderToDestination with locations:', 
                  'Driver:', this.DriverLatLng, 
                  'Destination:', this.D_LatLng);
      
      try {
        await this.handleRiderToDestination(this.DriverLatLng, this.D_LatLng);
      } catch (visualError) {
        console.warn('Failed to visualize route, but ride is still active:', visualError);
        // Show a non-blocking toast or notification
        const toast = await this.toastController.create({
          message: 'Route visualization failed, but your ride is still active',
          duration: 3000
        });
        toast.present();
      }
    } else {
      console.warn('Invalid coordinates for visualization:', this.DriverLatLng, this.D_LatLng);
      const toast = await this.toastController.create({
        message: 'Location data incomplete. Your ride is active but not fully visualized.',
        duration: 3000
      });
      toast.present();
    }
    
    console.log('Ride tracking setup completed successfully');
    
  } catch (error) {
    console.error('Error in handleRideStart:', error);
    
    // Still enter driving stage so user can see at least some UI
    this.EnterDrivingToDestinationStage();
    this.canCheck = true;
    
    // Show a less alarming message to the user
    const toast = await this.toastController.create({
      message: 'Some ride details couldn\'t be loaded. Your ride is still active.',
      duration: 3000
    });
    toast.present();
  }
}

// Improve handleRideStop to better handle map errors
async handleRideStop(docSnapshot) {
  try {
    console.log('Handling ride stop...');
    
    // If already processed, exit immediately
    if (this.isRideStopProcessed) {
      console.log('Ride stop already processed, exiting function');
      return;
    }
    
    // Set flag immediately to prevent re-processing
    this.isRideStopProcessed = true;
    
    // Stop all location polling and mapping activities immediately
    this.stopPolling = true;
    
    // Unsubscribe from route updates first
    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
      this.routeUpdateSubscription = null;
    }
    
    // Then clear other subscriptions
    this.clearSubscriptions();
    
    // Force removal of all map elements with multiple attempts if needed
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await this.clearPrevMarkers();
        await this.clearAllPolylines();
        break; // Exit loop if successful
      } catch (e) {
        console.error(`Map cleanup attempt ${attempt + 1} failed:`, e);
        // Short delay before retry
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    // Prepare ride data with proper fallbacks for required fields
    const docData = docSnapshot.data ? docSnapshot.data() : docSnapshot;
    const tripId = docSnapshot.id || this.requestID;
    
    
    const rideData = {
      tripId: tripId || '',
      driverId: docData?.driverDetails?.Driver_id || this.driverInfo?.Driver_id || '',
      driverName: docData?.driverDetails?.Driver_name || this.driverInfo?.Driver_name || 'Unknown Driver',
      driverImage: docData?.driverDetails?.Driver_imgUrl || this.driverInfo?.Driver_imgUrl || '',
      driverCar: docData?.driverDetails?.Driver_car || this.driverInfo?.Driver_car || '',
      driverPlate: docData?.driverDetails?.Driver_plate || this.driverInfo?.Driver_plate || '',
      pickup: docData?.Rider_Location || this.locationAddress || 'Unknown pickup',
      destination: docData?.Rider_Destination || this.destinationAddress || 'Unknown destination',
      price: docData?.price || this.price || 0,
      distance: docData?.distance || this.distance || 0,
      duration: docData?.duration || this.duration || '',
      rating: docData?.driverDetails?.Driver_rating || this.driverInfo?.Driver_rating || 0,
      completed: true,
      completedAt: new Date()
    };

    // CRITICAL: Clear ride state from storage BEFORE showing modal
    try {
      await Preferences.remove({ key: this.RIDE_STATE_KEY });
      console.log('Cleared ride state from storage');
    } catch (e) {
      console.warn('Error clearing storage:', e);
    }

    // Reset ride properties BEFORE showing modal
    this.rideHasStarted = false;
    this.driverLocation = null;
    this.lastHandledState = null;
    
    console.log('Showing trip summary with data:', rideData);
    
    // Show the trip summary
    const modal = await this.modalCtrl.create({
      component: TripSummaryComponent,
      componentProps: { rideData }
    });
    
    await modal.present();
    
    // Clean up once modal is dismissed
    modal.onDidDismiss().then(() => {
      console.log('Trip summary dismissed, resetting state');
      this.isRideStopProcessed = false; // Reset the flag
      this.clearRideState();            // Additional cleanup
      this.ReturnHome();                // Return to booking view
    });

  } catch (error) {
    console.error('Error in handleRideStop:', error);
    this.isRideStopProcessed = false;
    this.ReturnHome();
  }
}

// Add this method for more thorough ride state cleanup
private clearRideState() {
  console.log('Clearing ride state completely');
  
  // First clear all subscriptions
  this.clearSubscriptions();
  
  // Reset all ride-related properties
  this.requestID = null;
  this.driverInfo = null;
  this.currentDriver = null;
  this.driver_marker = null;
  this.rider_marker = null;
  this.destinationMarker = null;
  this.routePolyline = null;
  this.routePath = null;
  this.newPoly = null;
  this.animatedMarker = null;
  this.driverLocation = null;
  this.isRideStopProcessed = false;
  
  // Reset stage-related properties
  this.bookingStage = false;
  this.confirmStage = false;
  this.trackingStage = false;
  this.searchingStage = false;
  this.noDriverStage = false;
  this.drivingToDestinationStage = false;
  this.mapPinStage = false;
  
  // Set default stage
  this.EnterBookingStage();
  
  // Stop polling
  this.stopPolling = false;
  
  // Re-enable map interactions if needed
  if (this.map && this.map.newMap) {
    this.map.newMap.enableCurrentLocation(true);
    this.map.newMap.enableTouch();
  }
}

async handleRideConfirmation(docOrData) {
  try {
    console.log('Starting ride confirmation handling...', docOrData);
    this.stopCountdown();

    // Clear existing markers and polylines
    await Promise.all([
      this.clearPrevMarkers(),
      this.clearPolyline(this.newPoly)
    ]);

    // Get the ride data
    let rideData;
    let docId;
    
    if (!docOrData) {
      throw new Error('Invalid input: null or undefined');
    }
    
    // Handle different input types
    if (typeof docOrData.data === 'function') {
      // It's a Firebase DocumentSnapshot
      rideData = docOrData.data();
      docId = docOrData.id;
    } else {
      // It's already a data object from currentRide.data()
      rideData = docOrData;
      docId = this.requestID; // Use the current requestID if available
    }
    
    if (!rideData) {
      throw new Error('No ride data found');
    }

    // Update ride information
    this.requestID = docId || rideData.requestId;
    this.driverInfo = rideData.driverDetails;
    
    // Set driver information for UI display to avoid template errors
    if (this.driverInfo) {
      this.carname = this.driverInfo.Driver_car || 'Unknown Car';
      this.driverImage = this.driverInfo.Driver_imgUrl || 'assets/icon/profile.png';
      this.driver_ID = this.driverInfo.Driver_id;
      this.driver_number_of_seats = this.driverInfo.seats || 4;
      this.driver_duration_apart = this.driverInfo.duration ? 
        Math.ceil(this.driverInfo.duration / 60000) : 0;
    }
    
    // Set locations
    this.LatLng = {
      lat: rideData.Loc_lat,
      lng: rideData.Loc_lng
    };
    
    this.D_LatLng = {
      lat: rideData.Des_lat,
      lng: rideData.Des_lng
    };

    // Initialize map if not already initialized
    if (!this.map.newMap) {
      await this.initializeMap();
    }

    // Get and wait for driver location
    if (!this.driverInfo?.Driver_id) {
      console.warn('Driver ID not found in driver details, using fallback location');
      // Use fallback location from driver details
      this.driverLocation = {
        lat: this.driverInfo?.Driver_lat || this.driverInfo?.driver_lat,
        lng: this.driverInfo?.Driver_lng || this.driverInfo?.driver_lng
      };
    } else {
      try {
        await this.getDriverLocation(this.driverInfo.Driver_id);
      } catch (locationError) {
        console.warn('Error getting real-time driver location, using fallback:', locationError);
        // Use fallback location from driver details
        this.driverLocation = {
          lat: this.driverInfo?.Driver_lat || this.driverInfo?.driver_lat,
          lng: this.driverInfo?.Driver_lng || this.driverInfo?.driver_lng
        };
      }
    }

    if (!this.driverLocation?.lat || !this.driverLocation?.lng) {
      throw new Error('Unable to determine driver location');
    }

    this.DriverLatLng = {
      lat: this.driverLocation.lat,
      lng: this.driverLocation.lng
    };

    console.log('Driver location set:', this.DriverLatLng);

    // Set map height and add event listener
    this.setMapHeightHandleDrivertoRider();
    window.addEventListener('resize', this.setMapHeightHandleDrivertoRider.bind(this));

    // Initialize the map view with driver and rider markers
    await this.handleDriverToRider(this.DriverLatLng, this.LatLng);

    // Update UI state
    this.EnterTrackingStage();
    
    // Save ride state to local storage
    await this.saveRideStateToStorage();

    console.log('Ride confirmation handled successfully');
    return true;
  } catch (error) {
    console.error('Error handling ride confirmation:', error);
    return false;
  }
}

// Add this method to save ride state to storage
private async saveRideStateToStorage() {
  try {
    const rideState = {
      requestID: this.requestID,
      driverInfo: this.driverInfo,
      LatLng: this.LatLng,
      D_LatLng: this.D_LatLng,
      DriverLatLng: this.DriverLatLng,
      stage: this.getCurrentStage()
    };
    
    await Preferences.set({
      key: 'RIDE_STATE',
      value: JSON.stringify(rideState)
    });
    
    console.log('Ride state saved successfully');
  } catch (error) {
    console.error('Error saving ride state:', error);
    // Don't throw the error as this is not critical
  }
}


// Update getDriverLocation to return a Promise<void> and handle errors better
getDriverLocation(driverId: string): Promise<void> {
  if (!driverId) {
    return Promise.reject(new Error('No driver ID provided'));
  }

  console.log('Getting driver location for:', driverId);
  return this.database.getDriverLocation(driverId)
    .then(location => {
      if (!location || !location.lat || !location.lng) {
        throw new Error('Invalid location data received');
      }
      console.log('Driver location received:', location);
      this.driverLocation = location;
    })
    .catch(error => {
      console.error('Error getting driver location:', error);
      throw error;
    });
}



async EnterChat(): Promise<void> {
const options: ModalOptions = {
    component: EnrouteChatComponent,
    componentProps: {
        userId: this.requestID,
        message: ""
    },
    swipeToClose: true,
};

const modal = await this.modalCtrl.create(options);
return await modal.present();
}

async startCountdown(initialTime, requestId) {
  this.countdownActive = true;
  let timeRemaining = initialTime;

  const updateCountdown = async () => {
    if (!this.countdownActive) {
      console.log('Countdown stopped');
      return;
    }

    if (timeRemaining > 0) {
      try {
        await this.database.UpdateCountDown(timeRemaining, requestId);
        timeRemaining--;
        setTimeout(updateCountdown, 1000);
      } catch (error) {
        console.error('Error updating countdown:', error);
        // Retry after a short delay
        setTimeout(updateCountdown, 2000);
      }
    } else {
      await this.handleCountdownEnd(requestId);
      console.log('Countdown ended');
    }
  };

  updateCountdown();
}

async handleCountdownEnd(requestId) {
  try {
    // Implement a grace period to account for any delays
    setTimeout(async () => {
      await this.clearPrevMarkers();
      await this.requestNextDriver();
    }, 5000); // 5-second grace period
  } catch (error) {
    console.error('Error handling countdown end:', error);
    // Optionally, retry the operation or notify the user
  }
}


stopCountdown() {
  this.countdownActive = false;
}

async goBackToAutoComplete() {
  try {
    this.stopPolling = false;
    // Enable current location and set the camera to the initial position
    await this.map.newMap.enableCurrentLocation(true);
 

    await this.ResetState();

    await this.showAutocompleteModal();
    

    console.log('Game state reset successfully');
  } catch (error) {
    console.error('Error resetting game state:', error);
  }
}

private async clearPrevMarkers() {
  try {
    // Check if map is initialized
    if (!this.map || !this.map.newMap) {
      console.warn('Map not initialized when clearing markers');
      return; // Exit early if map is not available
    }
    
    console.log('Clearing all markers...');
    
    // Clear individual markers with proper error handling
    const markers = [
      this.rider_marker,
      this.driver_marker,
      this.destinationMarker,
      this.marker1,
      this.marker2,
      this.animatedMarker
    ];
    
    const clearPromises = markers
      .filter(marker => marker !== null && marker !== undefined)
      .map(marker => this.clearMarker(marker).catch(e => {
        console.error('Error clearing specific marker:', e);
        // Continue despite error
        return null;
      }));
    
    await Promise.all(clearPromises);
    
    // Reset all marker references
    this.rider_marker = null;
    this.driver_marker = null;
    this.destinationMarker = null;
    this.marker1 = null;
    this.marker2 = null;
    this.animatedMarker = null;
    
    console.log('All markers cleared successfully');
  } catch (e) {
    console.error('Error in clearPrevMarkers:', e);
    // Just log the error but don't throw, allowing the process to continue
  }
}

// Add this helper method for individual marker clearing
private async clearMarker(marker) {
  if (!marker || !this.map?.newMap) return Promise.resolve();
  
  try {
    console.log('Clearing marker:', marker);
    await this.map.newMap.removeMarker(marker);
    return true;
  } catch (error) {
    console.error('Error clearing marker:', error);
    return false;
  }
}

// Modify clearAllPolylines for safer handling
async clearAllPolylines() {
  try {
    if (!this.map || !this.map.newMap) {
      console.warn('Map not initialized when clearing polylines');
      return;
    }
    
    console.log('Clearing all polylines...');
    
    // Try to clear specific polyline first
    if (this.newPoly) {
      try {
        await this.map.newMap.removePolylines(this.newPoly);
        console.log('Specific polyline cleared');
      } catch (error) {
        console.error('Error clearing specific polyline:', error);
      }
    }
    
    // Reset reference
    this.newPoly = null;
      } catch (error) {
    console.error('Error in clearAllPolylines:', error);
    // Just log the error but don't throw
  }
}


async ResetState(){
  try{
    // Clear previous markers
    await this.clearPrevMarkers();

    // Clear any existing polylines
    await this.clearPolyline(this.newPoly);

    await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
    });

    this.ResetMapHeight();
    window.addEventListener('resize', this.ResetMapHeight.bind(this));
  
    this.map.newMap.enableTouch();
    // Ensure the map respects the boundaries of the top and bottom bars
    this.current_Request_Number = 0;
    this.price = null;
    this.actualDestination = null;
    this.D_LatLng = { lat: null, lng: null };
    this.destinationAddress = 'Unknown location';

    await this.map.newMap.enableCurrentLocation(true);
    
  }catch(e){
    throw new Error(e);
    
  }
}

async showAutocompleteModal(): Promise<void> {
  const options: ModalOptions = {
      component: AutocompleteComponent,
      componentProps: {
          LatLng: this.LatLng,
          locationAddress: this.locationAddress,
      },
      swipeToClose: true,
  };

  const modal = await this.modalCtrl.create(options);
  await modal.present();

  const { data } = await modal.onWillDismiss();
  console.log('Modal dismissed with data:', data);

  this.data = data;

  if (data.pinOnMap) {
      this.EnterMapPinStage();
      this.mapPinDrag = true;
      this.stopPolling = true;

  }

  if (data.home) {
      console.log("Entering Booking Stage...");
      this.EnterBookingStage();
      this.stopPolling = false;
      this.ResetState();
  }

  if (data.searching) {
      this.database.AddKnownPlace(data);
      this.destinationAddress = data.full;
      this.actualDestination = data.whole.full;

      try {
          const latLng = await this.geocode.getLatLng(data.whole.description).toPromise();
          this.D_LatLng = {
              lat: latLng.results[0].geometry.location.lat,
              lng: latLng.results[0].geometry.location.lng,
          };
          console.log("Destination LatLng:", this.D_LatLng);

          await this.getDistanceAndDirections();
    } catch (error) {
          console.error("Error in geocoding:", error);
          this.overlay.showAlert('Error in geocoding:', error.message);
      }
  }
}


async RequestRide(dat) {
  if (!this.NoDrivers) {
    this.destinationAddress = dat.place.full;
    this.actualDestination = dat.place.whole.full;

    try {
      const latLng = await this.geocode.getLatLng(dat.place.whole.description).toPromise();
      this.D_LatLng = {
        lat: latLng.results[0].geometry.location.lat,
        lng: latLng.results[0].geometry.location.lng,
      };

      await this.getDistanceAndDirections();
  } catch (error) {
      console.error("Error in geocoding:", error);
      this.overlay.showAlert('Check Your Network', error.message);
    }
  } else {
    this.EnterNoDriverStage();
    console.log("No drivers available");
  }
}

async getDistanceAndDirections() {
  console.log("getDistanceAndDirections called");
  this.duration = null;
  await this.clearMarkers();
  this.cleanupListeners();
  this.stopPolling = true;

  if (this.D_LatLng && this.D_LatLng.lat) {
    console.log("D_LatLng is set:", this.D_LatLng);

    if (!this.NoDrivers) {
      this.EnterConfirmStage();
    } else {
      this.EnterNoDriverStage();
      console.log("No drivers available");
      return;
    }
    
    const origin1 = new google.maps.LatLng(this.LatLng.lat, this.LatLng.lng);
    const origin2 = new google.maps.LatLng(this.D_LatLng.lat, this.D_LatLng.lng);
    
    const request = {
      origin: origin1,
      destination: origin2,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    
    this.geocode.directions.route(request, async (response, status) => {
      if (status === 'OK') {
        this.direction = response;
        this.distance = response.routes[0].legs[0].distance.value;
        this.bounds = response.routes[0].bounds;
        this.price = await this.database.getPriceEstimate(this.distance);
        this.duration = response.routes[0].legs[0].duration.text;

        // Build full path from the directions response so polyline follows the route
        const path = response.routes[0].overview_path.map(latlng => ({
          lat: latlng.lat(),
          lng: latlng.lng()
        }));

        await this.createAndAddMarkers(this.LatLng, this.D_LatLng, path);

        // Call getDistanceAndDirectionsDriver after this part is successful
        await this.getDistanceAndDirectionsDriver();
      } else {
        console.error('Direction ERROR:', response);
        this.overlay.showAlert('Check Your Network', JSON.stringify(response));
      }
    });
  } else {
    this.overlay.showAlert('Drag Map', 'Drag the map and stop on your required destination');
    console.error('D_LatLng or D_LatLng.lat is undefined');
  }
}

async getDistanceAndDirectionsDriver() {
  console.log("getDistanceAndDirectionsDriver called");

  if (!this.NoDrivers) {
    console.log("Driver LatLng:", this.DriverLatLng);

    if (this.DriverLatLng) {
      const origin1 = new google.maps.LatLng(this.LatLng.lat, this.LatLng.lng);
      const origin2 = new google.maps.LatLng(this.DriverLatLng.lat, this.DriverLatLng.lng);

      const request = {
        origin: origin1,
        destination: origin2,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      this.geocode.directions.route(request, (response, status) => {
        if (status === 'OK') {
          this.D_duration = response.routes[0].legs[0].duration.text;
          console.log("Driver duration:", this.D_duration);
        } else {
          console.error('Direction ERROR:', response);
          this.overlay.showAlert('Direction ERROR:', JSON.stringify(response));
        }
      });
    } else {
      console.log("DriverLatLng is undefined");
    }
  } else {
    console.log("No drivers available");
  }
}




async resetLocation(): Promise<void> {
console.log(this.LatLng);
await this.map.newMap.setCamera({
    animate: true,
    animationDuration: 500,
    zoom: 15,
    coordinate: this.LatLng
});
this.showResetLocationButton = false;
}



processAddressResponse(addressResponse) {
  console.log("processAddressResponse : " + addressResponse);
  if (addressResponse) {
      console.log(addressResponse);
      this.actualDestination = this.map.actualLocation;
      const results = addressResponse.results;

      if (results && results.length > 1 && results[1].geometry && results[1].geometry.location) {
          this.D_LatLng = {
              lat: results[1].geometry.location.lat,
              lng: results[1].geometry.location.lng
          };

          const addressComponents = results[1].address_components;
          if (addressComponents && addressComponents.length > 1) {
              this.destinationAddress = `${addressComponents[0].long_name} ${addressComponents[1].long_name}`;
              console.log("this is it " + this.destinationAddress);
          } else {
              console.log('Address components are missing or incomplete.');
              this.destinationAddress = 'Unknown address';
          }
      } else {
          console.log('Results are missing or incomplete.');
          this.D_LatLng = { lat: null, lng: null };
          this.destinationAddress = 'Unknown location';
      }
  } else {
      console.log('Failed to fetch address.');
      this.D_LatLng = { lat: null, lng: null };
      this.destinationAddress = 'Failed to fetch address';
  }
}


async UpdateCarMarker(elements: Drivers[]) {
  console.log('Elements to update car markers:', elements);

  const bounds = new google.maps.LatLngBounds();

  // Create a map of driver IDs to driver elements for quick lookup
  const driverMap = new Map(elements.map(element => [element.Driver_id, element]));

  // Track markers to keep and update
  const updatedMarkers: { id: string, marker: any }[] = [];

  // Remove markers that are not needed and update positions
  for (const { id, marker } of this._carmarkers) {
    const driver = driverMap.get(id);
    if (!driver || !driver.onlineState) {
      console.log(`Removing marker for driver ID: ${id}`);
      await this.map.newMap.removeMarker(marker); // Remove the marker from the map
    } else if (driver.Driver_lat !== undefined && driver.Driver_lng !== undefined) {
      const latlng = { lat: driver.Driver_lat, lng: driver.Driver_lng };
      // Remove old marker and add a new one with updated position
      await this.map.newMap.removeMarker(marker);
     // updatedMarkers.push({ id, marker: newMarker });
      bounds.extend(latlng);
      console.log(`Updated marker for driver ID: ${id}`);
    } else {
      console.error('Invalid driver coordinates:', driver);
    }
  }

  // Add new markers for drivers that are online and not in the existing markers
  for (const element of elements) {
    if (element.onlineState) {
      const existingMarkerIndex = updatedMarkers.findIndex(({ id }) => id === element.Driver_id);
      if (existingMarkerIndex === -1 && element.Driver_lat !== undefined && element.Driver_lng !== undefined) {
        const latlng = { lat: element.Driver_lat, lng: element.Driver_lng };
        console.log(`Adding new marker for driver ID: ${element.Driver_id} at`, latlng);
        try {
          // const marker = await this.map.newMap.addMarker({
          //   coordinate: latlng,
          //   iconUrl: 'https://i.ibb.co/KDy365b/hatchback.png',
          //   title: 'Driver',
          //   iconSize: { width: 30, height: 30 }
          // });

          // if (marker) {
          //   updatedMarkers.push({ id: element.Driver_id, marker });
          //   bounds.extend(latlng);
          // }
        } catch (error) {
          console.error('Error adding marker:', error);
        }
      }
    }
  }

  // Update the _carmarkers array with the updated markers
  this._carmarkers = updatedMarkers;

  // Center the map around the car markers if there are any markers
  if (updatedMarkers.length > 0) {
    const mapDim = {
      height: this.mapRef.nativeElement.offsetHeight,
      width: this.mapRef.nativeElement.offsetWidth
    };

    const minZoom = 5; // Define your minimum zoom level
    const maxZoom = 18; // Define your maximum zoom level
    
    let zoomLevel = await this.map.getBoundsZoomLevel(bounds, mapDim);
    
    // Constrain the zoom level within the min and max range
    zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
    
    console.log('Setting camera with zoom level:', zoomLevel);
    
    await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: zoomLevel,
      coordinate: bounds.getCenter()
    });

    this.map.newMap.fitBounds(bounds);
      } else {
    console.log('No markers to display on the map.');
  }
}



async GoHome() {
  await this.map.newMap.enableCurrentLocation(true);
  this.current_Request_Number = 0;
  this.stopPolling = false;
  this.price = null;
  this.EnterBookingStage();
  await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
  });
}

async GotoSupport() {
  await this.nav.navigateForward('support');
}


async ReturnHome() {
  await this.ResetState();
  this.EnterBookingStage();
  this.stopPolling = false;
  await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
  });
}

async CancelRide() {
  try {
    this.overlay.showLoader('Cancelling your ride...');
    await this.clearPrevMarkers();
    await this.clearPolyline(this.newPoly);

    this.unsubscribe();
    this.numCalls.unsubscribe();
    this.riderCleared = true;
    await this.database.cancelRide(this.requestID);
    await this.map.newMap.enableCurrentLocation(true);
    this.current_Request_Number = 0;
    this.price = null;
    this.EnterBookingStage();
    this.overlay.hideLoader();
    await this.map.newMap.setCamera({
      animate: true,
      animationDuration: 500,
      zoom: 15,
      coordinate: this.LatLng
    });
    await this.clearRideState();
  } catch (error) {
    this.overlay.hideLoader();
    console.error('Error cancelling ride:', error);
    this.overlay.showAlert('Error', 'Failed to cancel ride. Please try again.');
  }
}

async ClearRide() {
  try {
    const user = this.auth.currentUser;
    if (user) {
      const riderDocRef = doc(this.firestore, 'Riders', user.uid);
      await updateDoc(riderDocRef, {
        currentRequestId: null
      });
    }
  } catch (error) {
    console.error('Error clearing ride state:', error);
  }

  this.EnterBookingStage();
  await this.clearPrevMarkers();
  await this.clearPolyline(this.newPoly);
  this.newPoly = null;

  await this.map.newMap.enableCurrentLocation(true);
  this.current_Request_Number = 0;
  this.price = null;
  await this.map.newMap.setCamera({
    animate: true,
    animationDuration: 500,
    zoom: 15,
    coordinate: this.LatLng,
    bearing: 0
  });
}

async CallDriver() {
  // Implement CallDriver logic
}


// Interval in milliseconds for updating the route
UPDATE_INTERVAL = 10000; // Update every 10 seconds

async handleDriverToRider(driverLatLng, riderLatLng) {
  const markerSize = { width: 30, height: 30 };
  const iconAnchor = { x: 15, y: 30 }; // Center bottom of the icon

  try {
    // Cancel any existing route update subscription first
    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
      this.routeUpdateSubscription = null;
    }
    
    // Check if map is initialized, if not initialize it
    if (!this.map.newMap) {
      console.log('Map not initialized, initializing now...');
      await this.initializeMap();
    }
    
    // Thoroughly clean up previous visual elements
    await this.clearPrevMarkers();
    await this.clearAllPolylines();
    
    // Use the unified height method and ensure proper positioning
    this.setMapContainerHeight(20);
    
    // Add driver marker at the starting position with adjusted z-index
    const driverMarker = await this.map.newMap.addMarker({
      coordinate: driverLatLng,
      iconUrl: 'assets/icon/car.png',
      title: 'Driver',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      zIndex: 10 // Ensure marker appears above polylines
    });
    this.driver_marker = driverMarker;

    // Add rider marker with higher z-index
    const riderMarker = await this.map.newMap.addMarker({
      coordinate: riderLatLng,
      iconUrl: this.database.user?.photoURL || 'assets/icon/person.png',
      title: 'Rider',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      zIndex: 11 // Higher than driver marker
    });
    this.rider_marker = riderMarker;

    // Function to update route, duration, and distance
    const updateRoute = async () => {
        const request = {
          origin: driverLatLng,
        destination: riderLatLng,
          travelMode: google.maps.TravelMode.DRIVING,
        };

        this.geocode.directions.route(request, async (response, status) => {
          if (status === 'OK') {
            const path = response.routes[0].overview_path.map(latlng => ({
              lat: latlng.lat(),
              lng: latlng.lng()
            }));
            this.duration = response.routes[0].legs[0].duration.text;
            this.distance = response.routes[0].legs[0].distance.text;

            console.log(`Duration: ${this.duration}, Distance: ${this.distance}`);

            const locs = [
              { geoCode: { latitude: driverLatLng.lat, longitude: driverLatLng.lng } },
            { geoCode: { latitude: riderLatLng.lat, longitude: riderLatLng.lng } },
            ];

            const center = this.map.calculateCenter(locs);

            const bounds = new google.maps.LatLngBounds();
            bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
          bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
    
            const availableHeight = this.mapRef.nativeElement.offsetHeight;
    
            // Prepare map dimensions for calculating zoom level
            const mapDim = {
              height: availableHeight,
              width: this.mapRef.nativeElement.offsetWidth,
            };
    
            // Calculate zoom level
            const zoomLevel = this.map.getBoundsZoomLevel(bounds, mapDim);
    
            // Manually set zoom level if needed
            const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
    
          await this.map.setCameraToLocation({ lat: center.latitude, lng: center.longitude }, adjustedZoomLevel, this.map.calculateBearing(driverLatLng, riderLatLng));
    
          // Clear existing polyline before drawing a new one
          await this.clearAllPolylines();
          // Draw full route polyline (use overview_path)
          await this.addPolyline(driverLatLng, riderLatLng, path);
            
            // Clear any existing animated marker before starting a new animation
            if (this.animatedMarker) {
              await this.map.newMap.removeMarker(this.animatedMarker);
              this.animatedMarker = null;
            }
            
          // Animate the driver marker along the path to the rider
            await this.animateMarker(this.driver_marker, path, 'assets/icon/car.png');
          } else {
            console.error('Direction ERROR:', response);
            this.overlay.showAlert('Direction ERROR', JSON.stringify(response));
          }
        });
    };

    // Start updating the route periodically
    const routeUpdate$ = interval(this.UPDATE_INTERVAL).pipe(
      switchMap(() => updateRoute())
    );

    // Subscribe to the interval observable to start updating
    this.routeUpdateSubscription = routeUpdate$.subscribe();

  } catch (error) {
    console.error('Error handling driver to rider:', error);
  }
}

// Update clearPolyline to handle null map
async clearPolyline(polylineId) {
  if (!polylineId || !this.map?.newMap) return;
  
  try {
    await this.map.newMap.removePolylines(polylineId);
  } catch (error) {
    console.error('Error clearing polyline:', error);
  }
}


async handleRiderToDestination(driverLatLng, destinationLatLng) {
  const markerSize = { width: 30, height: 30 };
  const iconAnchor = { x: 10, y: 0 }; // Center bottom of the icon

  try {
    // Cancel any existing route update subscription first
    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
      this.routeUpdateSubscription = null;
    }
    
    // Check if map is initialized, if not initialize it
    if (!this.map.newMap) {
      console.log('Map not initialized, initializing now...');
      await this.initializeMap();
    }
    
    // Reset map position and apply proper height first
    this.mapRef.nativeElement.style.top = '0';
    this.setMapHeightHandleDrivertoDestination();
    
    // Thoroughly clean up previous visual elements
    await this.clearPrevMarkers();
    await this.clearAllPolylines();
    
    // Update driver marker to driver's current position
    const driverMarker = await this.map.newMap.addMarker({
      coordinate: driverLatLng,
      iconUrl: 'assets/icon/car.png',
      title: 'Driver',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
      zIndex: 10, // Higher z-index to appear above polyline
    });
    this.driver_marker = driverMarker;

    // Add destination marker
    const destinationMarker = await this.map.newMap.addMarker({
      coordinate: destinationLatLng,
      iconUrl: 'assets/icon/flag.png',
      title: 'Destination',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
      zIndex: 11, // Higher z-index than driver marker
    });
    this.destinationMarker = destinationMarker;

    // Function to update route, duration, and distance
    const updateRoute = async () => {
        const request = {
          origin: driverLatLng,
          destination: destinationLatLng,
          travelMode: google.maps.TravelMode.DRIVING,
        };

        this.geocode.directions.route(request, async (response, status) => {
          if (status === 'OK') {
            const path = response.routes[0].overview_path.map(latlng => ({
              lat: latlng.lat(),
              lng: latlng.lng()
            }));
            this.duration = response.routes[0].legs[0].duration.text;
            this.distance = response.routes[0].legs[0].distance.text;

            console.log(`Duration: ${this.duration}, Distance: ${this.distance}`);

            const locs = [
              { geoCode: { latitude: driverLatLng.lat, longitude: driverLatLng.lng } },
              { geoCode: { latitude: destinationLatLng.lat, longitude: destinationLatLng.lng } },
            ];

            const center = this.map.calculateCenter(locs);

            const bounds = new google.maps.LatLngBounds();
            bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
            bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
    
            const availableHeight = this.mapRef.nativeElement.offsetHeight;
    
            // Prepare map dimensions for calculating zoom level
            const mapDim = {
              height: availableHeight,
              width: this.mapRef.nativeElement.offsetWidth,
            };
    
            // Calculate zoom level
            const zoomLevel = this.map.getBoundsZoomLevel(bounds, mapDim);
    
            // Manually set zoom level if needed
            const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary
    
            // Set the camera to focus on the center point with appropriate zoom level
            await this.map.setCameraToLocation({ lat: center.latitude, lng: center.longitude }, adjustedZoomLevel, this.map.calculateBearing(driverLatLng, destinationLatLng));
    
          // Clear existing polyline before drawing a new one
          await this.clearAllPolylines();
            // Draw full route polyline (use overview_path)
            await this.addPolyline(driverLatLng, destinationLatLng, path);
            
            // Clear any existing animated marker before starting a new animation
            if (this.animatedMarker) {
              await this.map.newMap.removeMarker(this.animatedMarker);
              this.animatedMarker = null;
            }
            
            // Animate the driver marker along the path to the destination
            await this.animateMarker(this.driver_marker, path, 'assets/icon/car.png');
          } else {
            console.error('Direction ERROR:', response);
            this.overlay.showAlert('Direction ERROR', JSON.stringify(response));
          }
        });
    };

    // Start updating the route periodically
    const routeUpdate$ = interval(this.UPDATE_INTERVAL).pipe(
      switchMap(() => updateRoute())
    );

    // Subscribe to the interval observable to start updating
    this.routeUpdateSubscription = routeUpdate$.subscribe();

  } catch (error) {
    console.error('Error handling rider to destination:', error);
  }
}

// Add polyline using either a full route path or fallback to start/end
async addPolyline(loc: { lat: number, lng: number }, des: { lat: number, lng: number }, routePath?: { lat: number, lng: number }[]) {
  try {
    const polylineColor = "#007bff";
    const pathPoints = Array.isArray(routePath) && routePath.length > 0 ? routePath : [
      { lat: loc.lat, lng: loc.lng },
      { lat: des.lat, lng: des.lng }
    ];

    const polylines: Polyline[] = [
      {
        path: pathPoints,
        strokeColor: polylineColor,
        strokeWeight: 8,
        geodesic: true
      }
    ];

    const addedPolylines = await this.map.newMap.addPolylines(polylines);
    if (Array.isArray(addedPolylines) && addedPolylines.length > 0) {
      this.newPoly = addedPolylines; // assign the returned ids
      console.log('Polylines added:', this.newPoly);
      return this.newPoly;
    } else {
      throw new Error('Failed to add polyline: Unexpected response format');
    }
  } catch (e) {
    console.error('Error Adding Polyline: ', e);
    throw e;
  }
}

// create markers and optionally draw a full route if provided
async createAndAddMarkers(loc, des, routePath?: { lat: number, lng: number }[]) {
  const markerSize = { width: 30, height: 30 };
  const iconAnchor = { x: 10, y: 0 }; // Center bottom of the icon

  try {
    this.map.newMap.disableTouch();

    // Add start marker
    this.marker1 = await this.map.newMap.addMarker({
      coordinate: loc,
      iconUrl: 'assets/icon/point.png',
      title: 'Start',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 1, y: 0 },
    });

    // Add destination marker
    this.marker2 = await this.map.newMap.addMarker({
      coordinate: des,
      iconUrl: 'assets/icon/flag.png',
      title: 'Destination',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 1, y: 0 },
    });

    // Calculate the center point between the start and destination
    const locs = [
      { geoCode: { latitude: loc.lat, longitude: loc.lng } },
      { geoCode: { latitude: des.lat, longitude: des.lng } },
    ];

    const center = this.map.calculateCenter(locs);

    // Calculate the bounds
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
    bounds.extend(new google.maps.LatLng(des.lat, des.lng));

    // Set map height before calculating zoom level
    this.setMapHeight();
    const availableHeight = this.mapRef.nativeElement.offsetHeight;

    // Prepare map dimensions for calculating zoom level
    const mapDim = {
      height: availableHeight,
      width: this.mapRef.nativeElement.offsetWidth,
    };

    // Calculate zoom level
    const zoomLevel = this.map.getBoundsZoomLevel(bounds, mapDim);

    // Manually set zoom level if needed
    const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

    // Set the camera to focus on the center point with appropriate zoom level
    await this.map.setCameraToLocation({ lat: center.latitude, lng: center.longitude }, adjustedZoomLevel, this.map.calculateBearing(loc, des));

    // Add polyline for the route. Prefer full routePath when provided.
    const polylineColor = "#007bff";
    const pathPoints = Array.isArray(routePath) && routePath.length > 0 ? routePath : [
      { lat: loc.lat, lng: loc.lng },
      { lat: des.lat, lng: des.lng }
    ];

    const polylines: Polyline[] = [
      {
        path: pathPoints,
        strokeColor: polylineColor,
        strokeWeight: 8,
        geodesic: true
      }
    ];

    // Add polyline to the map
    this.newPoly = await this.map.newMap.addPolylines(polylines);
  } catch (error) {
    console.error('Error creating and adding markers:', error);
  }
}



// Update the animateMarker method to properly handle cleanup
async animateMarker(marker, path, iconUrl) {
  const markerSize = { width: 50, height: 50 };
  const iconAnchor = { x: 25, y: 50 }; // Center bottom of the icon
  
  // Remove any existing animated marker
  if (this.animatedMarker) {
    await this.map.newMap.removeMarker(this.animatedMarker);
    this.animatedMarker = null;
  }

  let lastMarker = null;
  
  for (let i = 0; i < path.length; i++) {
    // Remove previous animation step marker if it exists
    if (lastMarker) {
      await this.map.newMap.removeMarker(lastMarker);
    }
    
    // Remove the original marker for the first frame of animation
    if (i === 0) {
      await this.map.newMap.removeMarker(marker);
    }
    
    const coordinate = path[i] instanceof google.maps.LatLng ? 
                     { lat: path[i].lat(), lng: path[i].lng() } : 
                     { lat: path[i].lat, lng: path[i].lng };
                     
    lastMarker = await this.map.newMap.addMarker({
      coordinate: coordinate,
      iconUrl: iconUrl,
      title: 'Moving Marker',
      iconSize: markerSize,
      iconAnchor: iconAnchor,
      iconOrigin: { x: 0, y: 0 },
      zIndex: 20, // Higher than other markers
    });
    
    await new Promise(resolve => setTimeout(resolve, 100)); // Adjust the interval as needed
  }

  // Store the last position of the animated marker
  this.animatedMarker = lastMarker;
}




async ShowDriverInfoPop() {
  const alert = await this.alert.create({
    header: 'Driver Information',
    message: `
      <div style="text-align: center;">
        <h2 style="font-size: 1.2em; margin-bottom: 0.5em;">Car Name: ${this.carname}</h2>
        <div style="margin: 10px 0;">
          <img src="${this.driverImage}" alt="Driver Image" style="width: 60px; height: 60px; border-radius: 50%;">
        </div>
        <p><strong>Duration Apart:</strong> ${this.driver_duration_apart} minutes</p>
        <p><strong>Driver ID:</strong> ${this.driver_ID}</p>
        <p><strong>Number of Seats:</strong> ${this.driver_number_of_seats}</p>
        <p><strong>Driver Location:</strong> (${this.DriverLatLng.lat}, ${this.DriverLatLng.lng})</p>
      </div>
    `,
    buttons: ['OK']
  });

  await alert.present();
}


// State management methods
EnterBookingStage() {
  this.setStage(this.STAGES.BOOKING);
}

EnterMapPinStage() {
  this.setStage(this.STAGES.MAP_PIN);
}

EnterConfirmStage() {
  this.setStage(this.STAGES.CONFIRM);
}

EnterSearchingStage() {
  this.setStage(this.STAGES.SEARCHING);
}

EnterNoDriverStage() {
  this.setStage(this.STAGES.NO_DRIVER);
}

EnterTrackingStage() {
  this.setStage(this.STAGES.TRACKING);
}

EnterDrivingToDestinationStage() {
  this.setStage(this.STAGES.DRIVING);
}

private setStage(stage: string) {
  // Reset all stages first
  this.bookingStage = false;
  this.confirmStage = false;
  this.trackingStage = false;
  this.searchingStage = false;
  this.drivingToDestinationStage = false;
  this.noDriverStage = false;
  this.mapPinStage = false;

  // Set the appropriate stage without calling Enter methods
  switch (stage) {
    case this.STAGES.BOOKING:
      this.bookingStage = true;
      break;
    case this.STAGES.CONFIRM:
      this.confirmStage = true;
      break;
    case this.STAGES.TRACKING:
      this.trackingStage = true;
      break;
    case this.STAGES.SEARCHING:
      this.searchingStage = true;
      break;
    case this.STAGES.DRIVING:
      this.drivingToDestinationStage = true;
      break;
    case this.STAGES.NO_DRIVER:
      this.noDriverStage = true;
      break;
    case this.STAGES.MAP_PIN:
      this.mapPinStage = true;
      break;
  }
}

private getCurrentStage(): string {
  if (this.bookingStage) return this.STAGES.BOOKING;
  if (this.confirmStage) return this.STAGES.CONFIRM;
  if (this.trackingStage) return this.STAGES.TRACKING;
  if (this.searchingStage) return this.STAGES.SEARCHING;
  if (this.drivingToDestinationStage) return this.STAGES.DRIVING;
  if (this.noDriverStage) return this.STAGES.NO_DRIVER;
  if (this.mapPinStage) return this.STAGES.MAP_PIN;
  return this.STAGES.BOOKING; // default
}

ngOnInit() {
  // ... existing code ...
  
  // Check for "book again" navigation state
  const navigation = this.router.getCurrentNavigation();
  if (navigation?.extras.state) {
    const state = navigation.extras.state;
    console.log('Navigation state received:', state);
    
    if (state['bookAgain']) {
      // Wait for the map to be ready
      this.mapLoadedSubscription = this.mapLoadedSubject.subscribe(loaded => {
        if (loaded) {
          setTimeout(() => {
            console.log('Processing book again data:', state);
            this.processBookAgainData(state);
          }, 1000); // Small delay to ensure map is fully ready
        }
      });
    }
  }
  
  // ... existing code ...
}

async processBookAgainData(state) {
  try {
    console.log('Setting up rebooking with data:', state);
    
    // Set pickup location
    if (state.pickup && state.pickup.address) {
      this.locationAddress = state.pickup.address;
      
      if (state.pickup.lat && state.pickup.lng) {
        this.LatLng = {
          lat: state.pickup.lat,
          lng: state.pickup.lng
        };
        
        // Add location marker
        await this.addLocationMarker(this.LatLng);
      } else {
        // If no coordinates, geocode the address
        const coords = await this.geocodeService.geocodeAddress(state.pickup.address);
        if (coords) {
          this.LatLng = coords;
          await this.addLocationMarker(coords);
        }
      }
    }
    
    // Set destination
    if (state.destination && state.destination.address) {
      this.destinationAddress = state.destination.address;
      
      if (state.destination.lat && state.destination.lng) {
        this.D_LatLng = {
          lat: state.destination.lat,
          lng: state.destination.lng
        };
        
        // Add destination marker
        await this.addDestinationMarker(this.D_LatLng);
      } else {
        // If no coordinates, geocode the address
        const coords = await this.geocodeService.geocodeAddress(state.destination.address);
        if (coords) {
          this.D_LatLng = coords;
          await this.addDestinationMarker(coords);
        }
      }
    }
    
    // If both locations are set, calculate route
    if (this.LatLng && this.D_LatLng) {
      await this.drawRoute();
      await this.calculatePrice();
      this.EnterConfirmStage();
    }
    
  } catch (error) {
    console.error('Error processing book again data:', error);
    // Show error toast
    const toast = await this.toastCtrl.create({
      message: 'Could not load previous ride data. Please try again.',
      duration: 3000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }
}

}