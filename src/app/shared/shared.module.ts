import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './Directivas/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    ExponentialPipe,

  ],
  //exportar modulos 
  exports:[
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule,
    //aqui se debe  inportar router module sino lo colocas se pierde la conexion
    RouterModule,
    MaterialModule
  ]
})

export class SharedModule {}
