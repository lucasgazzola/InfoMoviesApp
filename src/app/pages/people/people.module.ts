import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class PeopleModule { }
