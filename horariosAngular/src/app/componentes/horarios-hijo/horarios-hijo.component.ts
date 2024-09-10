
import { OnInit,Component, Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Horarios{
  hora: String;
  lunes: string;
  martes:string;
  miercoles:string;
  jueves:string
  viernes:String
}


const tabla:Horarios[]=[
{hora:"8:00", lunes:"Practica Pofesionalizante", martes:"Etica",miercoles:"base de datos", jueves:"practicas profesionalizante",viernes:""},
{hora:"8:40", lunes:"Practica Pofesionalizante", martes:"Etica",miercoles:"base de datos", jueves:"practicas profesionalizante",viernes:"Gestion de Proyectos"},
{hora:"9:20", lunes:"Practica Pofesionalizante", martes:"Etica",miercoles:"base de datos", jueves:"practicas profesionalizante",viernes:"Gestion de Proyectos"},
{hora:"10.00", lunes:"Redes Comunicacion", martes:"Programacion",miercoles:"base de datos", jueves:"Programacion",viernes:"Gestion de Proyectos"},
{hora:"10.40", lunes:"Redes Comunicacion", martes:"Programacion",miercoles:"", jueves:"Programacion",viernes:"Gestion de Proyectos"},
{hora:"11:20", lunes:"Redes Comunicacion", martes:"Programacion",miercoles:"", jueves:"Programacion",viernes:""},
{hora:"12.00", lunes:"Redes Comunicacion", martes:"",miercoles:"", jueves:"",viernes:""}
]

@Component({
  selector: 'app-horarios-hijo',
  templateUrl: './horarios-hijo.component.html',
  styleUrls: ['./horarios-hijo.component.css']
})

export class HorariosHijoComponent implements OnInit {
  @Input() mensajePadre:string=""
  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles','jueves','viernes'];
  dataSource = tabla;
  

ngOnInit(): void {
  if (this.mensajePadre!="") {
    console.log(this.mensajePadre)
  }
}
}
