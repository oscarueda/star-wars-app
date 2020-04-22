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

  getPersonaje(id: number) {
    return this.httpClient.get(`${environment.api}/people/${id}`);
  }
}
