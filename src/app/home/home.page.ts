import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pedidos: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotificaciones().subscribe(data => {
      this.pedidos = data;
    });
  }

  verDetallesPedido(pedido: any) {
    // Aquí puedes manejar la lógica para ver más detalles del pedido si es necesario
    console.log('Detalles del pedido:', pedido);
  }
}


