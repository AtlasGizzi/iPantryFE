import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AccountService } from './account/account.service';
import { Account } from './data/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'iPantryFE';
  accounts: Account[] = [];
  constructor(private accountService: AccountService) 
  {
    
  }
  ngOnInit(): void { 
        this.accountService.getAllAccounts().subscribe((result: Account[]) => (this.accounts = result));
      }
  }

  
