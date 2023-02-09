import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, first, Subject } from 'rxjs';
import { Account } from '../data/account';
import { AuthService } from '../Service/auth-service.service';
import { LoginService } from '../Service/login.service';
import { UiService } from '../ui/ui.service';
import { ErrorAlertService } from '../Service/error-alert.service';
import { Route } from '../ui/route';
import { transformMenu } from '@angular/material/menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  password: string ="";
  email: string="";
  // private _isAuthenticated = false;
  // public currentAccount: Account | null = null;
  // public $currentAccount: BehaviorSubject<Account | null> = new BehaviorSubject<Account | null>;
  private _account: any;
  get account() {
    return this._account;
  }
  
  constructor(private errorAlert: ErrorAlertService, private ui: UiService, private loginService: LoginService,private auth: AuthService) {
    
  }
  
  public login() { 

    if (this.email == '' || this.email == null ) { 
      this.errorAlert.showError('Enter Email')
      return;
    }
    if (this.password == '' || this.password == null) {
      this.errorAlert.showError('Enter Password')
      return;
    }
   
    this.auth.SubmitLogin(this.email, this.password)
    .pipe(first()) //get the first one then close
    .subscribe({
      next: response => {
        console.log(response)
        console.log(response.email)
        this.auth.$currentAccount.next(response)
        this.ui.navigate(Route.RECIPES)
        //this.auth.setAuthenticated(true)
        //this.auth.setPersistLogin();
        //login was successful
        //do any page redirects hide show things etc...
      }, 
      error: (err: any) => {
        //there was an error 400s or 500s level error
        console.error(err); //or console.log(err);
      }
  
    });
  }

  }
  
  // ngOnInit() {
  //   this._account = this.authService.currentAccount;
    
  // }
  //I know this isn't right.





// export class AccountComponent implements OnInit {
//   private _account: any;
//   get account() {
//   return this._account;
//   }
//   constructor(private authService: AuthService) {}

//   ngOnInit() {
//     this._account = this.authService.account;
//   }

//   logout() {
//     this.authService.logout();
//     this._account = null;
//   }