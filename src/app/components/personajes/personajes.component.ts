import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any[];
  next:string;
  previous:string;
  search: string;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.cargarPersonajes(`${environment.api}/people`);
  }

 cargarPersonajes(url){
   console.log(url);
    this.starWarsService.getPersonajes(url).subscribe((personajes:any) => {
      console.log(personajes);
    this.next = personajes.next;
    this.previous = personajes.previous;
    this.personajes = personajes.results;
  });
  
  }

  buscar(){

    this.cargarPersonajes(`${environment.api}/people/?search=${this.search}`);
  }

}
