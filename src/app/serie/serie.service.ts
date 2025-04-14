import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from './serie';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl = environment.baseUrl + 'series.json';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

  getAverage(): Observable<number> {
    return this.getSeries().pipe(
      map(series => {
        let total = 0;
        for (const serie of series) {
          total += serie.seasons; 
        }
        return total / series.length;
      })
    );
  }
}