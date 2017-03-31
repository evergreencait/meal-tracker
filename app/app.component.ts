import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
  <ul>
    <li *ngFor="let currentMeal of meals">{{currentMeal.name}} <button (click)="editMeal()">Edit Meal</button></li>
  </ul>
  <hr>
  <div>
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
  meals: Meal[] = [
    new Meal("Mac and cheese", "only ate half of it", 400),
    new Meal("Bagel and cream cheese", "worth it", 350),
    new Meal("Soup", "ate two bowls", 600)
  ];

  selectedMeal: Meal = this.meals[0];

  editMeal() {
    alert("You just requested to edit a meal");
  }
}

export class Meal {
  constructor(public name: string, public details: string, public calories: number) { }
}
