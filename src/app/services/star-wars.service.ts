import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private httpClient: HttpClient) { }

  getPersonajes() {
    return this.httpClient.get(`${environment.api}/people`).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }

  getPlanetas() {
    return this.httpClient.get(`${environment.api}/planets`).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }

  getVehiculos() {
    return this.httpClient.get(`${environment.api}/vehicles`).pipe(
      map((response: any) => {                
        return response.results;
      })
    );
  }

  getPeliculas() {
    return this.httpClient.get(`${environment.api}/films`);
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
}
