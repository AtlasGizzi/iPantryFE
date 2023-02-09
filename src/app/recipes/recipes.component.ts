import { Component } from '@angular/core';
import { RecipeIngredient } from '../data/recipe-ingredients';
import { Recipes } from '../data/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  constructor(){}

  recipes: Recipes[] = [
    { name: 'Recipe 1', ingredients: [] },
    { name: 'Recipe 2', ingredients: [] },
    // ...
  ];
  
  newRecipeName = '';
  
  newRecipeIngredients: RecipeIngredient[] = [];
  
  recipeIngredient: RecipeIngredient = {
    name: '',
    weight: 0
  };
  
  addIngredient(recipeIngredient: RecipeIngredient)
  {
    this.newRecipeIngredients.push(recipeIngredient)
  }

  addRecipe(name: string, ingredients: RecipeIngredient[]) {
    const maxId = this.recipes.reduce((max, recipe) => {
      return recipe.id && recipe.id > max ? recipe.id : max;
    }, 0);
    
    const newId = maxId + 1;
    this.recipes.push(new Recipes(newId, name, ingredients));
  }
}

