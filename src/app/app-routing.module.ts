import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './pages/films/components/films/films.component';
import { FilmDetailComponent } from './pages/films/components/film-detail/film-detail.component';
import { PeopleComponent } from './pages/people/people/people.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'films' },
  {
    path: 'films/:id',
    component: FilmDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'people',
    component: PeopleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
