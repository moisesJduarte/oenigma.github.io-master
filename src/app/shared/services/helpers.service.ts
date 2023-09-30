import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  constructor() { }
  setLocalStorage(key: string, value: any) {
    if(typeof value === 'number') {
      localStorage.setItem(key, `${value}`)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getLocalStorage(key: string, defaultValue: any) {
    if (typeof defaultValue === 'string') {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key) || '')
        : defaultValue;
    }
    if (typeof defaultValue === 'number') {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key) || '0')
        : defaultValue;
    }
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
  }
  removeLocalStorage(key: string) {
    localStorage.removeItem(key)
  }
}
