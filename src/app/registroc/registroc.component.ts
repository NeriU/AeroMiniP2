import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registroc',
  templateUrl: './registroc.component.html',
  styleUrls: ['./registroc.component.css']
})

export class RegistrocComponent implements OnInit {
  reservacion: any;
  constructor(private formBuilder: FormBuilder) { }

  //variables globales
  contador: number = 0;
  ahora: any; //fecha actual
  totalPagar: number = 4300;//total a pagar
  horas: string[] = ["6:00"];
  destinos: string[] = ["Japon", "Rusia", "Canada", "Somalia", "Australia"]
  vuelosComprados: string[] = [];
  fechasRestringidas: string[] = [];
  fechaError: string = "";
  horasOcupadas: string[] = [];
  asientosDisponibles: number = 20;
  asientoslibres: number = 20;
  asientosOcupados: number[][] = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
  indice: number = 0;
  asientosIndice: number = 0;
  fechas: string[] = [];




  //variables que deben de ir en una interface
  diaElegido: any; //dia elegido
  pais: string = "Japon"; //pais seleccionado
  hora: string = "6:00"//hora seleccionada
  asientosc: number = 1;//asientos comprados



  band: Boolean = false;




  vuelos: boleto[] = [];
  vuelo: boleto = {
    diaElegido: "", pais: "", hora: "", asientos: 1, totalPago: 0
  };




  ngOnInit() {
    const datePipe = new DatePipe('en-Us');
    this.ahora = datePipe.transform(new Date(), 'yyyy-MM-dd') //obtiene la fecha en la que nos encontramos, se usa para poner como limite minimo a la hora de elegir una fecha
    this.asientoslibres = 20;
    this.diaElegido = this.ahora
    this.vuelo.diaElegido = this.diaElegido;
    this.vuelo.pais = "Japon";
    this.vuelo.hora = this.horas[0];
    //console.log(this.diaElegido); 
    this.reservacion = this.formBuilder.group({
      // nombre: new FormControl('',[Validators.required]),
      // apellido: new FormControl('',[Validators.required]),
      diaElegido: new FormControl('', [Validators.required, this.cupollenoo(this.fechasRestringidas)]),
      paisselec: new FormControl(this.pais, null),
      horaselec: new FormControl(this.hora, null),
      asientos: new FormControl(this.asientosc, [this.asientosOc(this.asientosc)]),
    });
    //local storage
    if (localStorage.length > 0) {
      console.log("Ya habian valores de local storage");



      let vuelosLocal = JSON.parse(localStorage.getItem('Vuelos') || '{}');
      console.log(vuelosLocal);
      localStorage.setItem('Vuelos', JSON.stringify(vuelosLocal));



    } else {
      //local storage
      localStorage.setItem('Vuelo', JSON.stringify(this.vuelo));
      localStorage.setItem('Vuelos', JSON.stringify(this.vuelos[0]));
    }




  }
  //pone el limite de no escoger fechas hacia atras
  validarFecha() {
    this.contador = 0;



    this.vuelo.diaElegido = this.diaElegido;
    console.log("validarFecha:" + this.diaElegido);
    let bandera = true;
    for (let i = 0; i <= this.fechas.length; i++) {
      if (this.fechas[i] == this.diaElegido) {
        bandera = false
      } else {
        bandera = true;
      }
    }



    if (bandera == true) {
      this.fechas.push(this.diaElegido);
      console.log(this.fechas)
      console.log(this.asientosOcupados)
      this.asientosIndice++;
      console.log("se ha reportado una nueva fecha")
    } else {
      console.log("No hay nuevas fechas")
    }
  }
  //aseguramos que se muestre el pais seleccionado
  paisSeleccionado() {
    this.contador = 0;
    console.log(this.pais);
    switch (this.pais) {
      case "Japon": {
        //statements; 
        this.indice = 0;
        break;
      }
      case "Rusia": {
        //statements; 
        this.indice = 1;
        break;
      } case "Canada": {
        //statements; 
        this.indice = 2;
        break;
      } case "Somalia": {
        //statements; 
        this.indice = 3;
        break;
      } case "Australia": {
        //statements; 
        this.indice = 4;
        break;
      }
      default: {
        //statements; 
        this.indice = 0;
        this.vuelo.pais = "Japon";



        break;
      }
    }
    console.log(this.indice)
    this.vuelo.pais = this.pais;
    if (this.asientosOcupados[this.asientosIndice][this.indice] == 20) {
      this.asientosc = 0;
    } else {
      this.asientosc = 1;
      this.asientoslibres = 20 - this.asientosOcupados[this.asientosIndice][this.indice];
    }
  }
  //aseguramos que se muestre la hora seleccionada
  horaSeleccionada() {
    console.log(this.hora);
    this.vuelo.hora = this.hora;
  }



  //almacena todo los datos del formulario en un json
  guardarCambios(): void {
    this.contador = 1;
    this.asientosOcupados[this.asientosIndice][this.indice] += this.asientosc;  //vamos agregando los asientos que se ocupan
    //vemos que las fechas no sean iguales

    if (this.asientosOcupados[this.asientosIndice][this.indice] == 20) { //si los asientos estan totalmente ocupados, entonces mandamos esta fecha al vector de fechas que ya no se pueden elegir
      this.fechasRestringidas.push(this.diaElegido);
     // this.asientosc = 0;
    }
    this.asientoslibres = this.asientosDisponibles - this.asientosOcupados[this.asientosIndice][this.indice];
    //registramos los vuelos
    console.log("metodo guardarCambios");
    this.vuelosComprados.push(this.pais);



    //this.fechasRestringidas.push(this.diaElegido);
    this.horasOcupadas.push(this.hora)
    //mostramos que se hayan registrado
    console.log("Datos del vuelo:");
    console.log("Destino: " + this.vuelosComprados);
    console.log("Fecha: " + this.fechasRestringidas);
    console.log("Hora:" + this.horasOcupadas);



    //vaciamos los datos a la niterface
    this.vuelo.diaElegido = this.diaElegido;
    this.vuelo.asientos = this.asientosc; //registramos los asientos
    this.vuelo.pais = this.pais; //registramos el pais al que viaja
    this.vuelo.hora = this.hora; //registramos la hora en que viaja
    this.vuelo.totalPago = this.totalPagar;



    //hacemos el push al vetor vuelos
    console.log(this.vuelo);
    this.vuelos.push(this.vuelo);
    console.log(this.vuelos)

    //mostramos los datos en JSON
    console.log(this.reservacion);
    console.log(this.reservacion.value);
    //this.reservacion.reset(this.reservacion);
    console.log(this.vuelo)
    localStorage.setItem("Vuelo", JSON.stringify(this.vuelo));
    localStorage.setItem("Vuelos", JSON.stringify(this.vuelos));



    this.vuelo = new boleto();
    console.log(this.vuelo)



    if (this.asientosOcupados[this.asientosIndice][this.indice] == 20) {
      this.asientosc = 0;
    } else {
      this.asientosc = 1;
      this.totalPagar = 4300;
    }
  }

  //calcula el precio total a pagar
  calcularPrecio() {
    this.totalPagar = 4300;
    this.totalPagar = this.totalPagar * this.asientosc;
    this.vuelo.totalPago = this.totalPagar;
    this.contador = 0;
  }



  cupollenoo(limit: string[]) {
    return (control: AbstractControl) => {




      let band: Boolean = false;
      let fechasInvalidas = this.fechasRestringidas;
      for (let i = 0; i <= fechasInvalidas.length; i++) {
        if (control.value == fechasInvalidas[i]) {
          this.fechaError = control.value;
          band = false;
          this.asientosc = 0;
          break;
        } else {
          band = true;
        }
      }
      if (band == true) {
        console.log("no hubo error en")
        console.log("Validacion cupollenoo:" + control.value);

        return null;

      } else  //si pasa aca se muestra el mensaje
        return { cupollenoo: true }

    }

  }



  asientosOc(limit: number) {
    return (control: AbstractControl) => {
      if (this.asientosOcupados[this.asientosIndice][this.indice] == 20) {
        this.asientosc = 0;
      }



      console.log("asientos solicitados:" + control.value);
      console.log("asientos ocupados: " + this.asientosOcupados[this.asientosIndice][this.indice]);
      if (control.value == 0) {
        this.band = false;
        console.log("mamaste")
      } else {
        this.band = true;
      }
      if (this.band == true) {
        console.log("Los asientos que aun quedan disponibles para este vuelo son: " + this.asientoslibres);
        return null;
      } else {
        this.asientosc = 1
        return { asientosOc: true }
      }  //si pasa aca se muestra el mensaje 
    }
  }
}




class boleto {
  //variables que deben de ir en una interface
  diaElegido: string = ""; //dia elegido
  pais: string = ""; //pais seleccionado
  hora: string = ""//hora seleccionada
  asientos: number = 1;//asientos comprados
  totalPago: number = 0;
}
