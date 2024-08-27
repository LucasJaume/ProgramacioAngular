import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './Componentes/padre/padre.component';
import { HijoComponent } from './Componentes/hijo/hijo.component';

const routes: Routes = [
  {path:'padre', component: PadreComponent},
  {path:'hijo', component: HijoComponent},
  {path:'**', redirectTo: 'bienvenida'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
