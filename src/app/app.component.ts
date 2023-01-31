import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AccountService } from './Service/account.service';
import { Account } from './data/account';
import { RegisterService } from './Service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  accounts: Account[] = [];
  title = 'iPantryFE';
  
  constructor(private accountService: AccountService) 
  {
   
  }
  ngOnInit(): void { 
        this.accountService.getAllAccounts().subscribe((result: Account[]) => (this.accounts = result));
      }
  }

  
