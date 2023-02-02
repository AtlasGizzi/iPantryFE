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
    private Account: Account,
    private auth: AuthService,
    private ui: UiService, 
    private errorAlert: ErrorAlertService
  ) { }
  
  public getAllAccounts() : Observable<Account[]>
  {
    return this.http.get<Account[]>("https://localhost:7287/api/Account");
  }

  public getAccount(accountEmail: string | undefined)
  { 
    this.http.get<Account>(`https://localhost:7287/api/Account/${accountEmail}`)
    .pipe(take(1))
    .subscribe({
      next: (res) => {
        this.Account = res;
      },
      error: () => console.log('error'),
    });
  }
  public SubmitRegister(newAccount: Account) {
    this.http.post(this.pathurl + `Account`,
      {
        ...newAccount //spread opperator is used to spread the properties of the "newAccount" object into a new object that is passed as the request body in the HTTP POST request.
        }
    )                                             
      .pipe(take(1))
      .subscribe({
        next: () => {
  
            return
        },
        error: (err) => {
          if (err.status === 409) {
            this.errorAlert.showError('Email already exists.')
          }
        }
      })
    }
  

  public validateEmail(checkEmail: string){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(checkEmail); 
  } 

  public ValidateRegister(email: string, password: string, snackbar: MatSnackBar): void {
    if (email == '' || email == null) {
      this.errorAlert.showError('Email Required')
      return
    }
    if (password == '' || password == null) {
      this.errorAlert.showError('Password Required')
      return
    }
    
    if (this.validateEmail(email) === false){
      this.errorAlert.showError('Email does not meet requirements Ex: Example@example.com')
      return
    }
    
    
  };
  


}
