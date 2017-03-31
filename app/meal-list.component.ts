import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of meals">{{currentMeal.name}} <button (click)="editMeal(currentMeal)">Edit Meal</button></li>
  </ul>
  `
})

export class MealListComponent {
  meals: Meal[] = [
    new Meal("Mac and cheese", "only ate half of it", 400),
    new Meal("Bagel and cream cheese", "worth it", 350),
    new Meal("Soup", "ate two bowls", 600)
  ];
}
