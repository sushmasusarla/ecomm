import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'productlist', component:ProductListComponent},
  {path:'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
