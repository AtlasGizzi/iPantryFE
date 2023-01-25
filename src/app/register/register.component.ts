import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../data/account';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  // @Input() account?: Account;
  account: any = {}
  constructor() {}
  ngOnInit(): void {
  }
  registerAccount() {
    console.log(this.account)
  }
  ValidateRegister(email: string, password: string, firstName: string, lastName: string, pantry: string)
  {
    console.log(this.account)
  }
}
