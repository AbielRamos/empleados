import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probedores',
  templateUrl: './probedores.page.html',
  styleUrls: ['./probedores.page.scss'],
})
export class ProbedoresPage implements OnInit {

  proveedor: any;
  producto: string;
  fecha: string;

  constructor() {
    // Asigna valores de ejemplo. Deberías obtener estos valores de tu servicio o fuente de datos.
    this.proveedor = { nombre: 'Proveedor Ejemplo' };
    this.producto = 'Producto Ejemplo';
    this.fecha = '2024-11-11';
  }

  ngOnInit() {
  }

}
