import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  paramId: number;
  planeta: any;

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
    this.starWarsService.getPlaneta(this.paramId).subscribe((planeta: any) => {
      console.log('planeta',planeta);
      
      this.planeta = planeta;
    });
  }

}
