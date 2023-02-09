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
  public SubmitRegister(firstName: string, lastName: string, email: string, password: string, pantry: string): void {
    let newAccount: Account = {
      firstName : firstName,
      lastName: lastName,
      email : email,
      password : password,
      pantry: pantry
    }  
    if (this.ValidateRegister(email, password)){
      this.http.post<Account>('https://localhost:7287/api/Account', newAccount)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.errorAlert.showError("Account registered! You may now log in.")
        }
      }) 
    }
     //else{
    //     this.errorAlert.showError("Email not valid. Not registered.")
      
    //   }
    }
    
    public validateEmail(email: string): boolean{      
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email); 
    } 
  
    public ValidateRegister(email: string, password: string){
      if (email == '' || email == null) {
        this.errorAlert.showError('Email Required')
        return false;
      }
      if (password == '' || password == null) {
        this.errorAlert.showError('Password Required')
        return false;
      }
      
      if (this.validateEmail(email) === false){
        return this.errorAlert.showError('Email does not meet requirements Ex: Example@example.com')
        
      }
      else return true
  }
}