import { Component, OnInit  } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {

  cartItems: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getCart().subscribe(cart => {
      this.cartItems = cart;
    });
  }

  removeFromCart(productId: number): void {
    this.productService.removeFromCart(productId);
  }
}
