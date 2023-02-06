import { Component } from '@angular/core';
import { UiService } from '../ui/ui.service';
import { Route } from '../ui/route';
import { AuthService } from '../Service/auth-service.service';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public route = Route
  constructor(public ui: UiService, private auth: AuthService, public login: LoginService){}
  //route: Route = 
//   public handleClick(route: Route) {
//     // if (route === Route.LOG_OUT) {
//     //   this.auth.logout();
//     // }
//     this.ui.navigate(route);
// }
}
