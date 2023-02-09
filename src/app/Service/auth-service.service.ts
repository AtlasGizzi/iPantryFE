import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { UiService } from '../ui/ui.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Account } from '../data/account';
import { Route } from '../ui/route';
import { ErrorAlertService } from './error-alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private _isAuthenticated = false;
  public currentAccount: Account | null = null;
  public $currentAccount: BehaviorSubject<Account | null> = new BehaviorSubject<Account | null>(null);
  public pathurl: string = "https://localhost:7287/api/"
  private Route = Route;

  constructor( private errorAlert: ErrorAlertService, private http: HttpClient, private ui: UiService) {
     //this.getPersistLogin();
    
  }

  public get UserInfo(): Account | null {
    return this.$currentAccount.value;
  }
  
  
  public SubmitLogin(email: string, password: string) {

    return this.http.get<Account>(this.pathurl + `Account/${email}/${password}`);
  }
  
  // public isAuthenticated(){
  //   return this._isAuthenticated;
  // }
  // public setAuthenticated(value:boolean){
  //   if this.
  //   }

  public setPersistLogin(): void {
    localStorage.setItem('user_data', JSON.stringify(this.currentAccount));
    localStorage.setItem(
      'current_route',
      JSON.stringify(this.ui.getCurrentRoute())
    );
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
  
  // public getFirstName(): string | undefined {
   
  //     return this.currentAccount?.firstName;
  
  // }
  
  public logout() {
    this.$currentAccount.next(null)
    localStorage.removeItem('user_data')
    };
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