import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { datamodal } from '../model';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  private apiUrl = 'assets/products.json';  
  private products: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private cart = new BehaviorSubject<any[]>([]);
  private addurl='assets/add.json';
  private producty: datamodal[] = [];

  cartItemsSubject: any;
  currentProducts: any;

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.products.next(data);
    });
  }
  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }

  getProductById(id: number): Observable<any> {
    return this.products.asObservable().pipe(
      map((products: any[]) => products.find((product: { id: number; }) => product.id === id))
    );
  }

  addToCart(productId: number): void {
    this.products.subscribe(products => {
      const product = products.find(p => p.id === productId);
      if (product) {
        const currentCart = this.cart.getValue();
        if (!currentCart.some(p => p.id === productId)) {
          this.cart.next([...currentCart, product]);
        }
      }
    });
  }

  getCart(): Observable<any[]> {
    return this.cart.asObservable();
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cart.getValue();
    this.cart.next(currentCart.filter(p => p.id !== productId));
  }

 // additem(data:datamodal) {
   // return this.http.post<datamodal>(this.apiUrl,data);
    
  //}
  addNewItem(newProduct: datamodal) { // Use the Product interface
    const currentProducts= this.products.value;
    newProduct.id = this.currentProducts.length ? Math.max(...this.currentProducts.map((p: { id: any; }) => p.id)) + 1 : 1; // Assign a new ID
    this.products.next([...currentProducts, newProduct]); // Push the new product
  }
}
