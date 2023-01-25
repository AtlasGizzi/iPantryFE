import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


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
    FamilyConnectComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
