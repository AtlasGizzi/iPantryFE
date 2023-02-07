import { Component, OnInit } from '@angular/core';
import { Account } from '../data/account';
import { AuthService } from '../Service/auth-service.service';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public password: string="";
  public email: string= "";
  private _account: any;
  get account() {
    return this._account;
  }
  
  constructor(private loginService: LoginService,private authService: AuthService) {
    
  }
  
  public login(password:string, email:string) { 
    this.authService.ValidateLogin(password, email)
    .then(() => {
      console.log("logged in");
    });
  }
  
  ngOnInit() {
    this._account = this.authService.currentAccount;
    
  }
  //I know this isn't right.
}




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