import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: any;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.starWarsService.getPlanetas().subscribe(planetas => {
      console.log('planetas', planetas);

      this.planetas = planetas;
    });
  }

}
