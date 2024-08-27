import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './Componentes/bienvenida/bienvenida.component';
import { PadreComponent } from './Componentes/padre/padre.component';
import { HijoComponent } from './Componentes/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
