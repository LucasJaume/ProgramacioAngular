import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AlumnosService } from 'src/app/Services/alumnos.service';
import { Estudiantes } from 'src/app/Interfaces/estudiantes';

// export interface Estudiantes{
//   id:number
//   nombre:String,
//   apellido:String,
//   edad: Number
// }

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
 
  constructor(private alumnosService:AlumnosService){
  
 }
  
  listaEstudiantes=Alumnos;


  public variable:String='';
  Obtenernombreservicio():void{
    this.variable=this.alumnosService.obtenerNombre()
  }

  favoritos(elemento:Estudiantes){
    console.log(elemento)
  }
  
}

