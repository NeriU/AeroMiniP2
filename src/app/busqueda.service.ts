import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http:HttpClient ) {
    
   }

   datos(){
    return this.http.get("https://restcountries.com/v2/lang/es");
   }
}
