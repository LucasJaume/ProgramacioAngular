import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AdministrarHorariosComponent } from './componentes/administrar-horarios/administrar-horarios.component';
import { AltaHorarioComponent } from './componentes/alta-horario/alta-horario.component';

const routes: Routes = [
  {path:'padre', component:TablaComponent},
  {path:'', redirectTo:'padre', pathMatch:'full'},
  {path:'administrar-horarios', component:AdministrarHorariosComponent, children:[
    {path:'alta', component:AltaHorarioComponent}
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }