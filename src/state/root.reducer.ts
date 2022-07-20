import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./root.state";
import * as CartReducer from "./cart/cart.reducer";

export const reducers: ActionReducerMap<State> = {
  cart: CartReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
