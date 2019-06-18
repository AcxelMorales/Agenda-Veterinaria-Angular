import { Injectable } from '@angular/core';

import { Cita } from '../models/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  citas: Cita[] = [];

  constructor() {
    this.getLocalStorage();
  }

  crearCita(cita: Cita): void {
    this.citas.push(cita);
    this.saveLocalStorage();
  }
  
  saveLocalStorage(): void {
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

  getLocalStorage(): void {
    if (localStorage.getItem('citas')) {
      this.citas = JSON.parse(localStorage.getItem('citas'));
    } else {
      this.citas = [];
    }
  }

  deleteCita(index: number): void {
    this.citas.splice(index, 1);
    this.saveLocalStorage();
  }

}
