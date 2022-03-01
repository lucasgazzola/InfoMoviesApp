import { Component, OnInit } from '@angular/core';

import { Film } from 'src/app/interfaces/interfaces';

import {GetFilmsService} from '../../services/get-films.service';


@Component({
  selector: 'app-film',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {
  search: string = '';
  films$!: Film[];
  lastSearch!: string;
  
  
  constructor(private getFilmsService: GetFilmsService) { }

  ngOnInit(): void {
    this.getFilmsService.lastSearchValue.subscribe(search => this.lastSearch = search);
    this.getFilmsService.getTrendingFilms();
    this.getFilmsService.films.subscribe(films => this.films$ = films);
  } 
}
