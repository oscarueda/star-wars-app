import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: [];

  constructor(private starWarsService: StarWarsService) { 

  }

  ngOnInit(): void {
    this.starWarsService.getPeliculas().subscribe(
        (data) => {
         console.log ('DATA: ', data);
         this.peliculas = data ['results'];
        }
   
    );

  }

  getId(url: string): string {
    console.log ();
    return url.split('/').slice(-2)[0];
  }

}
