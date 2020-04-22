import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  paramId: number;
  vehiculo: any;

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
    this.starWarsService.getVehiculo(this.paramId).subscribe((vehiculo: any) => {
      console.log('planeta',vehiculo);
      
      this.vehiculo = vehiculo;
    });
  }
}
