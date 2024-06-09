import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AbstractControlOptions, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule]
})
export class HomePage {
  public fb = inject(FormBuilder);
  public registerForm: FormGroup = this.fb.group({
    firstname: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z \u00C0-\u024F]+'),
      ],
    ],
    lastname: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z \u00C0-\u024F]+'),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.email, Validators.maxLength(100)],
    ],
    birthdate: [, [Validators.required]],
    gender: ['', [Validators.required, Validators.pattern('^[MFO]$')]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
    passwordRepeat: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
    cellphone: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(15)],
    ],
    acceptTerms: [, Validators.required],
  });

  get EmailError() {
    return this.msgError('email')
  }

  public ErrorMsg:any = {
    firstname: {
      required:  "Nombre es requerido",
      minlength: "Nombre debe contener mínimo 3 letras",
      maxlength: "Nombre debe contener máximo 20 letras",
      pattern:   "Nombre sólo debe contener letras"
    },
    lastname: {
      required:  "Apellido es requerido",
      minlength: "Apellido debe contener mínimo 3 letras",
      maxlength: "Apellido debe contener máximo 20 letras",
      pattern:   "Apellido sólo debe contener letras"
    },
    password: {  
      required:  'Password es requerido',
      minlength:  'Password debe contener mínimo 6 caracteres',
      maxlength:  'Password debe contener máximo 30 caracteres',
    },
    passwordRepeat: { 
      required:  'Password es requerido',
      minlength:  'Password debe contener mínimo 6 caracteres',
      maxlength:  'Password debe contener máximo 30 caracteres',
      notEqual: "Las contraseñas deben ser iguales"
    },
    email: { 
      required: "Email es requerido", 
      email: "Email debe ser valido" 
    },
    cellphone: { 
      required:  "Móvil es requerido"
    },
    gender: { 
      required:  "Género es requerido",
      pattern:   "Género es requerido"
    },
    weigth: { 
      required:  "Peso es requerido",
      pattern:   "Peso es requerido"
    },
    birthdate: {
      required:  "Fecha es requerida"
    }
  }

  msgError(campo:string) :string | void {
    if(this.registerForm.get(campo)?.errors?.['required'])  return this.ErrorMsg[campo]['required']
    if(this.registerForm.get(campo)?.errors?.['minlength']) return this.ErrorMsg[campo]['minlength']
    if(this.registerForm.get(campo)?.errors?.['maxlength']) return this.ErrorMsg[campo]['maxlength']
    if(this.registerForm.get(campo)?.errors?.['pattern'])   return this.ErrorMsg[campo]['pattern']
    if(this.registerForm.get(campo)?.errors?.['email'])     return this.ErrorMsg[campo]['email']
    if(this.registerForm.get(campo)?.errors?.['notEqual'])  return this.ErrorMsg[campo]['notEqual']
    if(this.registerForm.get(campo)?.errors?.['invalidNumber'])  return this.ErrorMsg[campo]['invalidNumber']
    return ''
  }
}
