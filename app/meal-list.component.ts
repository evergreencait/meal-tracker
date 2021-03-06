import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="quote">
      <p class="quotetext">"Life is a combination<p> <br><p class="quotetext2">of magic and pasta" -Federico Fellini</p>
    </div>
  <label>Filter by Calories</label>
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="under500">Under 500 Calories</option>
    <option value="over500">Over 500 Calories</option>
  </select>
  <hr>
  <ul>
    <li *ngFor="let currentMeal of childMealList | filterCalories:filterByCalories">{{currentMeal.name}} <button class="btn-lg" (click)="editButtonHasBeenClicked(currentMeal)">Edit Meal</button></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();



  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  filterByCalories: string = "allMeals";
  onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
}
}
