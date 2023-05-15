import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DomseguroPipe } from './domseguro.pipe';
import { NavbarModule } from './navbar/navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { HttpClientModule } from '@angular/common/http';
import { TablasComponent } from './tablas/tablas.component';
import { CreditosComponent } from './creditos/creditos.component';
import { MasonryComponent } from './masonry/masonry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RegistrocComponent } from './registroc/registroc.component';
import { HijoComponent } from './hijo/hijo.component';
import { CitasregistradasComponent } from './citasregistradas/citasregistradas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DomseguroPipe, 
    AboutComponent,
    BusquedaComponent,
    CreditosComponent,
    MasonryComponent,
    TablasComponent,
    RegistrocComponent,
    HijoComponent,
    CitasregistradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    ImageModule,
    PanelModule,
    ProgressSpinnerModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
