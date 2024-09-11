import { Component } from '@angular/core';

const materias:any[]=[
  {lunes:"X", martes:"" ,miercoles:"" ,jueves:"X" ,viernes:""},
  {lunes:"X", martes:"" ,miercoles:"" ,jueves:"" ,viernes:""},
  {lunes:"", martes:"X" ,miercoles:"" ,jueves:"" ,viernes:""},
  {lunes:"", martes:"" ,miercoles:"X" ,jueves:"" ,viernes:""},
  {lunes:"", martes:"X" ,miercoles:"" ,jueves:"X" ,viernes:""},
  {lunes:"", martes:"" ,miercoles:"" ,jueves:"" ,viernes:"X"},
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent {
  displayedColumns: string[] = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  dataSource = materias;
  selected = '';
}
