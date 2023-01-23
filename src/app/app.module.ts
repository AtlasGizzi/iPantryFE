import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PantryComponent } from './pantry/pantry.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MakeThisRecipeComponent } from './make-this-recipe/make-this-recipe.component';
import { AccountComponent } from './account/account.component';
import { RedditComponent } from './reddit/reddit.component';
import { FamilyConnectComponent } from './family-connect/family-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    PantryComponent,
    RecipesComponent,
    MakeThisRecipeComponent,
    AccountComponent,
    RedditComponent,
    FamilyConnectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
