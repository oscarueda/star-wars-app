import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PlanetasComponent } from './components/planetas/planetas.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
