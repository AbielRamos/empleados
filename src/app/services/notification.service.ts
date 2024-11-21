import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = 'https://api.tuaplicacion.com/notificaciones'; // Reemplaza con tu API real

  constructor(private http: HttpClient) {}

  getNotificaciones(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

