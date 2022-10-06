import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  formularioCreado!: FormGroup

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.formularioCreado = this.formBuilder.group({
      nombre : ['', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    })
  }

}
