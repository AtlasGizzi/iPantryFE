import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth-service.service';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  public _isAuthenticated: boolean;
  account: any;

  constructor(public authService: AuthService) {
    this._isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnInit() {
    if (!this._isAuthenticated) {
      // Redirect the user to the login page or show a message
    }
  }
}

