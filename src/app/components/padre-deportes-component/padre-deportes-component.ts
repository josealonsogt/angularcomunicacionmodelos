import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public deportes:  Array<string>;
  public mensaje!: string;

  //UN METODO PARA ENVIAR
  seleccionarFavoritoPadre(event: string):void{
    console.log("leyendo padre")
    this.mensaje = "Su deporte favorito es: " + event;
  }

  constructor(){
    this.deportes = ["futbol","MMA","tenis","boxeo"]
  }
}
