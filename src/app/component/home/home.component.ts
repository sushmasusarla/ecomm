import { Component,ElementRef, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/service/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private apiUrl = 'assets/products.json';  
  products: any[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });    

    }
     // Data for cards
  cards = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    { title: 'Card 4', description: 'This is the fourth card.' }
  ];
}
