import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, tap, Observable } from 'rxjs';
import { Film, Result } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class GetFilmsService {
  private apiURL = `${environment.API_URL}?api_key=${environment.API_KEY}&query=`
  private _films = new BehaviorSubject<Film[]>([]);

  readonly films = this._films.asObservable();
  
  constructor(private http: HttpClient) { }

  updateFilmSearch(search: string): void {
    this.http.get<Result>(this.apiURL+search)
    .subscribe({
      next: (data) => {
        this._films.next(data.results);
      },
      error : (error) => {
        console.log('Could not load films: ', error);
    }});
  }
  
  get filmsList(): Observable<Film[]>{
    return this.films;
  }

}

