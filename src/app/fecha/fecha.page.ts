import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.page.html',
  styleUrls: ['./fecha.page.scss'],
})
export class FechaPage {
  selectedDate: string;
  pedidos = [
    { id: 1, cliente: 'Juan Pérez', total: 250.00 },
    { id: 2, cliente: 'María López', total: 300.50 },
    { id: 3, cliente: 'Carlos Gómez', total: 150.75 }
  ];

  constructor() {
    const today = new Date().toISOString().split('T')[0];
    this.selectedDate = today;
  }

  verDetalles(id: number) {
    console.log('Ver detalles del pedido:', id);
    // Aquí puedes implementar la lógica para navegar a la página de detalles del pedido
  }
}
