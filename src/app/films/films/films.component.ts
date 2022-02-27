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
  
  
  constructor(private getFilmsService: GetFilmsService) { }

  ngOnInit(): void {
    this.getFilmsService.filmsList.subscribe((filmList: Film[]) => this.films$ = filmList);
  } 
}
