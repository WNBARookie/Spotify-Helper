import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { SongSearchResult } from 'src/app/features/song-info/interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiActionService {
  baseURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getUserProfileInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/getUserProfile`);
  }

  getTrack(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/getTrack/${id}`);
  }

  getAudioAnalysis(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/getAudioFeatures/${id}`);
  }

  searchForTracks(term: string): Observable<SongSearchResult[]> {
    return this.http.get<any>(`${this.baseURL}/searchForTracks/${term}`);
  }
}
