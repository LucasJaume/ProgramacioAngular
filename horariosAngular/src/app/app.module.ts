import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './componentes/footer/footer.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HorariosHijoComponent } from './componentes/horarios-hijo/horarios-hijo.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministrarHorariosComponent } from './componentes/administrar-horarios/administrar-horarios.component';
import { AltaHorarioComponent } from './componentes/alta-horario/alta-horario.component';
import { LoginComponent } from './componentes/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SidebarComponent,
    NavBarComponent,
    FooterComponent,
    HorariosHijoComponent,
    TablaComponent,
    AdministrarHorariosComponent,
    AltaHorarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
