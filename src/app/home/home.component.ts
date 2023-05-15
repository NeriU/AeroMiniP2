import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clases = ['color-fuente color-fondo tamannyo-fuente border-margin']; 

  video='aIbYBP6gLi4';
  videoo='hK1zOEucU0w';

  mensajeHijo:string="";
  
  constructor() { }
  ngOnInit(): void {
  }
  
  onMensajeHijo(mensaje:any) {
   this.mensajeHijo=mensaje;
  }



  
}

