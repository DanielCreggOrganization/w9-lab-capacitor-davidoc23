import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service'; // Import DeviceInfoService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  ],
})
export class HomePage {
  location: { latitude: number; longitude: number } | null = null;
  deviceInfo: any | null = null; // Store device info

  constructor(
    private locationService: LocationService,
    private deviceInfoService: DeviceInfoService // Inject DeviceInfoService
  ) {}

  // Method to fetch location
  async fetchLocation() {
    try {
      this.location = await this.locationService.getCurrentPosition();
      console.log('Current Location:', this.location);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }

  // Method to fetch device info
  async fetchDeviceInfo() {
    try {
      this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
      console.log('Device Info:', this.deviceInfo);
    } catch (error) {
      console.error('Error fetching device info:', error);
    }
  }
}
