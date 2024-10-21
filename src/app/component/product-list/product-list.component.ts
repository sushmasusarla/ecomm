import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { datamodal } from 'src/app/model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

productform:any;  
newProduct: datamodal = { id: 0, name: '', description:'', price: 0, image: '', details: '', size: '', offers: '', reviews: [] }; // Initialize the new product
showAddForm = false; // Flag to control the display of the add product form

  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    //this.productService.getProducts().subscribe(data => {
      //this.products = data;
    //});


    const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    this.products = JSON.parse(storedProducts);
  } else {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm; // Toggle the form display
  }
  addToCart(productId: number): void {
    this.productService.addToCart(productId);
  }

  addNew() {
    this.productService.addNewItem(this.newProduct);
    this.newProduct ={ id: 0, name: '', description:'', price: 0, image: '', details: '', size: '', offers: '', reviews: [] }; // Reset the form
    this.showAddForm = false;
    this.showAddForm = false; // Hide the form after submission
    this.loadProducts(); // Reload products to reflect the new addition
  }
  addThis(){
    this.newProduct.id = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1; // Assign new ID
    this.products.push({ ...this.newProduct }); // Add the new product to the array


     // Optionally, save to local storage or update your JSON file if applicable.
  // If you are using local storage for demo purposes:
    localStorage.setItem('products', JSON.stringify(this.products));


     // Clear the form
  this.newProduct = { id: 0, name: '', description: '', price: 0, image: '', details: '', size: '', offers: '', reviews: [] };
  this.showAddForm = false; // Hide the form after submission
  }
}
