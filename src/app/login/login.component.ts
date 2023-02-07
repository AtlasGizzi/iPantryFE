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
  password: string ="";
  email: string= "";
  private _account: any;
  get account() {
    return this._account;
  }
  
  constructor(private loginService: LoginService) {
    
  }
  
 login()
 {
  this.loginService.login(this.password, this.email)
 }
  ngOnInit() {
    this._account = this.loginService.account;
   
  }
  //I know this isn't right.
}



