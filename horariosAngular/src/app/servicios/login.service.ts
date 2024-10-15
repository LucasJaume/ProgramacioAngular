import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private logeado=new BehaviorSubject<boolean>(false);

estaLogeado():Observable<boolean>{
  return this.logeado.asObservable();
}

inicioSesion():void{
  this.logeado.next(true)
}
  
cierreSesion():void{
  this.logeado.next(false)
}

}
