import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { UiService } from '../ui/ui.service';
import { Subject } from 'rxjs';
import { Account } from '../data/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;

  public currentAccount: Account | null = null;
  public $currentAccount: Subject<Account | null> = new Subject();
  

  constructor(private http: HttpClient, private ui: UiService) {
    this.getPersistLogin();
  }
  public getFirstName(): string | undefined {
    return this.currentAccount?.firstName;
  }
  
  login(pass: string, email: string) {
    // Send a login request to the server
    return this.http.get<Account>(`https://localhost:7287/api/Account/{pass}/{email}`)
    .pipe(take(1))
    .subscribe({
      next: (data) => {
        this.currentAccount = data,
        this._isAuthenticated = true; 
        console.log(data)}
      });
    }
    
    logout() {
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
      
      isAuthenticated() {
        return this._isAuthenticated
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
      }
      