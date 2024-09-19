import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url="https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) {} 

  obtenerPokemons():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
