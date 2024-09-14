import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertirFechasService {

  constructor() { }

  convertirFechaString(fecha:Date):string{
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2,'0');
    const dia = (fecha.getDay()).toString().padStart(2,'0');
    return '${año}/${mes}/${dia}'
  }

  FechaBarraAGuion(fecha:String):string{
    return fecha.split('/').join('-')
  }

  FechaGuionABarra(fecha:String):string{
    return fecha.split('-').join('/')
  }
  
}

