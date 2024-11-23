import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) {}

  getNotificaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/pedidos`);
  }
}
