import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
  <ul>
    <li *ngFor="let currentMeal of meals">{{currentMeal.name}}</li>
  </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Track your meals and calories!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  meals: Meal[] = [
    new Meal("Mac and cheese", "only ate half of it", 400),
    new Meal("Bagel and cream cheese", "worth it", 350),
    new Meal("Soup", "ate two bowls", 600)
  ];
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) { }
}
