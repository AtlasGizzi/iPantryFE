import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;
  private _account: any;
  

  constructor(private http: HttpClient) {}

  get account() {
    return this._account;
  }

  login(account: any) {
    // Send a login request to the server
    return this.http.post('/api/login', account).pipe(
      tap(res => {
        // Store the user's information and authentication state
        this._account = res;
        this._isAuthenticated = true;
      })
    );
  }

  logout() {
    // Send a logout request to the server
    return this.http.post('/api/logout', {}).pipe(
      tap(() => {
        // Clear the user's information and authentication state
        this._account = null;
        this._isAuthenticated = false;
      })
    );
  }

  get user() {
    return this._account;
  }

  isAuthenticated() {
    return this._isAuthenticated
  }
}
