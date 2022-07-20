import { Action, createReducer, on } from "@ngrx/store";
import * as CartActions from "./cart.actions";
import { initialState, CartState } from "./cart.state";

const cartReducer = createReducer(
  initialState,
  on(CartActions.addMealToCart, (state, order) => ({
    state,
    mealOrdered: [...state.mealOrdered, order],
  })),
  on(CartActions.incrementQuantity, (state, cartItem) => {
    // get the index of that
    const mealIndex = state.mealOrdered.findIndex(
      (meal) => meal.itemName == cartItem.itemName
    );
    if (mealIndex < 0) return state;
    const existingCartItems = [...state.mealOrdered];
    const mealItemToUpdate = existingCartItems[mealIndex];
    const newQuantity = mealItemToUpdate.itemQuantity + 1;
    const totalAmountPerItem = mealItemToUpdate.itemPrice * newQuantity;
    const updatedMeal = {
      ...mealItemToUpdate,
      itemQuantity: newQuantity,
      totalAmountPerItem: totalAmountPerItem,
    };
    existingCartItems[mealIndex] = updatedMeal;
    return {
      ...state,
      mealOrdered: existingCartItems,
    };
  }),
  on(CartActions.decreaseQuantity, (state, cartItem) => {
    // get the index of that
    const mealIndex = state.mealOrdered.findIndex(
      (meal) => meal.itemName == cartItem.itemName
    );
    if (mealIndex < 0) return state;
    const existingCartItems = [...state.mealOrdered];
    const mealItemToUpdate = existingCartItems[mealIndex];
    if (mealItemToUpdate.itemQuantity <= 1) return state;
    const newQuantity = mealItemToUpdate.itemQuantity - 1;
    const totalAmountPerItem = mealItemToUpdate.itemPrice * newQuantity;
    const updatedMeal = {
      ...mealItemToUpdate,
      itemQuantity: newQuantity,
      totalAmountPerItem: totalAmountPerItem,
    };
    existingCartItems[mealIndex] = updatedMeal;
    return {
      ...state,
      mealOrdered: existingCartItems,
    };
  }),
  on(CartActions.deleteFromCart, (state, cartItem) => {
    const remainingItems = state.mealOrdered.filter(meal => meal.itemName != cartItem.itemName);

    return {
      ...state,
      mealOrdered: remainingItems
    }
  })
);

export function reducer(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}
