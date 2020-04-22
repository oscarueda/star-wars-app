import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: any[];

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.starWarsService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

}
