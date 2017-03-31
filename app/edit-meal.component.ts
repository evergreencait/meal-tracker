import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
     <h3>{{childSelectedMeal.name}}</h3>
    <h3>Edit Meal</h3>
    <label>Enter meal name:</label>
    <input [(ngModel)]="childSelectedMeal.name">
     <br>
     <label>Enter meal details:</label>
     <input [(ngModel)]="childSelectedMeal.details">
     <br>
     <label>Enter meal calories:</label>
     <input [(ngModel)]="childSelectedMeal.calories">
     <button class="btn-lrg"(click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
