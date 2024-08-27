import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
 @Input() mensajeDelPadre:String='';
 @Output() notificacion = new EventEmitter<String>()

 notificarAlPadre(){
  this.notificacion.emit('El hijo notificando al padre')
 }
}


