import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subscription } from 'rxjs/internal/Subscription';
import { People } from 'src/app/interfaces/interfaces';
import { GetPeopleService } from '../services/get-people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  search: string = '';
  people$!: People[];
  lastSearch!: string;
  visibility: 'hidden' | 'visible' = 'hidden';
  scroller!: Subscription;
  icon = faArrowAltCircleUp;

  constructor(private getPeopleService: GetPeopleService) { }

  ngOnInit(): void {
    this.scroller = fromEvent(window, 'scroll')
      .subscribe(() => this.handleVisibility(window.scrollY));
    this.getPeopleService.lastSearchValue.subscribe(search => this.lastSearch = search);
    this.getPeopleService.getTrendingFilms();
    this.getPeopleService.people.subscribe(people => this.people$ = people);
  }

  handleGoTop(): void {
    window.scrollTo(0, 0);
  }

  handleVisibility(y: number): void {
    this.visibility = y > 400 ? 'visible' : 'hidden';
  }

}
