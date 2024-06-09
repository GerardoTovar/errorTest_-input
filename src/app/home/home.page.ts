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
  public EmailError = 'un error'
  public EmailError2 = ''
  public registerForm: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email, Validators.maxLength(100)]]
  });



}
