import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
// ✨ New 👇
import { Store } from "@ngrx/store";
import { selectCartItems, selectTotalAmount } from "src/state/cart";

import { CartItemType } from "src/types/CartItem";
import { MpesaAuthorizationService } from "src/services/mpesaAuthService";
import { response } from "express";
import { Console } from "console";

@Component({
  selector: "meal-cart",
  templateUrl: "./meal.cart.html",
  styleUrls: ["./meal.cart.css"],
})
export class MealCart implements OnInit {
  //@Input() mealsOrdered: CartItemType[] = [];

  mealsOrdered = this.store.select(selectCartItems);

  // payAmount = this.store.select(selectTotalAmount);

  amountToPay?: number = 0;

  @Output() decreaseItem = new EventEmitter();

  constructor(
    private mpesaAuthorization: MpesaAuthorizationService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.mealsOrdered.subscribe((data) => {
      if (data.length > 0) {
        const totalAmount = data
          .map((cartItem) => cartItem.totalAmountPerItem)
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
        this.amountToPay = totalAmount;
      }
    });
  }

  removeFromCart() {
    this.decreaseItem.emit("remove");
  }

  initiatePayment() {
    // check if access token already exists
    const accessToken = localStorage.getItem("access-token");
    console.log(accessToken);
    if (!accessToken) {
      this.mpesaAuthorization.getAuthorizationToken().subscribe((data: any) => {
        localStorage.setItem("access-token", data.access_token);
        localStorage.setItem("expires_in", data.expires_in);
        console.log(data);
      });
      // proceed to call mpesa api
    }
  }

  updateItemTotalCost(amount: any) {
    console.log(amount);
  }
}
