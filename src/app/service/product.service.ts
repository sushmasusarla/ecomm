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

   removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
}
  deleteProduct(id: number): Observable<any[]> {
    return this.getProducts().pipe(
      map(products => products.filter(product => product.id !== id)),
      catchError(() => of([])) // Return an empty array on error
    );
  }
  updateProducts(products: any[]): void {
    // In a real app, you would send a PUT/PATCH request here
    console.log('Updated products:', products);
  }
}
