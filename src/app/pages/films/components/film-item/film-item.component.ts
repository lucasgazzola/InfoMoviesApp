import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/interfaces/interfaces';
import { GetFilmsService } from '../../services/get-films.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent {
 
  films!: Observable<Film[]>;

  constructor(private getFilmsService: GetFilmsService) { }

  ngOnInit(): void {
    this.films = this.getFilmsService.filmsList
  }
}
