import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetFilmsService } from '../../../pages/films/services/get-films.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  search: string = '';
  lastSearch!: string;
  constructor(private getFilmsService: GetFilmsService, private router: Router) { }

  ngOnInit(): void {
    this.getFilmsService.lastSearchValue.subscribe(search => this.lastSearch = search);
  }

  handleSubmit(): void {
    this.getFilmsService.updateFilmSearch(this.search);
    this.router.navigate(['/films']);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    this.search = '';
  }

}
