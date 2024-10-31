import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.component.html',
  styleUrls: ['./acceder.component.css']
})
export class AccederComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        (response) => {
          console.log('Inicio de sesión exitoso', response);
          //this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Error en el inicio de sesión', error);
          // this.errorMessage = error.error.message;
        }
      );
    }
  }
}
