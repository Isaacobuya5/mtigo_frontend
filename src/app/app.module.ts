import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
// ✨ New 👇
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "../state/root.reducer";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav.component";
import { Banner } from "./banner.component";
import { MealsComponent } from "./meals-list.component";
import { MealCardComponent } from "./meal.component";
import { MealCart } from "./meal.cart";
import { CartItem } from "./cart-item";
import { MpesaAuthorizationService } from "src/services/mpesaAuthService";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Banner,
    MealsComponent,
    MealCardComponent,
    MealCart,
    CartItem,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // ✨ New 👇
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  providers: [MpesaAuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
