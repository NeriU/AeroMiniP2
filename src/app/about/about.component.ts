import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  clases = ['color-fondo color-fuente tamannyo-fuente border-margin']; 

  datos: personas[] =[ 
    {nom: "VIP", id: 15, cod:"negro", beb:"Mini-Bar", ba:"2"},
    {nom: "Ejecutivo", id: 20, cod:"gris", beb:"Whisky, Vino, Champagne", ba:"2"},
    {nom: "Media", id: 35, cod:"beige", beb:"Vino, Cerveza", ba:"2"},
    {nom: "Turista", id: 35, cod:"blanco", beb:"Cerveza", ba:"2"}
  ];
}

interface personas {
  nom: string;
  id: number;
  cod: string;
  beb: string;
  ba: string;
}