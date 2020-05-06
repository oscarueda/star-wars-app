import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  paramId: number;
  specie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }

  ngOnInit(): void {
    this.getParam();
    this.getSpecie();
  }

  getParam(): void {
      this.activatedRoute.paramMap.subscribe((params: Params) => {
      this.paramId = params.params.id;
    });
  }

  getSpecie() {
    this.starWarsService.getSpecie(this.paramId).subscribe((specie: any) => {
      this.specie = specie;
    });
  }

}
