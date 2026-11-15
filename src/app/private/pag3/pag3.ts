import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pag3',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pag3.html',
  styleUrl: './pag3.css'
})
export class Pag3 implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombres: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: [''],
      documento_identidad: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      comentarios: ['']
    });
  }
 
  enviar(): void {
    if (this.myForm.valid) {
      console.log('Valores enviados:', this.myForm.value);
      alert('Formulario enviado con éxito.');
    } else {
      this.myForm.markAllAsTouched();
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }
}