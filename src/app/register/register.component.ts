import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../data/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Input() account?: Account;
  constructor() {}
  ngOnInit(): void {
  }
  registerAccount(account:Account) {
    
  }
}
