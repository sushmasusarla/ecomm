import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{

  cart: any[] = [];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }
 removeFromCart(productId: number) {
    this.productService.removeFromCart(productId);
    this.cart = this.productService.getCart();
  }
}
