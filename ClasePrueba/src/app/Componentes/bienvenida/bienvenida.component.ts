import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent implements OnInit {

  public empleados: any = [
    {
    nombre: "Pedro",
    pasante: false,
    edad: 25,
    datos: {
    puesto: "Programación",
    antiguedad: 3
    }
    },
    {
    nombre: "Julieta",
    pasante: false,
    edad: 28,
    datos: {
    puesto: "Programación",
    antiguedad: 1
    }
    },
    {
    nombre: "Joaquin",
    pasante: true,
    edad: 20,
    datos: {
    puesto: "Programación",
    antiguedad: 1
    }
    },
    {
    nombre: "Ricardo",
    pasante: false,
    edad: 50,
    datos: {
    puesto: "Ventas",
    antiguedad: 5
    }
    },
    {
    nombre: "Fabio",
    pasante: true,
    edad: 22,
    datos: {
    puesto: "Programación",
    antiguedad: 0.5
    }
    }
  ]    

  saludo(nombre: string):void{
    console.log("Hola "+nombre)
  }

  ngOnInit(): void {

  }

}



