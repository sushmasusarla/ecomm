import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { ProductsService } from 'src/app/service/products.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { datamodal } from './model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'com';
  formbuilder: any;
  productform:any;
  productsform! :FormGroup;



  private apiUrl = 'assets/products.json';  
  products: any[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

    this.productform = new FormGroup({
      id :new FormControl (),
      name :new FormControl (),
      description :new FormControl (),
      price :new FormControl (),
      image :new FormControl (),
      details :new FormControl (),
      size :new FormControl (),
      offers :new FormControl (),
      review :new FormControl (),
    })

    }

    addItem(data:datamodal){
      this.productService.additem(data).subscribe((res=>{

      }))

    }


}
