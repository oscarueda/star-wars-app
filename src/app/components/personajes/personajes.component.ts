import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any[];

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.starWarsService.getPersonajes().subscribe(personajes => {
      this.personajes = personajes;
    });
  }

}
