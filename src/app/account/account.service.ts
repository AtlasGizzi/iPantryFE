import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/data/account';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,

  ) { }
  public currentAccount: Account = new Account(0, '', '', '','');

  public getAccount(accountEmail: string | undefined)
  { 
    this.http.get<Account>(`https://localhost:7287/api/Account/${accountEmail}`)
    .pipe(take(1))
    .subscribe({
      next: (res) => {
        this.currentAccount = res;
      },
      error: () => console.log('error'),
    });
  }
}
