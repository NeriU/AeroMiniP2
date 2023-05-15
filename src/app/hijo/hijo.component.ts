import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  texto: string="Si lo que buscas son experiencias nuevas no lo dudes y visita este maravilloso";
  @Output()
  eventoHijo = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  enviarPadre() {
    
    this.eventoHijo.emit("En Japón, muchas aguas termales y onsen están prohibidos para aquellos clientes que lleven tatuajes. Estos recuerdan a la mafia japonesa, cuyos miembros llevan el cuerpo completamente tatuado. ")
  }
}
