import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  addToCart(product: any) {
       this.productService.addToCart(product);
   // if (product.name === "Women's Saree") {
     // this.productService.addToCart(product);
    //}
  }
deleteProduct(id: number): void {
  this.productService.deleteProduct(id).subscribe(updatedProducts => {
    this.products = updatedProducts;
    this.productService.updateProducts(updatedProducts); // Simulate saving the updated data
  });
}

}
