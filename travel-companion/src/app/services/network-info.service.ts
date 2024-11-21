import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root',
})
export class NetworkInfoService {
  constructor() {}

  // Get the current network status
  async getNetworkInfo(): Promise<any> {
    const status = await Network.getStatus();
    console.log('Network Status:', status);
    return status; // Return the network status
  }

  // Listen for network change events
  startNetworkListener() {
    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed:', status);
    });
  }
}
