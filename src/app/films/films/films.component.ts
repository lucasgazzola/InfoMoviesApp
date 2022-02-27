import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Film, Result } from 'src/app/interfaces/interfaces';

import {GetFilmsService} from '../../services/get-films.service';


@Component({
  selector: 'app-film',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {
  search: string = '';
  films$!: Film[];
  lastSearch$!: string;
  
  constructor(private getFilmsService: GetFilmsService) { }

  ngOnInit(): void {
    console.log(this.lastSearch$);
    this.getFilmsService.filmsList.subscribe((filmList: Film[]) => this.films$ = filmList);
    this.getFilmsService.lastSearchValue.subscribe(search => this.lastSearch$ = search);
  }

  handleSubmit(): void {
    this.getFilmsService.updateFilmSearch(this.search);
    this.search = '';
  }
}
