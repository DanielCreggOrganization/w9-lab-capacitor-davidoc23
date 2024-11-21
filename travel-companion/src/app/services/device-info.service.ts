import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  constructor() {}

  // Fetch device information
  async getDeviceInfo() {
    try {
      const info = await Device.getInfo();
      return info;
    } catch (error) {
      console.error('Error fetching device info:', error);
      return null;
    }
  }

  // Fetch device's unique ID
  async getDeviceId() {
    try {
      const id = await Device.getId();
      return id;
    } catch (error) {
      console.error('Error fetching device ID:', error);
      return null;
    }
  }

  // Fetch battery information (optional)
  async getBatteryInfo() {
    try {
      const batteryInfo = await Device.getBatteryInfo();
      return batteryInfo;
    } catch (error) {
      console.error('Error fetching battery info:', error);
      return null;
    }
  }

  // Check if the app is running in a simulator
  async isRunningOnSimulator() {
    try {
      const info = await Device.getInfo();
      return info.isVirtual;
    } catch (error) {
      console.error('Error checking simulator status:', error);
      return false;
    }
  }
}
