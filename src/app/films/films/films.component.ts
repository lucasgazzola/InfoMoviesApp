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
  films = this.getFilmsService.filmsList;

  constructor(private getFilmsService: GetFilmsService) { }

  ngOnInit(): void {
    this.getFilmsService.updateFilmSearch(this.search);
  }

  handleSubmit(): void {
    this.getFilmsService.updateFilmSearch(this.search);
  }

}
