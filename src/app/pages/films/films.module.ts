import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './components/films/films.component';
import { FormsModule } from '@angular/forms';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
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