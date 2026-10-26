import { Component } from '@angular/core';
import Coche from '../../models/producto/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public arrayCoches: Array<Coche>;
  constructor(){
    this.arrayCoches = [
      new Coche("ford","focus",0,50),
      new Coche("vw","passat",0,60),
      new Coche("renoult","clio",0,50),
      new Coche("bmw","320d",0,50)
    ]
  }
}
