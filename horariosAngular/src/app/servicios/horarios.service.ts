import { Injectable } from '@angular/core';
 import { Horarios } from '../interface/horarios';
@Injectable({
  providedIn: 'root'
})

export class HorariosService {

  constructor() { }

  private horariosMaterias:Horarios[]=[
    {hora:"08:00 - 08:40", lunes:"Practica Pofesionalizante", martes:"Etica",miercoles:"base de datos", jueves:"practicas profesionalizante",viernes:""},
    {hora:"8:40 - 09:20", lunes:"Practica Pofesionalizante", martes:"Etica",miercoles:"base de datos", jueves:"practicas profesionalizante",viernes:"Gestion de Proyectos"},
    {hora:"09:20 - 10:00", lunes:"Practica Pofesionalizante", martes:"Etica",miercoles:"base de datos", jueves:"practicas profesionalizante",viernes:"Gestion de Proyectos"},
    {hora:"10:00 - 10:40", lunes:"Redes Comunicacion", martes:"Programacion",miercoles:"base de datos", jueves:"Programacion",viernes:"Gestion de Proyectos"},
    {hora:"10:40 - 11:20", lunes:"Redes Comunicacion", martes:"Programacion",miercoles:"", jueves:"Programacion",viernes:"Gestion de Proyectos"},
    {hora:"11:20 - 12:00", lunes:"Redes Comunicacion", martes:"Programacion",miercoles:"", jueves:"Programacion",viernes:""},
    {hora:"12:00 - 12:40", lunes:"Redes Comunicacion", martes:"",miercoles:"", jueves:"",viernes:""}
  ]

  obtenerHorarios():Horarios[]{
    return this.horariosMaterias;
  }

  agregarHorarios(nuevo:Horarios):number{
    this.horariosMaterias.push(nuevo)
    if(this.horariosMaterias.includes(nuevo)){
      console.log("esta incluido")  
      return 1
    }else{
      console.log("No esta incluido")
      return -1
    }
  }
}
