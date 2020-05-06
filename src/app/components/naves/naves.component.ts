import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  naves: any[] = [];
  next:string;
  previous:string;
  search: string;

  constructor(private starWarsService: StarWarsService) { 

  }

  ngOnInit(): void {
    
   this.cargarNaves(`${environment.api}/starships`);

  }

  getId(url: string): string {    
    return url.split('/').slice(-2)[0];
  }

  cargarNaves(url){    
     this.starWarsService.getApiData(url).subscribe((naves:any) => {       
      this.next = naves.next;
      this.previous = naves.previous;
      this.naves = naves.results;
    });   
   }

   buscar(){
    this.cargarNaves(`${environment.api}/starships/?search=${this.search}`);
  }

}
