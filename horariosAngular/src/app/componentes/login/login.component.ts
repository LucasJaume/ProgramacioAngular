import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    'nombre':['', Validators.required],
    'apellido':['', Validators.required],
    'correo':['', Validators.required],
    'documento':['', Validators.required],
    'numero_documento':['', Validators.required]
  })

  constructor(private fb:FormBuilder, private router:Router){  }

  navegar():void{
    this.router.navigate(["/padre"])
  }
}
  