import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  paramId: number;
  pelicula: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }

  ngOnInit(): void {
    this.getParam();
    this.getPelicula();
  }

  getParam(): void {
      this.activatedRoute.paramMap.subscribe((params: Params) => {
      this.paramId = params.params.id;
    });
  }

  getPelicula() {
    this.starWarsService.getPelicula(this.paramId).subscribe((pelicula: any) => {
      this.pelicula = pelicula;
    });
  }

}
