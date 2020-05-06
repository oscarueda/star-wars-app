import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  paramId: number;
  nave: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }

  ngOnInit(): void {
    this.getParam();
    this.getNave();
  }

  getParam(): void {
      this.activatedRoute.paramMap.subscribe((params: Params) => {
      this.paramId = params.params.id;
    });
  }

  getNave() {
    this.starWarsService.getNave(this.paramId).subscribe((nave: any) => {
      this.nave = nave;
    });
  }

}
