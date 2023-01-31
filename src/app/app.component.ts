import { Component, OnInit } from '@angular/core';
import { UiService } from './ui/ui.service';
import { Route } from './ui/route';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  title = 'iPantryFE';
  public route = Route; //I'm note sure why this works. Is it just saying that route value is the value of Route from Route? Is this an enum thing?
  
  constructor(public ui: UiService) 
  {
   
  }
  // ngOnInit(): void { 
  //   this.accountService.getAllAccounts().subscribe((result: Account[]) => (this.accounts = result));
  // }
  }

  
