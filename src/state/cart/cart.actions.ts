import { createAction, props } from "@ngrx/store";
import { CartItemType } from "src/types/CartItem";

export const addMealToCart = createAction(
  "[Add Meal] Add Meal To Cart",
  props<CartItemType>()
);

export const incrementQuantity = createAction(
  "[Increment Quantity] Increment meal quantity",
  props<CartItemType>()
);

export const decreaseQuantity = createAction(
  "[Decrement Quantity] Decrement meal quantity",
  props<CartItemType>()
);

export const deleteFromCart = createAction(
  "[Delete Item Cart] Decrement meal from cart",
  props<CartItemType>()
);
