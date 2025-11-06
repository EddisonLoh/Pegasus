import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Firestore, doc, updateDoc, getDoc } from '@angular/fire/firestore';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-trip-summary',
  templateUrl: './trip-summary.component.html',
  styleUrls: ['./trip-summary.component.scss'],
})
export class TripSummaryComponent implements OnInit {
  @Input() tripId: string;
  @Input() driverId: string;
  @Input() rideData: any; // Accept pre-populated ride data
  
  tripData: any = {};
  rating: number = 0;
  comment: string = '';
  isSubmitting: boolean = false;
  
  // Animation states
  animateIn: boolean = false;
  
  constructor(
    private modalCtrl: ModalController,
    private firestore: Firestore,
    private avatarService: AvatarService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // If rideData is provided, use it, otherwise load from Firestore
    if (this.rideData) {
      this.tripData = this.rideData;
      // Extract tripId from rideData if not explicitly provided
      if (!this.tripId && this.rideData.tripId) {
        this.tripId = this.rideData.tripId;
      }
      // Extract driverId from rideData if not explicitly provided
      if (!this.driverId && this.rideData.driverId) {
        this.driverId = this.rideData.driverId;
      }
      // Format any additional fields as needed
      this.formatTripData();
    } else {
      this.loadTripData();
    }
    
    // Trigger animation after a short delay
    setTimeout(() => {
      this.animateIn = true;
    }, 100);
  }

  async loadTripData() {
    if (!this.tripId) {
      console.error('No trip ID provided');
      return;
    }

    try {
      const tripDoc = await getDoc(doc(this.firestore, 'Request', this.tripId));
      
      if (tripDoc.exists()) {
        this.tripData = tripDoc.data();
        
        // Format distance from meters to kilometers
        if (this.tripData.distance) {
          this.tripData.distanceInKm = (this.tripData.distance / 1000).toFixed(1);
        }
        
        // Format duration if needed
        if (this.tripData.duration && typeof this.tripData.duration === 'number') {
          this.tripData.durationFormatted = this.formatDuration(this.tripData.duration);
        } else {
          this.tripData.durationFormatted = this.tripData.duration;
        }
        
        // Format price if needed
        if (this.tripData.price) {
          this.tripData.formattedPrice = this.formatPrice(this.tripData.price);
        }
      } else {
        console.error('Trip not found');
      }
    } catch (error) {
      console.error('Error loading trip data:', error);
    }
  }

  formatTripData() {
    // Format distance from meters to kilometers
    if (this.tripData.distance) {
      this.tripData.distanceInKm = (this.tripData.distance / 1000).toFixed(1);
    }
    
    // Format duration if needed
    if (this.tripData.duration && typeof this.tripData.duration === 'number') {
      this.tripData.durationFormatted = this.formatDuration(this.tripData.duration);
    } else {
      this.tripData.durationFormatted = this.tripData.duration;
    }
    
    // Format price if needed
    if (this.tripData.price) {
      this.tripData.formattedPrice = this.formatPrice(this.tripData.price);
    }
  }

  formatDuration(durationInSeconds: number): string {
    const minutes = Math.floor(durationInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      const remainingMinutes = minutes % 60;
      return `${hours}h ${remainingMinutes}m`;
    } else {
      return `${minutes} min`;
    }
  }

  formatPrice(price: number): string {
    return price.toFixed(2);
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  async submitRating() {
    if (this.rating === 0) {
      const toast = await this.toastController.create({
        message: 'Please select a rating before submitting',
        duration: 2000,
        position: 'bottom',
        color: 'warning'
      });
      await toast.present();
      return;
    }

    this.isSubmitting = true;

    try {
      // Check if tripId exists before attempting to update
      if (!this.tripId) {
        console.error('No trip ID available for rating submission');
        throw new Error('Missing trip ID');
      }

      // Update the trip record with the rating
      await updateDoc(doc(this.firestore, 'Request', this.tripId), {
        rating: this.rating,
        ratingComment: this.comment,
        ratedAt: new Date().toISOString()
      });

      // If there's a driver ID, update their average rating
      if (this.driverId) {
        await this.updateDriverRating(this.driverId, this.rating);
      }

      const toast = await this.toastController.create({
        message: 'Thank you for your feedback!',
        duration: 2000,
        position: 'bottom',
        color: 'success'
      });
      await toast.present();
      
      // Close the modal after a short delay
      setTimeout(() => {
        this.dismiss();
      }, 1000);
    } catch (error) {
      console.error('Error submitting rating:', error);
      const toast = await this.toastController.create({
        message: 'Failed to submit rating. Please try again.',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      });
      await toast.present();
    } finally {
      this.isSubmitting = false;
    }
  }

  async updateDriverRating(driverId: string, newRating: number) {
    const driverRef = doc(this.firestore, 'Drivers', driverId);
    const driverDoc = await getDoc(driverRef);
    
    if (driverDoc.exists()) {
      const driverData = driverDoc.data();
      const currentRating = driverData.rating || 0;
      const ratingCount = driverData.ratingCount || 0;
      
      // Calculate new average rating
      const newAvgRating = ((currentRating * ratingCount) + newRating) / (ratingCount + 1);
      
      await updateDoc(driverRef, {
        rating: newAvgRating,
        ratingCount: ratingCount + 1
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      rated: this.rating > 0,
      rating: this.rating
    });
  }
}
