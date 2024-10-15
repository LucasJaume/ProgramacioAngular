import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    'nombre':['', Validators.required],
    'contrasena':['', Validators.required]
  })

  constructor(private fb:FormBuilder, private router:Router, private _loginService:LoginService){  }

  navegar():void{
    if (this.form.valid) {
      const nombre = this.form.get('nombre')?.value;
      const constraseña = this.form.get('contrasena')?.value;

      if(nombre==='lucas' && constraseña==='1234'){
        this._loginService.inicioSesion()
        this.router.navigate(['/padre'])
      }else{
        alert('Ingreso incorrecto')
      }
    }else{
      this.form.markAllAsTouched();
    }
  }
}
  