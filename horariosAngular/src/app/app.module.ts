import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SidebarComponent,
    NavBarComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
