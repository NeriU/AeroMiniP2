import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  val: string = "";
  forma!: FormGroup;

  constructor(private route: Router, private cdRef: ChangeDetectorRef) {
    this.forma = new FormGroup({
      "search": new FormControl(' ',  [Validators.required])

        
    })
  }

  guardarCambios(): void {
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
  }

  Comienza(buscar: string) {

    if (buscar != '') {

      // se manda por medio del route el parametro de la busqueda

      this.route.navigate(['busqueda/' + buscar]);

      this.cdRef.markForCheck();

    } else {

      this.route.navigate(['']);

    }


  }

}
