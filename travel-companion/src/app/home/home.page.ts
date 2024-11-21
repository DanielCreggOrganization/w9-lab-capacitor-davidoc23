import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';
import { NetworkInfoService } from '../services/network-info.service';

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
    IonModal
  ],
})
export class HomePage {
  location: { latitude: number; longitude: number } | null = null;
  deviceInfo: any = null;
  networkInfo: any = null;

  isLocationModalOpen = false;
  isDeviceInfoModalOpen = false;
  isNetworkInfoModalOpen = false;

  constructor(
    private locationService: LocationService,
    private deviceInfoService: DeviceInfoService,
    private networkInfoService: NetworkInfoService
  ) {}

  async fetchLocation() {
    this.location = await this.locationService.getCurrentPosition();
    this.isLocationModalOpen = true; // Open the location modal
    console.log('Current Location:', this.location);
  }

  async fetchDeviceInfo() {
    this.deviceInfo = await this.deviceInfoService.getDeviceInfo();
    this.isDeviceInfoModalOpen = true; // Open the device info modal
    console.log('Device Info:', this.deviceInfo);
  }

  async fetchNetworkInfo() {
    this.networkInfo = await this.networkInfoService.getNetworkInfo();
    this.isNetworkInfoModalOpen = true; // Open the network info modal
    console.log('Network Info:', this.networkInfo);
  }
}
