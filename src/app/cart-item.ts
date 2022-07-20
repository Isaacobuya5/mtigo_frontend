import {
  Component,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
} from "@angular/core";
import { CartItemType } from "src/types/CartItem";
import { Store } from "@ngrx/store";
import {
  incrementQuantity,
  decreaseQuantity,
  deleteFromCart,
} from "src/state/cart";

@Component({
  selector: "cart-item",
  templateUrl: "./cart-item.html",
  styleUrls: ["./cart-item.css"],
})
export class CartItem {
  private _mealCartItem: CartItemType = {
    itemId: 0,
    itemName: "",
    itemPrice: 0,
    itemQuantity: 0,
    itemImage: "",
    totalAmountPerItem: 0,
  };

  // @Input() set mealCartItem: CartItemType = {
  //   itemId: 0,
  //   itemName: "",
  //   itemPrice: 0,
  //   itemQuantity: 0,
  //   itemImage: "",
  //   totalAmountPerItem: 0,
  // };

  constructor(private store: Store) {}

  @Input() set mealCartItem(value: CartItemType) {
    this._mealCartItem = value;

    this.updateItemTotalCost(this._mealCartItem);
  }

  get mealCartItem(): CartItemType {
    return this._mealCartItem;
  }

  @Output() decreaseItem = new EventEmitter();

  @Output() itemTotalCost = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    this.updateItemTotalCost(
      changes["mealCartItem"].currentValue.totalAmountPerItem
    );
  }

  removeFromCart(event: any) {
    console.log(event);
    this.decreaseItem.emit("remove");
  }

  updateItemTotalCost(event: any) {
    console.log(event);
    // this.itemTotalCost.emit(amount);
  }

  updateItemQuantityAndPrice() {
    this.store.dispatch(incrementQuantity(this.mealCartItem));
  }

  decrementItemQuantityAndPrice() {
    this.store.dispatch(decreaseQuantity(this.mealCartItem));
  }

  deleteFromCart() {
    this.store.dispatch(deleteFromCart(this.mealCartItem));
  }
}
