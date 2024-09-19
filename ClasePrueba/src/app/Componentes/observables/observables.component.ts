import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/Services/poke-api.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  respuesta:any[]=[];
  constructor(private _pokeapi:PokeApiService){}
  
  
  ngOnInit(): void {
    this._pokeapi.obtenerPokemons().subscribe(response=>{
      this.respuesta=response.results
      console.log(this.respuesta)
    }, error=>{
      console.error("Error al obtener los datos"+error );
    })
  }
  
  
}
