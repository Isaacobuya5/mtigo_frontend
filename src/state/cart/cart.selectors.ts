import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";
import { Meal } from "src/types/Meal";

export const selectCart = createFeatureSelector<CartState>("cart");

export const selectCartItems = createSelector(
  selectCart,
  (state: CartState) => state.mealOrdered
);

export const selectCartItem = (props: Meal) =>
  createSelector(selectCartItems, (cartItems) => {
    return cartItems.find((cartItem) => cartItem.itemName === props.mealName);
  });

export const selectTotalAmount = () =>
  createSelector(selectCartItems, (cartItems) => {
    const items = cartItems.map((cartItem) => cartItem.totalAmountPerItem);
    if (items.length < 1) return;
    const total = items.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    return total;
  });

// export const selectTotalAmount = () =>
//   createSelector(selectCartItems, (cartItems) => {
//     return cartItems.reduce((previousValue, currentValue) => previousValue.totalAmountPerItem + currentValue.totalAmountPerItem);
//   });
