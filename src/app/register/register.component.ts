import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../data/account';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  newAccount: Account = new Account(0,'','','','','')

  //account: any = {}
  constructor(private registerService: RegisterService) {}
  ngOnInit(): void {
  }
  registerAccount() {
    //console.log(this.account)
    this.registerService.SubmitRegister(this.newAccount)
  }
 
}
