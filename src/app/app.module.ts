import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagenCardComponent } from './components/shared/imagen-card/imagen-card.component';
import { MainContainerComponent } from './components/shared/main-container/main-container.component';
import { TituloPrincipalComponent } from './components/shared/titulo-principal/titulo-principal.component';
import { ContainerComponent } from './components/shared/container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { PlanetaComponent } from './components/planeta/planeta.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NaveComponent } from './components/nave/nave.component';
import { NavesComponent } from './components/naves/naves.component';
import { SpeciesComponent } from './components/species/species.component';
import { SpecieComponent } from './components/specie/specie.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    InicioComponent,
    NavbarComponent,
    ImagenCardComponent,
    MainContainerComponent,
    TituloPrincipalComponent,
    ContainerComponent,
    PersonajeComponent,
    PlanetasComponent,
    PlanetaComponent,
    VehiculosComponent,
    VehiculoComponent,
    PeliculasComponent,
    PeliculaComponent,
    FooterComponent,
    NaveComponent,
    NavesComponent,
    SpeciesComponent,
    SpecieComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
