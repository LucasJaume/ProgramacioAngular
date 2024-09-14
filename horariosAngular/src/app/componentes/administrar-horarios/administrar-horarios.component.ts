import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrar-horarios',
  templateUrl: './administrar-horarios.component.html',
  styleUrls: ['./administrar-horarios.component.css']
})
export class AdministrarHorariosComponent {

  constructor(private router:Router){}

  navigateTo(route:string){
    this.router.navigate([route])
  }
}
