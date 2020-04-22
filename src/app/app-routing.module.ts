import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { PlanetaComponent } from './components/planeta/planeta.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
