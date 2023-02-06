import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../data/account';
import { AccountService } from '../Service/account.service';
import { AuthService } from '../Service/auth-service.service';
import { Route } from '../ui/route';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // public accountData: Account | null = null
  // public route = Route
  
  
  constructor(public authService: AuthService, public accountService: AccountService, public http: HttpClient) 
  {

    //let account = authService.getaccountInfo();
    //this.accountData.get('firstName')?.setValue(account?.firstName)
  }
  public firstName = this.authService.getFirstName
  
  ngOnInit() {
    this.authService.getPersistLogin();
    
  }
  
  logout() {
    this.authService.logout();
    //this.accountData = null;
  }
}

// get account() {
//   return this.accountData;
//   }
// public getFirstName(firstName:string): Observable<Account>
// {
//   return this.http.get<Account>(`https://localhost:7287/api/Account/${firstName}`)
// }