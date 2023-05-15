import { Component } from '@angular/core';

@Component({
  selector: 'app-citasregistradas',
  templateUrl: './citasregistradas.component.html',
  styleUrls: ['./citasregistradas.component.css']
})
export class CitasregistradasComponent{
  vuelosLocal:any;
  ngOnInit(){
    if(localStorage.length>0){
      console.log("Ya habian valores de local storage");

      this.vuelosLocal = JSON.parse(localStorage.getItem('Vuelos') || '{}');
      console.log(this.vuelosLocal);
      localStorage.setItem('Vuelos', JSON.stringify(this.vuelosLocal));

   }else{
     //local storage
     console.log("No hay respuesta");
    }
  }


}
