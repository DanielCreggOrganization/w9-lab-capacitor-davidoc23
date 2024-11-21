import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompatibilityCheckerService {
  constructor() {}

  detectBrowser(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Edge')) {
      return 'Microsoft Edge';
    } else if (userAgent.includes('Chrome')) {
      return 'Google Chrome';
    } else if (userAgent.includes('Firefox')) {
      return 'Mozilla Firefox';
    } else if (userAgent.includes('Safari')) {
      return 'Safari';
    } else {
      return 'Unknown Browser';
    }
  }

  checkWebAPIs(): string[] {
    const apiList = [];
    if ('geolocation' in navigator) apiList.push('Geolocation API');
    if ('serviceWorker' in navigator) apiList.push('Service Worker');
    if ('localStorage' in window) apiList.push('LocalStorage API');
    if ('fetch' in window) apiList.push('Fetch API');
    // Add more checks as needed
    return apiList;
  }
}
