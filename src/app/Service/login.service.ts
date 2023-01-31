import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Account } from '../data/account';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _account: any;
  private _isAuthenticated: boolean = false;
  get account() {
    return this._account;
  }

  constructor(
    private http: HttpClient,

  ) { }
  
  login(account: Account) {
    // Send a login request to the server
    return this.http.post('/api/login', account).pipe(
      tap(res => {
        // Store the user's information and authentication state
        this._account = res;
        this._isAuthenticated = true;
      })
    );
  }

}
