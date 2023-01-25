import { Injectable } from '@angular/core';
import { ErrorAlertService } from '../error-alert.service';

import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, take } from 'rxjs';
import { AccountService } from '../account/account.service';
import { Account } from '../data/account';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  $showLogin = new BehaviorSubject<boolean>(false)
  $showRegister = new BehaviorSubject<boolean>(false)
  public isLoggedIn = false
  // private accountId = 0
  // private userRole: string = ''
  // private userEmail: string = ''
  private pathurl = 'https://localhost:7287/api/'

  constructor
  (
    private http: HttpClient,
   
   
    private accountService: AccountService,
  ) {}
  

//   public validateEmail(checkEmail: string){      
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailPattern.test(checkEmail); 
//   } 

//   public ValidateRegister(email: string, password: string, snackbar: MatSnackBar): void {
//     if (email == '' || email == null) {
//       this.erroralert.showError('Email Required')
//       return
//     }
//     if (password == '' || password == null) {
//       this.erroralert.showError('Password Required')
//       return
//     }
    
//     if (this.validateEmail(email) === false){
//       this.erroralert.showError('Email does not meet requirements Ex: Example@example.com')
//       return
//     }

//     this.SubmitRegister(email, password)
// };
public SubmitRegister(newAccount: Account) {
  this.http.post(this.pathurl + `Account`,
    {
      ...newAccount
      }
  )
    .pipe(take(1))
    .subscribe({
      next: () => {

        
        this.$showLogin.next(true)
        this.$showRegister.next(false)

      },
      // error: (err) => {
      //   if (err.status === 409) {
      //     this.erroralert.showError('Email already exists.')
      //   }
      // }
    })
}}