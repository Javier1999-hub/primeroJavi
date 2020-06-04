import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './ComponentesJavi/inicio/inicio.component';
import { LenguajesProgComponent } from './ComponentesJavi/lenguajes-prog/lenguajes-prog.component';
import { DetallesLengComponent } from './ComponentesJavi/detalles-leng/detalles-leng.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'LenguajesPro', component: LenguajesProgComponent},
  {path: 'detallesdeLenguaje', component: DetallesLengComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
