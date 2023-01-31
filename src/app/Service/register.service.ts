import { Injectable } from '@angular/core';
import { UiService } from '../ui/ui.service';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, take } from 'rxjs';
import { AccountService } from './account.service';
import { Account } from '../data/account';
import { ErrorAlertService } from './error-alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private newAccount : Account[] = [] // new account is a type of Account from the data/account class with an array of properties. It is initalized with empty values.
  public isLoggedIn = false
  private pathurl = 'https://localhost:7287/api/'

  constructor            
  (
    private http: HttpClient,
    private account: AccountService,
    private errorAlert: ErrorAlertService
  ) {}
  
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