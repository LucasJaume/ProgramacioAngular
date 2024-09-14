import { Component } from '@angular/core';
import { HorariosService } from 'src/app/servicios/horarios.service';
import { Horarios } from 'src/app/interface/horarios';

@Component({
  selector: 'app-alta-horario',
  templateUrl: './alta-horario.component.html',
  styleUrls: ['./alta-horario.component.css']
})
export class AltaHorarioComponent {

  constructor(private _horarioService: HorariosService){}

  limpiar(...inputs: HTMLInputElement[]):void{
    inputs.forEach(input => {
      input.value=''
    });
  }

  guardarHorario(horaN:string, lunesN:string, martesN:string, miercolesN:string, juevesN:string, viernesN:string):void{
    const nuevo:Horarios={
      hora:horaN,
      lunes:lunesN,
      martes:martesN,
      miercoles:miercolesN,
      jueves:juevesN,
      viernes:viernesN
    } 

    this._horarioService.agregarHorarios(nuevo)

  }

}
