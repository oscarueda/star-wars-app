import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: any[] = [];
  next:string;
  previous:string;
  search: string;

  constructor(private starWarsService: StarWarsService) { 

  }

  ngOnInit(): void {  
   this.cargarSpecies(`${environment.api}/species`);    
  }

  getId(url: string): string {    
    return url.split('/').slice(-2)[0];
  }

  cargarSpecies(url){    
     this.starWarsService.getApiData(url).subscribe((species:any) => {       
       console.log('species', species);
       
      this.next = species.next;
      this.previous = species.previous;
      this.species = species.results;
    });   
   }

   buscar() {
    this.cargarSpecies(`${environment.api}/species/?search=${this.search}`);
  }

}
