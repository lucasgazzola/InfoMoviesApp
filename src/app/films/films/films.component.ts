import { Component, OnInit } from '@angular/core';

import { Film, Result } from 'src/app/interfaces/interfaces';

import {GetFilmsService} from '../../services/get-films.service';


@Component({
  selector: 'app-film',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {
  search: string = '';
  films!: Film[];

  constructor(private getFilmsSvs: GetFilmsService) { }

  ngOnInit(): void { }

  handleSubmit(value: string) {
    this.getFilmsSvs.getFilms(value).subscribe(res => this.films = res)
  }

}
