import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Account } from '../data/account';
import { UiService } from '../ui/ui.service';
import { Route } from '../ui/route';


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
    private http: HttpClient, public ui: UiService

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
  logout()
  {localStorage.clear()
    this.ui.navigate(Route.HOME)
  }

}
