import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
  <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
  <hr>
  <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Track your meals and calories!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedMeal = null;

  masterMealList: Meal[] = [
    new Meal("Mac and cheese", "only ate half of it", 400),
    new Meal("Bagel and cream cheese", "worth it", 350),
    new Meal("Soup", "ate two bowls", 600)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
   this.selectedMeal = null;
 }
}
