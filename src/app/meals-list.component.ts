import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from "src/types/Meal";

@Component({
  selector: "meals",
  templateUrl: "./meals-list.component.html",
})
export class MealsComponent {
  mealsList: Meal[] = [
    {
      mealId: 1,
      mealName: "Fish Salad",
      mealImage: "/assets/fish-salad.jpeg",
      mealPrice: 1,
    },
    {
      mealId: 2,
      mealName: "Fish Salad",
      mealImage: "/assets/fish-salad.jpeg",
      mealPrice: 1,
    },
    {
      mealId: 3,
      mealName: "Fish Salad",
      mealImage: "/assets/fish-salad.jpeg",
      mealPrice: 1,
    },
    {
      mealId: 4,
      mealName: "Fish Salad",
      mealImage: "/assets/fish-salad.jpeg",
      mealPrice: 1,
    },
  ];

  @Output() mealOrdered = new EventEmitter();

  addMealToCart(meal: any) {
    this.mealOrdered.emit(meal);
  }
}
