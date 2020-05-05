import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: any;
  next:string;
  previous:string;
  search: string;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.cargarPlanetas(`${environment.api}/planets`);
  }

  cargarPlanetas(url){
    console.log(url);
     this.starWarsService.getPlanetas(url).subscribe((planetas:any) => {
      console.log(planetas);
     this.next = planetas.next;
     this.previous = planetas.previous;
     this.planetas = planetas.results;
   });
   
   }

   buscar(){

    this.cargarPlanetas(`${environment.api}/planets/?search=${this.search}`);
  }

}
