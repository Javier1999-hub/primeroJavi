import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './ComponentesJavi/inicio/inicio.component';
import { NavbarComponent } from './ComponentesJavi/navbar/navbar.component';
import { LenguajesProgComponent } from './ComponentesJavi/lenguajes-prog/lenguajes-prog.component';
import { AppRoutingModule } from './app--routing.module';
import { DetallesLengComponent } from './ComponentesJavi/detalles-leng/detalles-leng.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LenguajesProgComponent,
    DetallesLengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
