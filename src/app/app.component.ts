import { Component, OnInit } from '@angular/core';
import { UiService } from './ui/ui.service';

import { Route } from './ui/route'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  title = 'iPantryFE';
  
  
  constructor(private UiService: UiService, private Route: Route) 
  {
   
  }
  // ngOnInit(): void { 
  //   this.accountService.getAllAccounts().subscribe((result: Account[]) => (this.accounts = result));
  // }
  }

  
