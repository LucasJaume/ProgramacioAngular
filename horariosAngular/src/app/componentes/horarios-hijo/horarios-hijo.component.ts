
import { OnInit,Component, Input, Output, ChangeDetectorRef } from '@angular/core';
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
  
  constructor(private cd:ChangeDetectorRef){}

  ngOnInit(): void {
    this.updateDisplayColumns()
  }

  ngOnChanges():void{
    this.updateDisplayColumns()
  }

  private updateDisplayColumns():void{
    if (this.mensajePadre === "nada") {
      this.displayedColumns = ['hora'];
    } else if (this.mensajePadre === "todos") {
      this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    } else if (this.mensajePadre === "lunes") {
      this.displayedColumns = ['hora', 'lunes'];
    } else if (this.mensajePadre === "martes") {
      this.displayedColumns = ['hora', 'martes'];
    } else if (this.mensajePadre === "miercoles") {
      this.displayedColumns = ['hora', 'miercoles'];
    } else if (this.mensajePadre === "jueves") {
      this.displayedColumns = ['hora', 'jueves'];
    } else if (this.mensajePadre === "viernes") {
      this.displayedColumns = ['hora', 'viernes'];
    }
    this.cd.detectChanges(); // Forzar la detección de cambios
  }
}
