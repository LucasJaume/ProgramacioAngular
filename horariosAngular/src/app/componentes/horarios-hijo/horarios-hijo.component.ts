
import { OnInit,Component, Input, Output, ChangeDetectorRef } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Horarios } from 'src/app/interface/horarios';
import { HorariosService } from 'src/app/servicios/horarios.service';


@Component({
  selector: 'app-horarios-hijo',
  templateUrl: './horarios-hijo.component.html',
  styleUrls: ['./horarios-hijo.component.css']
})

export class HorariosHijoComponent implements OnInit {
  @Input() mensajePadre:string=""
  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles','jueves','viernes'];
  // dataSource = ;
  
  tabla:Horarios[]=[]

  constructor(private cd:ChangeDetectorRef, private _horariosService:HorariosService){

  }


  ngOnInit(): void {
    this.updateDisplayColumns()
    this.tabla=this._horariosService.obtenerHorarios()
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
    this.cd.detectChanges(); 
  }
}
