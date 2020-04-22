import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  paramId: number;
  personaje: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }

  ngOnInit(): void {
    this.getParam();
    this.getPersonaje();
  }

  getParam(): void {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      this.paramId = params.params.id;
    });
  }

  getPersonaje() {
    this.starWarsService.getPersonaje(this.paramId).subscribe((personaje: any) => {
      this.personaje = personaje;
    });
  }
}
