import { Component, OnInit } from '@angular/core';
import { RecipeIngredient } from '../data/recipe-ingredients';
import { Recipes } from '../data/recipes';
import { RecipeService } from '../Service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipes[] = []

  constructor(public recServe: RecipeService){}

  // recipes: Recipes[] = [
  //   { name="", ingredients: [] },
  //   { name, ingredients: [] },
  //   // ...
  // ];
  ngOnInit (){
    this.recServe.GetAllRecipes().subscribe(recipes => {this.recipes = recipes;})
  }
  newRecipeName = '';
  newRecipeInstructions = "";
  
  newRecipeIngredients: RecipeIngredient[] = [];
  
  recipeIngredient: RecipeIngredient = {
    name: '',
    weight: 0
  };
  
  addIngredient(recipeIngredient: RecipeIngredient)
  {
    this.newRecipeIngredients.push(recipeIngredient)
  }

  addRecipe(name: string, ingredients: RecipeIngredient[], instructions: string) {
    const maxId = this.recipes.reduce((max, recipe) => {
      return recipe.id && recipe.id > max ? recipe.id : max;
    }, 0);
    
    const newId = maxId + 1;
    this.recipes.push(new Recipes(newId, name, ingredients, instructions));
  }
}

