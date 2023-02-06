import { Injectable } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { AuthService } from './auth-service.service';
import { PantryItem } from '../data/pantryItem';
import { HttpClient } from '@angular/common/http';
import { Pantry } from '../data/pantry';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  pantryItem: PantryItem[] = []
  pantry: Pantry[] = []
  private $pantry: Subject<Pantry[]> = new Subject();
  
  constructor(private http: HttpClient) { }
  getPantry(): void {
    this.http.get<Pantry>('https://localhost:7287/api/pantry')
  }
  public getAllPantryItems(): void {
    this.http.get<PantryItem[]>('https://localhost:7287/api/pantryItem')
    .pipe(take(1))
    .subscribe({
      next: (pantryItem) => {
        this.$pantry.next(pantryItem)
      }
    })
  }
  public watchPantry(): Observable<Pantry[]> {
    return this.$pantry.asObservable();
  }
}
