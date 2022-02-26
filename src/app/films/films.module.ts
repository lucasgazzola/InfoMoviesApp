import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { FormsModule } from '@angular/forms';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilmsComponent,
    FilmItemComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class FilmsModule { }
