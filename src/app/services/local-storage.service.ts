import { Injectable } from '@angular/core';
import { AuthUser } from '../models/AuthUser';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T {
    const storedValue = localStorage.getItem(key) as string;

    try {
      return JSON.parse(storedValue) as T;
    } catch (error) {
      return storedValue as T;
    }
  }

  getAuthUser() {
    let user: AuthUser = this.get('auth-user');
    return user;
  }

  clean() {
    localStorage.clear();
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  get<T>(key: string): T {
    return this.getItem<T>(key)
  }

  set(key: string, value: any): void {
    return this.setItem(key, value)
  }

  getAll(): { [key: string]: any } {
    return Object.keys(localStorage).map(key => ({
      [key]: localStorage.getItem(key)
    }));
  }
}
