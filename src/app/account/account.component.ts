import { ErrorAlertService } from '../Service/error-alert.service';
import { Component, OnInit } from '@angular/core';
import {  take } from 'rxjs';
import { Account } from '../data/account';
import { AccountService } from '../Service/account.service';
import { AuthService } from '../Service/auth-service.service';
import { RegisterService } from '../Service/register.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // public accountData: Account | null = null
  // public route = Route

  account: Account = {} as Account
  firstName: string = "aaa"
  lastName: string = ""
  email: string = ""
  password: string = ""
  pantry: string = ""
  
  constructor(public registerService: RegisterService, public auth: AuthService, public accountService: AccountService, public errorAlert: ErrorAlertService) {
    
  }
  
  ngOnInit(){
    console.log("on init")
    console.log(this.auth.$currentAccount.value)
    if (this.auth.$currentAccount.value){
      this.account = this.auth.$currentAccount.value;
      this.firstName = this.account.firstName
      this.lastName = this.account.lastName
      this.email = this.account.email
      this.password = this.account.password
      this.pantry = this.account.pantry
    }
  }
  updateAccount(){
    this.accountService.editAccount({ //send an object that looks exactly like the Account object
      id: this.account.id,
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      password : this.password,
      pantry: this.pantry
    })
    .pipe(take(1))
    .subscribe({
      next:() => {
        console.log("updated!")
        this.errorAlert.showError("Changes saved!")
      },
      error: err => {
        console.error('there was an error ',err)
        this.errorAlert.showError("There was an error")
      }
    })
  }
  
  public ngOnDestroy(): void {
    //this.$userData.unsubscribe();
  }
  
  //let account = authService.getaccountInfo();
  //this.accountData.get('firstName')?.setValue(account?.firstName)
  
  
  // ngOnInit() {
  //   this.auth.getPersistLogin();
    
  // }
  
  logout() {
    this.auth.logout();
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
    
      // private $userData: Subscription = new Subscription();
      // public firstName: string =""
      // public lastName: string =""
      // public email: string =""
      // public password: string =""
      // constructor(private auth: AuthService, private accountService: AccountService) {
      //   };
    
      // public updateUser(): void {
      //   this.userService.updateUser(this.userData.value);
      // }