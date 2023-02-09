import { Component, OnInit } from '@angular/core';
import { Account } from '../data/account';
import { UiService } from '../ui/ui.service';
import { Route } from '../ui/route';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {

  account: Account = {} as Account
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""
  pantry: string = ""
  constructor(public ui: UiService) {
    
  }

  ngOnInit() {
    
      this.ui.navigate(Route.PANTRY)
    }
  
}

