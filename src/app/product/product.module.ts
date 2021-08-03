import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [

    ProductsComponent,
    ProductDetailComponent,
    ProductComponent

  ],
  //aqui van todoso los modulos
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
    
  ]
})
export class ProductModule { }
