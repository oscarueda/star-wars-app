import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { PlanetaComponent } from './components/planeta/planeta.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NavesComponent } from './components/naves/naves.component';
import { NaveComponent } from './components/nave/nave.component';
import { SpeciesComponent } from './components/species/species.component';
import { SpecieComponent } from './components/specie/specie.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'personaje/:id',
    component: PersonajeComponent
  },
  {
    path: 'planetas',
    component: PlanetasComponent
  },
  {
    path: 'planeta/:id', 
    component: PlanetaComponent
  },
  {
    path: 'vehiculos',
    component: VehiculosComponent
  },
  {
    path: 'vehiculo/:id', 
    component: VehiculoComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'pelicula/:id', 
    component: PeliculaComponent
  },
  {
    path: 'naves',
    component: NavesComponent
  },
  {
    path: 'nave/:id', 
    component: NaveComponent
  },
  {
    path: 'species',
    component: SpeciesComponent
  },
  {
    path: 'specie/:id', 
    component: SpecieComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
