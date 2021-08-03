import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductsComponent } from "./components/products/products.component";

const routes: Routes = [
    {
        path:'',
        //aqui hay dos integraciones
       component:ProductsComponent
    },
    {
        //el aqui le pasa como si estuviera dividido con en el routin global
        path:':id',
       component:ProductDetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes) 
    ],
    exports: [
        RouterModule
    ]
})

export class  ProductRoutingModule {}