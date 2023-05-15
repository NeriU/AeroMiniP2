import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  data: any;
  datoind: any;
  nom: string = "";

  constructor(private busqueda: BusquedaService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nom = params['valor'];
    });
    this.recupedatos(this.nom);
  }

  recupedatos(inve: string) {
    this.busqueda.datos().subscribe((resultado: any) => {
      this.data = resultado;
      console.log(this.data);
      for (let dato of this.data) {
        if (dato.name === inve) {
          this.datoind = dato;
          console.log(this.datoind);

        }
      }
    },

      (err: HttpErrorResponse) => {

        if (err.error instanceof Error) {

          console.log("Client-side error");

        } else {

          console.log("Server-side error");
        }
      });
  }
}
