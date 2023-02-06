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
import { RegisterComponent } from './register/register.component';


import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';

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
    HomeComponent,
    RegisterComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
