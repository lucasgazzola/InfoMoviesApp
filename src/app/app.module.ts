import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsModule } from './films/films.module';
import { HeaderComponent } from './shared/components/header/header.component';
import {  HttpClientModule } from '@angular/common/http';
import { SearcherComponent } from './shared/components/searcher/seacher.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
