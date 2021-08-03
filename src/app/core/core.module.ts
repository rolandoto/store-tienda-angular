import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './Products/products.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule  
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
