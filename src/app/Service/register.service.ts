import { Injectable } from '@angular/core';
import { Account } from '../data/account';
import {HttpClient} from '@angular/common/http'
import { take } from 'rxjs';
import { ErrorAlertService } from './error-alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient, public errorAlert: ErrorAlertService) { }
  public SubmitRegister(firstName: string, lastName: string, email: string, password: string): void {
    let newAccount: Account = {
      firstName : firstName,
      lastName: lastName,
      email : email,
      password : password
      //pantry: pantry
    }  
    console.log(firstName)
    this.http.post<Account>('https://localhost:7287/api/Account', newAccount)
    .pipe(take(1))
    .subscribe({
      next: () => {
        //redirect to login
      },
      error: (err) => {
        console.error(err.message)
        console.log(newAccount)
      }})

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
  }
}