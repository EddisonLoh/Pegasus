export interface RideHistory {
  tripId: string;
  driverId: string;
  driverName: string;
  driverImage: string;
  driverCar: string;
  driverPlate: string;
  pickup: string;
  destination: string;
  initialPrice: number; // Initial estimate
  price: number;        // Final calculated price
  distance: number;
  duration: string;
  rating: number;
  completed: boolean;
  completedAt: Date;
  // Other fields...
} 