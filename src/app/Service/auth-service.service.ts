import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { UiService } from '../ui/ui.service';
import { Subject } from 'rxjs';
import { Account } from '../data/account';
import { Route } from '../ui/route';
import { ErrorAlertService } from './error-alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;
  public currentAccount: Account | null = null;
  public $currentAccount: Subject<Account | null> = new Subject();
  public pathurl: string = "https://localhost:7287/api/"

  constructor( private errorAlert: ErrorAlertService, private http: HttpClient, private ui: UiService) {
    this.getPersistLogin();
    
  }
  
  public ValidateLogin(email: string, password: string){ // this entire method either isn't being called or isn't working. Can "log in" with incorrect cred.
    if (email == '' || email == null) {
      this.errorAlert.showError('Enter Email')
      return Promise.reject();
    }
    if (password == '' || password == null) {
      this.errorAlert.showError('Enter Password')
      return Promise.reject();
    }
    return this.SubmitLogin(email, password);
  }
  
  private SubmitLogin(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => { //idk about this Promise reject resolve thing, ai suggested it
      this.http.get<Account>(this.pathurl + `Account/${email}/${password}`)
      .pipe(take(1))
      .subscribe({
        next: data => {
          this.currentAccount = data, //the problem is that the currentAccount basically does nothing. I want it to return the email and password in the console log
          this.isAuthenticated(), 
          console.log(data)
          resolve(data);
        },
        error: err => {
          this.errorAlert.showError("Email or Password Incorrect !")
          reject(err);
        }
      });
    });
  }
  
  public isAuthenticated(){
    return this._isAuthenticated = true;
  }
  
  public getPersistLogin() {
    let userData = localStorage.getItem('user_data');
    let currentRoute = localStorage.getItem('current_route');
    
    if (userData && currentRoute) {
      this.currentAccount = JSON.parse(userData);
      this.$currentAccount.next(this.currentAccount);
      this.ui.setCurrentRoute(JSON.parse(currentRoute));
    }
  }
  
  public getFirstName(): string | undefined {
    if (this._isAuthenticated == true) {
      return this.currentAccount?.firstName;
    }
    return undefined;
  }
  public logout() {
    // Send a logout request to the server
    return this.http.post('https://localhost:7287/api/logout',{}).pipe(
      take(1)) 
      .subscribe({
        next: () => {
          // Clear the user's information and authentication state
          this.currentAccount = null;
          this._isAuthenticated = false;
        }
      });
    }
  }
  // get user() {
    //   return this.currentAccount;
    // }
    
    // getaccountInfo() {
      //   return this.currentAccount;
      // }
      
      // login(account: Account | undefined) {
        //   // Send a login request to the server
        //   return this.http.post('/api/login', account).pipe(
          //     tap(res => {
            //       // Store the user's information and authentication state
            //       this.currentAccount = res;
            //       this._isAuthenticated = true;
            //     })
            //   );
            // }
            
            // private LoginSuccess(): void {
    //   this.ui.navigate(Route.RECIPES);
    // }
    // public login(password: string, email: string) {
    //   // Send a login request to the server
    //   return this.http.get<Account>(`https://localhost:7287/api/Account/${password}/${email}`)
    //   .pipe(take(1))
    //   .subscribe({
    //     next: (data) => {
    //       this.currentAccount = data,
    //       this._isAuthenticated = true; 
    //       console.log(data)}
    //     });
    //   }