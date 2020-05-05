import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  [x: string]: any;

  constructor(private httpClient: HttpClient) { }

  getPersonajes(url) {
    return this.httpClient.get(url);
  }


  getPlanetas(url) {
    return this.httpClient.get(url);
  }

  getVehiculos(url) {
    return this.httpClient.get(url);
  }

  getPeliculas(url) {
    return this.httpClient.get(url);
  }

  getPersonaje(id: number) {
    return this.httpClient.get(`${environment.api}/people/${id}`);
  }

  getPlaneta(id: number) {
    return this.httpClient.get(`${environment.api}/planets/${id}`);
  }

  getVehiculo(id: number) {
    return this.httpClient.get(`${environment.api}/vehicles/${id}`);
  }

  getPelicula(id: number) {
    return this.httpClient.get(`${environment.api}/films/${id}`);
  }
}
