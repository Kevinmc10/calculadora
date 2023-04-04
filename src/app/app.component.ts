import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numero1: number;
  numero2: number;
  resultado: number;

  onSuma(): void {
    this.resultado = this.numero1 + this.numero2;
  }
  onResta(): void {
    this.resultado = this.numero1 - this.numero2;
  }
  onMultiplicacion(): void {
    this.resultado = this.numero1 * this.numero2;
  }
  onDivision(): void {
    this.resultado = this.numero1 / this.numero2;
  }
  //onUno():void  {
  //this.numero1 = 1 ;
  //}
}
