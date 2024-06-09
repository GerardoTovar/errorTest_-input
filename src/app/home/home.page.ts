import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    email: ['',[Validators.required, Validators.email, Validators.maxLength(100)]]
  });

  get EmailError() {
    return this.msgError('email')
  }

  public ErrorMsg:any = {
    email: { 
      required: "Email es requerido", 
      email: "Email debe ser valido",
      maxlength: 'Email es largo'
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
