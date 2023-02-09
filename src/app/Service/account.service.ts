import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/data/account';
import { Observable, take } from 'rxjs';
import { AuthService } from './auth-service.service';
import { UiService } from '../ui/ui.service';
import { ErrorAlertService } from './error-alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 public isLoggedIn = false
 private pathurl = 'https://localhost:7287/api/'
 constructor(
    private http: HttpClient,
    private auth: AuthService,
    private ui: UiService, 
    private errorAlert: ErrorAlertService
  ) { }
  private account: Account | null = null
  
  public editAccount(account: Account) 
  {
   return this.http.put(this.pathurl+'Account',
      account
      )
  }
  public getAccount(accountEmail: string | undefined)
  { 
    this.http.get<Account>(this.pathurl+`${accountEmail}`)
    .pipe(take(1))
    .subscribe({
      next: (res) => {
        this.account = res;
      },
      error: () => console.log('error'),
    });
  }
};
  // public SubmitRegister(newAccount: Account) {
    //   this.http.post(this.pathurl + `Account`,
    //     {
      //       ...newAccount //spread opperator is used to spread the properties of the "newAccount" object into a new object that is passed as the request body in the HTTP POST request.
      //       }
      //   )                                             
      //     .pipe(take(1))
      //     .subscribe({
        //       next: () => {
          //           return
  //       },
  //       error: (err) => {
    //         if (err.status === 409) {
      //           this.errorAlert.showError('Email already exists.')
      //         }
      //       }
      //     })
      //   }
      
      // public getAllAccounts() : Observable<Account[]>
      // {
      //   return this.http.get<Account[]>(this.pathurl + `Account`);
      // }
      
      
      
      
    
    
    
    
    