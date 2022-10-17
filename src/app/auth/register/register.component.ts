import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]],
  })

  get mail() { return this.miFormulario.get('email'); }

  get pass() { return this.miFormulario.get('password'); }


  constructor( 
    private fb: FormBuilder, 
    private auth: AuthService, 
    private router: Router ) { }


  

  register() {
    this.auth.register(this.miFormulario.value)
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: `Bienvenido: ${this.miFormulario.value.email}`,
        }) 
        this.router.navigate(['']);
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrio un error verifique los campos',
        }) 
      })
  }



}
