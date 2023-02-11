import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Account } from '../data/account';
import { RecipeIngredient } from '../data/recipe-ingredients';
import { Recipes } from '../data/recipes';
import { AuthService } from './auth-service.service';
import { ErrorAlertService } from './error-alert.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService{
  public recipe: Recipes | null = null
  private pathurl = 'https://localhost:7287/api/'
  userData: any;

  constructor(public http: HttpClient, public errorAlert: ErrorAlertService, auth: AuthService) 
  { 
    auth.getPersistLogin()
    const userData = localStorage.getItem('user_data');
    if (userData) {
      this.userData = JSON.parse(userData);
  }
}
  
  
  
  public GetAllRecipes(): Observable<Recipes[]> 
  {
    return this.http.get<Recipes[]>(this.pathurl+'recipes');
      
  }

 
  public SubmitRecipe( name: string, ingredients: RecipeIngredient[],instructions: string): void {
    const userId = this.userData.id;
    let newRecipe: Recipes = {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      userId: userId,
    }
      this.http.post<Recipes>('https://localhost:7287/api/Account', newRecipe)
    .pipe(take(1))
    .subscribe({
      next: () => {
        this.errorAlert.showError("Recipe added.")
      }
    }) 
  }
  public getRecipe(id: number)
  { 
    this.http.get<Recipes>(this.pathurl+`${id}`)
    .pipe(take(1))
    .subscribe({
      next: (result) => {
        this.recipe = result;
      },
      error: () => console.log('error'),
    });
  }
}
