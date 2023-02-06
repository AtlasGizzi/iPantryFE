import { Component } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Route } from '../ui/route';
import { UiService } from '../ui/ui.service';
import { PantryService } from '../Service/pantry.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
public route = Route;

constructor(public ui: UiService, public pantry: PantryService
  ){
    
  }
  // public getPantry() {

  // }
}
