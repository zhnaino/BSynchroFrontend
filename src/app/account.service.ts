import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://localhost:7270/api/account';

  constructor(private http: HttpClient) {}

  openAccount(userId: number, initialDeposit: number): Observable<any> {
    const request = { userId, initialDeposit };
    return this.http.post(`${this.apiUrl}/open`, request);
  }

  getUserInfo(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/userinfo?userId=${userId}`);
  }
}