
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: any = { email: 'user@example.com' }; // Mock user data

  constructor(private router: Router) {}

  get user() {
    return this._user;
  }

  login(email: string, password: string) {
    // Mock login function
    this._user = { email }; // Set the user object (replace with real authentication logic)
    this.router.navigate(['/']);
  }

  logout() {
    this._user = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this._user;
  }
}
