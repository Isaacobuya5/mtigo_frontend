import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCartItems } from "src/state/cart";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav.component.html",
})
export class NavComponent implements OnInit {
  totalCartItems?: number;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store
      .select(selectCartItems)
      .subscribe((data) => (this.totalCartItems = data.length));
  }
}
