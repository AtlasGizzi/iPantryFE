import { Component } from '@angular/core';
import { UiService } from './ui/ui.service';
import { Route } from './ui/route';
import { AuthService } from './Service/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ 
  title = 'iPantryFE';
  public route = Route; 
  
  constructor(public ui: UiService, public auth: AuthService) 
  { this.ui.setCurrentRoute(this.route.HOME)
    console.log(this.ui.getCurrentRoute())
  }
 
}

  
