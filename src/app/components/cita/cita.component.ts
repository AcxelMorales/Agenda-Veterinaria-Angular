import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { Cita } from 'src/app/models/Cita';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styles: []
})
export class CitaComponent implements OnInit {

  form: FormGroup; 

  constructor(
    private _citaService: CitaService
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      dueno: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
      hora: new FormControl(null, Validators.required),
      sintomas: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
  }

  public save(form: NgForm): void {
    if (form.invalid) return;
    
    let cita = new Cita(
      this.form.value.nombre,
      this.form.value.dueno,
      this.form.value.fecha,
      this.form.value.hora,
      this.form.value.sintomas,
    );

    this._citaService.crearCita(cita);

    form.reset();
  }

}
