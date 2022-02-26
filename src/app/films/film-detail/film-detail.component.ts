import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})


export class FilmDetailComponent implements OnInit {

//   films!: Observable<Film[]>;
  
//   id:number | undefined;
//   constructor(private route: ActivatedRoute, private films$: Observable<Film[]>) { }

  ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       this.id = params["id"];
//     });

//     console.log(this.id)
//     console.log(this.films)
  }
}
