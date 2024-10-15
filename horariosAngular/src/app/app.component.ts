import { Component, OnInit } from '@angular/core';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logeado=false
  constructor(private _loginService:LoginService){}
  ngOnInit(): void {
    this._loginService.estaLogeado().subscribe((loggedIn:boolean)=>{
      this.logeado=loggedIn;
    })
  }

}
