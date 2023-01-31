import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../data/account';
import { RegisterService } from '../Service/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  newAccount: Account = new Account(0,'','','','','');
  //authService.login(account);

  //account: any = {}
  constructor(private registerService: RegisterService) {
    //watchAccount method
  }
  
  registerAccount(newAccount: Account) {
    //console.log(this.account)
    this.registerService.SubmitRegister(this.newAccount)
  }
 
}
