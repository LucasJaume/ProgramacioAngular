import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AdministrarHorariosComponent } from './componentes/administrar-horarios/administrar-horarios.component';
import { AltaHorarioComponent } from './componentes/alta-horario/alta-horario.component';
import { LoginComponent } from './componentes/login/login.component';
import { loginGuard } from './guard/login.guard';

const routes: Routes = [
  {path:'padre', component:TablaComponent, canActivate:[loginGuard]},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'administrar-horarios', component:AdministrarHorariosComponent, children:[
    {path:'alta', component:AltaHorarioComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }