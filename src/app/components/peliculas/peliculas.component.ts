import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: any[] = [];
  next:string;
  previous:string;
  search: string;

  constructor(private starWarsService: StarWarsService) { 

  }

  ngOnInit(): void {
    
   this.cargarPeliculas(`${environment.api}/films`);

  }

  getId(url: string): string {
    console.log ();
    return url.split('/').slice(-2)[0];
  }

  cargarPeliculas(url){
    console.log(url);
     this.starWarsService.getPeliculas(url).subscribe((peliculas:any) => {
       console.log(peliculas);
     this.next = peliculas.next;
     this.previous = peliculas.previous;
     this.peliculas = peliculas.results;
   });
   
   }

   buscar(){

    this.cargarPeliculas(`${environment.api}/films/?search=${this.search}`);
  }

}
