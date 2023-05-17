import { Injectable } from '@angular/core';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  addToCart(medicines: MedicinelistComponent) {
    this.cartItems.push(medicines);
  }

  getCartItems() {
    return this.cartItems;
  }
}