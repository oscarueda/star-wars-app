import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: any[];
  next:string;
  previous:string;
  search: string;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.cargarVehiculos(`${environment.api}/vehicles`);
  }

  cargarVehiculos(url){
    console.log(url);
     this.starWarsService.getVehiculos(url).subscribe((vehiculos:any) => {
       console.log(vehiculos);
     this.next = vehiculos.next;
     this.previous = vehiculos.previous;
     this.vehiculos = vehiculos.results;
   });
   
   }

   buscar(){

    this.cargarVehiculos(`${environment.api}/vehicles/?search=${this.search}`);
  }

}
