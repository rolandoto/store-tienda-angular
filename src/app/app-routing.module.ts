import {  NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';


import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

import { LayaoutComponent } from './layaout/layaout.component';
import { PageNFoundComponent } from './page-n-found/page-n-found.component';


const routes: Routes = [
  { 
    //mirar la libreria de de portatil gracias
    //layout
    path:'',
    component:LayaoutComponent,
    children: [
      {
        //este va hacer el path principal de bienvenida
      path:'',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        //esto es para poder mostrar el home como tal
        path:'home',
        //home
       loadChildren:()=> import('./home/home.mudule').then(m =>m.HomeModule)
      },
      {
        path:'products',
        //product detail
        loadChildren:()=> import('./product/product.module').then(m =>m.ProductModule)
      },
      {
        path:'producto-detail',
         loadChildren:()=> import('./product/product.module').then(m =>m.ProductModule)
      },
      {
        path:'productorres',
         loadChildren:()=> import('./product/product.module').then(m =>m.ProductModule)
      },
      {
        path:'contact',
      canActivate:[AdminGuard],
        component:ContactComponent
      },
      {
        path:'demo',
        component:DemoComponent
      }
    ]
  }, 
    {
      //no found
      path: '**',
      component:PageNFoundComponent
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
