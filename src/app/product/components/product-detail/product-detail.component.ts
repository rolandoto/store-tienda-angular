import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute,Params} from '@angular/router'
import { ProductsService } from '../../../core/Products/products.service';
import { Product } from '../../../product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    //inyesion de dependencia
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    //params de tipado 
    //this.route.params le esta pidiendo a 
    //route esta pidiendo los parametro que tenga en la rutas
    this.route.params.subscribe((params: Params) =>{
    const id = params.id
    //aqui esta llamando el metodo get getProducts para pasarle el id que tiene que buscar como parametros
    this.product =this.productsService.getProducts(id)
    //aqui entra el product con el this y le pasa la informacion
  
  })
  }
  
}
