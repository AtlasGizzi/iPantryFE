import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private _account: any;
  get account() {
  return this._account;
  }
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this._account = this.authService.account;
  }

  logout() {
    this.authService.logout();
    this._account = null;
  }
}
