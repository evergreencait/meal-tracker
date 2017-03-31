import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
  <meal-list></meal-list>
  <hr>
  <div *ngIf="selectedMeal">
     <h3>{{selectedMeal.name}}</h3>
    <h3>Edit Meal</h3>
    <label>Enter meal name:</label>
    <input [(ngModel)]="selectedMeal.name">
     <br>
     <label>Enter meal details:</label>
     <input [(ngModel)]="selectedMeal.details">
     <br>
     <label>Enter meal calories:</label>
     <input [(ngModel)]="selectedMeal.calories">
     <button (click)="finishedEditing()">Done</button>
    </div>
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

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
   this.selectedMeal = null;
 }
}
