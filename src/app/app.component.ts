import { Component } from '@angular/core';

import { Product } from './product.model';

/*Core: Guarda toda
 la funcionalidad de la 
 aplicación que va a ser 
 compartida, es decir que 
 genera una sóla referencia
 de la funcionalidad, siguiendo 
 el principio Singleton de SOLID,
  facilitando así el traslado de 
  funcionalidad entre aplicaciones.
Shared: Encapsula los componentes y
 servicios compartidos para la aplicación.*/

//comando en angular  ng gg admin para crear ruta privadas
//ng g m para crear modulo
//ng g c layout para crear componentes
//ng g s  para crear servicios 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
}
