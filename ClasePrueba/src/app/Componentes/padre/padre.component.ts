import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  mensaje = 'Mensaje del padre';

  manejarNotificacion(mensaje: String){
    console.log(mensaje)
  }
}
