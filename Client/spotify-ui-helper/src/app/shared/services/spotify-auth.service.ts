import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthService {
  readonly baseURL = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  loginToSpotify(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/login`);
  }
}
