// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  async getCurrentPosition(): Promise<{ latitude: number; longitude: number } | null> {
    try {
      // Request the current position
      const position = await Geolocation.getCurrentPosition();

      // Extract latitude and longitude
      const { latitude, longitude } = position.coords;

      return { latitude, longitude };
    } catch (error) {
      console.error('Error getting location:', error);
      return null;
    }
  }
}
