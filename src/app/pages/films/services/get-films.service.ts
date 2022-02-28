import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film, Result } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class GetFilmsService {
  private apiURL: string = `${environment.API_URL}?api_key=${environment.API_KEY}`
  private trendingURL :string = `https://api.themoviedb.org/3/trending/movie/week?api_key=${environment.API_KEY}`
  private _films = new BehaviorSubject<Film[]>([]);
  private _lastSearch = new BehaviorSubject<string>('');

  readonly films = this._films.asObservable();
  readonly lastSearch = this._lastSearch.asObservable();
  
  constructor(private http: HttpClient) { }

  updateFilmSearch(search: string): void {
    this.http.get<Result>(this.apiURL+"&query="+search)
    .subscribe({
      next: (data) => {
        this._films.next(data.results);
        this._lastSearch.next(search);
      },
      error : (error) => {
        console.log('Could not load films: ', error);
    }});
  }

  getTrendingFilms():void{
    this.http.get<Result>(this.trendingURL)
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

  get lastSearchValue(): Observable<string>{
    return this.lastSearch;
  }
}

