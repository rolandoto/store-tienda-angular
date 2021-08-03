import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})



  export class ProductComponent implements OnInit, DoCheck, OnDestroy {
/*Decorador @input
Para indicarle a un componente que puede 
recibir un valor desde el componente
 padre debemos agregarle el decorador
  @input a la propiedad que deseamos controlar.
  */
 //input recibe datos del componente 
  @Input() producto: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  carrito: Product[]
  /*Decorador @output
Para emitir un valor desde el
 componente hijo ( home.component)
  que pueda ser escuchado por el 
  componente padre (app.component) 
  utilizamos el decorador @output.
*/

  today = new Date();

  constructor() {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.producto.id);
   
    
  }

}
