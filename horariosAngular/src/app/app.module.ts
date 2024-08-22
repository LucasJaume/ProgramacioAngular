import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SidebarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
