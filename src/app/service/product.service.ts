import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
   productsUrl = 'assets/products.json';
   cart: any[] = [];

  

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }
  addToCart(product: any) {
    this.cart.push(product);
    console.log('Cart:', this.cart);
  }
  getCart(): any[] {
    return this.cart;
  }

   removeFromCart(productId: number) {
    let cart = this.getCart();
    cart = cart.filter((item: any) => item.id !== productId);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
