import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { People, PeopleResult } from "src/app/interfaces/interfaces";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})

export class GetPeopleService {
  private apiURL: string = `${environment.API_URL}?api_key=${environment.API_KEY}`
  private trendingPeopleURL: string = `${environment.API_URL}person/popular?api_key=${environment.API_KEY}&language=en-US&page=1`;
  private _people = new BehaviorSubject<People[]>([]);
  private _lastSearch = new BehaviorSubject<string>('');

  readonly people = this._people.asObservable();
  readonly lastSearch = this._lastSearch.asObservable();

  constructor(private http: HttpClient) { }

  updatePeopleSearch(search: string): void {
    this.http.get<PeopleResult>(this.apiURL + "&query=" + search)
      .subscribe({
        next: (data) => {
          this._people.next(data.results);
          this._lastSearch.next(search);
        },
        error: (error) => {
          console.log('Could not load films: ', error);
        }
      });
  }

  getTrendingFilms(): void {
    this.http.get<PeopleResult>(this.trendingPeopleURL)
      .subscribe({
        next: (data) => {
          this._people.next(data.results);
        },
        error: (error) => {
          console.log('Could not load films: ', error);
        }
      });
  }

  get peopleList(): Observable<People[]> {
    return this.people;
  }

  get lastSearchValue(): Observable<string> {
    return this.lastSearch;
  }
}