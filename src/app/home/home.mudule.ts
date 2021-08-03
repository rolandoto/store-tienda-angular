import { CommonModule } from '@angular/common';
import {NgModule} from  '@angular/core'
import { SharedModule } from '../shared/shared.module';
import { BennerComponent } from './components/benner/benner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './Home/home.component';


/*Lazy Loading
Es una técnica que ayuda
 a reducir el peso de las aplicaciones
 , de esta forma carga mas rápido 
 el proyecto. La carga inicial de una
  pagina no debería ser Lazy ya que 
  necesitamos que se cargue de una, 
  como por ejemplo el Home.
La forma en que funciona es que el
 navegador realiza un request del html,
  el cual contiene las instrucciones de carga
   (archivos css, js e imágenes) y cuando identifica
    los archivos que necesita para cargar el modulo,
     realiza otro request para pedir dichos archivos.
      Para aplicar esta técnica es necesario modularizar
       la aplicación.
Cuando ya esta modularizado, hay que definir 
una ruta inicial en el archivo routing del modulo.
*/

@NgModule({
    declarations:[
        BennerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        //esto es cuando pasamos el home para aca es inportante importar esta libreria 
        CommonModule,
        SharedModule
    ]
}) 

export class HomeModule{} 