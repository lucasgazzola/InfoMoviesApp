import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmByID } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})


export class FilmDetailComponent implements OnInit {

  film!: FilmByID;
  id!:number;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getFilmById();
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    }); 
  }

  async getFilmById(): Promise<void>{
    await this.http.get<FilmByID>(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${environment.API_KEY}`)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.film = data;
      },
      error : (error) => {
        console.log('Could not load films: ', error);
    }});
    console.log(this.film);
  }
}
