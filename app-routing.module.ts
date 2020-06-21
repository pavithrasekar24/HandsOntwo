import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProductComponent} from './add-product/add-product.component';
import {SearchProductComponent} from "./search-product/search-product.component";
import {RateProductComponent} from "./rate-product/rate-product.component";
import { Title }  from '@angular/platform-browser';

const routes: Routes = [
  {path:"addProduct",component:AddProductComponent},
  {path:"searchProduct",component:SearchProductComponent},
  {path:"rateProduct",component:RateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    Title
  ],
})
export class AppRoutingModule { }
