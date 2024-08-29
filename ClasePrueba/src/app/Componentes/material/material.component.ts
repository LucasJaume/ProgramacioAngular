import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface Estudiantes{
  id:number
  nombre:String,
  apellido:String,
  edad: Number
}

const Alumnos:Estudiantes[] = [
  {id: 2,nombre:'Lucas', apellido: 'Jaume', edad: 21},
  {id: 3,nombre:'Santino', apellido: 'Angelini', edad: 20},
  {id: 4,nombre:'kevin', apellido: 'davezack', edad: 21}
]

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  displayedColumns:String[]=['id','nombre', 'apellido', 'edad', 'accion']
  listaEstudiantes=Alumnos;


  favoritos(elemento:Estudiantes){
    console.log(elemento)
  }
  
}

