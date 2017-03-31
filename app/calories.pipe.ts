import { Pipe, PipeTransform } from  '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "filterCalories",
  pure: false
})

export class filterCaloriesPipe implements PipeTransform {
  transform(input: Meal[], desiredCalories){
    var output: Meal[] = [];
    if(desiredCalories === "under500") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredCalories === "over500") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
        output.push(input[i]);
      }
    }
    return output;
    } else {
      return input;
    }
  }
}
