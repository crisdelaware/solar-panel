import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  miFormulario: FormGroup = this.fb.group({
    email:['',[Validators.required]],
    password:['',Validators.required]
  })

  get mail() { return this.miFormulario.get('email'); }

  get pass() { return this.miFormulario.get('password'); }


  constructor( private fb: FormBuilder, private auth: AuthService, private router: Router ) { }

  login() {
    this.auth.login(this.miFormulario.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['dashboard'])
      })
      .catch(errors => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error en las credenciales',
        }) 
      })
  }

  loginGoogle() {
    this.auth.loginWithGoogle()
      .then(response => {
        console.log(response)
        this.router.navigate(['/dashboard']);
      })
    .catch(error => console.log(error))
  }
}
