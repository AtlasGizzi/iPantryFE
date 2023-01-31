import { Injectable } from '@angular/core';
import { Route } from './route';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { 
    this.persistRoute();
  }
  public isSideNavOpen: boolean = false;
  private currentRoute: Route = Route.HOME;
  
  public getCurrentRoute(): Route {
    return this.currentRoute;
  }
  public persistRoute(): void {
    let storedRoute = localStorage.getItem('current_route');
    if (storedRoute) this.setCurrentRoute(JSON.parse(storedRoute));
  }
  public setCurrentRoute(route: Route): void {
    this.currentRoute = route;
  }
  public navigate(route: Route) {
    this.currentRoute = route;
    if (this.isSideNavOpen) this.toggleSideNav();
    localStorage.setItem('current_route', JSON.stringify(route));
  }
  public toggleSideNav(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
