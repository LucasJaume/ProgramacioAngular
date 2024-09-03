import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  public nombre:String = "Lucas"

  constructor() { }

  obtenerNombre():String{
    return this.nombre;
  }
}
