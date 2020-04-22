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
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
