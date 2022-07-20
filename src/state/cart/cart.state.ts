import { CartItemType } from "src/types/CartItem";
export interface CartState {
  mealOrdered: CartItemType[];
}

export const initialState: CartState = {
  mealOrdered: [],
};
