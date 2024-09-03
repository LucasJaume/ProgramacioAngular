import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './componentes/tabla/tabla.component';

const routes: Routes = [
  {path:'padre', component:TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }