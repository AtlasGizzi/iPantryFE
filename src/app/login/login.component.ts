import { Component, OnInit } from '@angular/core';
import { Account } from '../data/account';
import { AuthService } from '../Service/auth-service.service';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
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
export class LoginComponent implements OnInit{
 
  private _account: any;
  get account() {
    return this._account;
  }
  
  constructor(private LoginService: LoginService) {}
  
 
  ngOnInit() {
    this._account = this.LoginService.account;
   
  }
  //I know this isn't right.
}



