import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../data/account';
import { AuthService } from '../Service/auth-service.service';
import { RegisterService } from '../Service/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @Input() accountFromHomeComponent: any;
  //authService.login(account);

  account: Account = {} as Account
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""
  pantry: string = ""
  constructor(public registerService: RegisterService, public auth: AuthService) {
    //watchAccount method
  }
  
  ngOnit(){
    if (this.auth.$currentAccount.value){
      this.account = this.auth.$currentAccount.value;
      this.firstName = this.account.firstName
      this.lastName = this.account.lastName
      this.email = this.account.email
      this.password = this.account.password
      this.pantry = this.account.pantry
    }
    
  }

  registerAccount( ): void {
    
    this.registerService.SubmitRegister(this.firstName, this.lastName, this.email, this.password, this.pantry)
  
      console.log(this.firstName)
  
  }
 
}
