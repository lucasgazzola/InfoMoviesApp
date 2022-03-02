import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, Subscription } from 'rxjs';

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
  visibility: 'hidden' | 'visible' = 'hidden';
  scroller!: Subscription;
  icon = faArrowAltCircleUp;
   
  constructor(private getFilmsService: GetFilmsService) { }

  ngOnInit(): void {
    this.scroller = fromEvent(window, 'scroll')
      .subscribe(() => this.handleVisibility(window.scrollY));
    this.getFilmsService.lastSearchValue.subscribe(search => this.lastSearch = search);
    this.getFilmsService.getTrendingFilms();
    this.getFilmsService.films.subscribe(films => this.films$ = films);
  } 

  handleGoTop():void{
    window.scrollTo(0,0);
  }

  handleVisibility(y: number): void {
    this.visibility = y > 400 ? 'visible' : 'hidden';
  }
}
