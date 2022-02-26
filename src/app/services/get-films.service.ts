import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, Observable, tap } from 'rxjs';
import { Film, Result } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class GetFilmsService {
  private apiURL = `${environment.API_URL}?api_key=${environment.API_KEY}&query=`
  
  constructor(private http: HttpClient) { }

  getFilms(search: string): Observable<Film[]> {
    return this.http.get<Result>(this.apiURL+search)
    .pipe(
      map(item => item.results),
      tap(_ => console.log("fetched films"))
    );
  }

}

