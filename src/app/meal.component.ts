import { Component, Input, Output, EventEmitter } from "@angular/core";
// ✨ New 👇
import { Store } from "@ngrx/store";
import { addMealToCart } from "../state/cart";
import { selectCartItem, incrementQuantity } from "../state/cart";

import { Meal } from "src/types/Meal";
import { CartItemType } from "src/types/CartItem";

@Component({
  selector: "meal-card",
  templateUrl: "./meal.component.html",
})
export class MealCardComponent {
  @Input() mealDetail: Meal = {
    mealName: "",
    mealImage: "",
    mealPrice: 0,
  };

  foundInCart: any;

  // ✨ New 👇
  constructor(private store: Store) {}

  @Output() mealOrdered = new EventEmitter();

  addMealToCart(meal: any) {
    console.log(meal);
    // this.mealOrdered.emit(meal);
    // check if an item exists
    this.store.select(selectCartItem(meal)).subscribe((data) => {
      this.foundInCart = data;
    });

    // construct the CartItem
    if (!this.foundInCart) {
      const cartItem: CartItemType = {
        itemName: meal.mealName,
        itemPrice: meal.mealPrice,
        itemQuantity: 1,
        itemImage: meal.mealImage,
        totalAmountPerItem: meal.mealPrice,
      };
      // update the quantity

      this.store.dispatch(addMealToCart(cartItem));
      return;
    }
    // this.foundInCart.itemQuantity += 1;
    // this.foundInCart.totalAmountPerItem =
    //   this.foundInCart.itemPrice * this.foundInCart.itemQuantity;
    // dispatch to store
    this.store.dispatch(incrementQuantity(this.foundInCart));
  }
}
