import { Component, OnInit } from '@angular/core';

import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/Cita';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  citas: Cita[] = [];

  constructor(
    private _citaService: CitaService
  ) { }

  ngOnInit(): void {
    this.citas = this._citaService.citas;
    console.log(this.citas);
  }

  delete(index: number): void {
    this._citaService.deleteCita(index);
  }

}
