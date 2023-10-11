import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  openAlert: boolean = false;



  mostrarEnConsola(firstName: string) {
    this.openAlert = true;
    console.log(firstName);
    setTimeout(() => this.openAlert = false, 2000);
  };
}
