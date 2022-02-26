import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent {
 
  @Input() films: Film[] = [];

  constructor() { }
}
