import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'iPantryFE';
  accounts: any;
  constructor(private httpClient: HttpClient) 
  {
    let request = httpClient.get("https://")
  }
  ngOnInit(): void { 
      this.httpClient.get('https://localhost:7287/api').subscribe({
        next: (response) => this.accounts = response,
        error: (error) => console.log(error),
        complete: () => console.log('Request has completed') 
      })
  }
}
