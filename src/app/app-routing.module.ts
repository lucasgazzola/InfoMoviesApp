import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films/films.component';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'films'},
  {
    path: 'films/:id', 
    component: FilmDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'films', 
    component: FilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
