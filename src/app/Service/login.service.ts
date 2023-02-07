import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Subscription, take } from 'rxjs';
import { Account } from '../data/account';
import { UiService } from '../ui/ui.service';
import { Route } from '../ui/route';
import { AuthService } from './auth-service.service';
import { ErrorAlertService } from './error-alert.service';


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
    public err : ErrorAlertService, 
    private http: HttpClient, 
    public ui: UiService, 
    public auth: AuthService
  ) {  }

    login(password: string, email: string) {
      this.auth.login(password, email)
      if (this.auth.isAuthenticated()) {
          this.ui.navigate(Route.RECIPES);
        } else {
          this.err.showError("Login not Authenticated. Check email and password.")
        }
      };
    
 
  logout()
  {localStorage.clear()
    this.ui.navigate(Route.HOME)
  }
  // login(account: Account) {
  //   // Send a login request to the server
  //   return this.http.post('/api/login', account).pipe(
  //     tap(res => {
  //       // Store the user's information and authentication state
  //       this._account = res;
  //       this._isAuthenticated = true;
  //     })
  //   );
  // }

}
