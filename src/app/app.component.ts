import { Component } from "@angular/core";
import { CartItemType } from "src/types/CartItem";
import { Meal } from "src/types/Meal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "mtigo_hotel_frontend";
  mealsOrdered: CartItemType[] = [];

  addMealToCart(meal: Meal) {
    // const quantity = 0;
    // check if the item exist
    const foundInCart = this.mealsOrdered.find(
      (item: CartItemType) => item.itemName == meal.mealName
    );

    if (!foundInCart) {
      const cartItem: CartItemType = {
        itemName: meal.mealName,
        itemPrice: meal.mealPrice,
        itemQuantity: 1,
        itemImage: meal.mealImage,
        totalAmountPerItem: meal.mealPrice,
      };

      this.mealsOrdered.push(cartItem);
      return;
    }

    foundInCart.itemQuantity += 1;
    foundInCart.totalAmountPerItem =
      foundInCart.itemPrice * foundInCart.itemQuantity;
  }

  removeFromCart(event: string) {
    console.log(event);
  }
}
