import { Component, Input } from '@angular/core';
import Coche from '../../models/producto/coche';

@Component({
  selector: 'app-hijo-coche-component',
  standalone: false,
  styleUrl: './hijo-coche-component.css',
  templateUrl: './hijo-coche-component.html',
})
export class HijoCocheComponent {
  @Input() public car!: Coche;
  
  constructor(){
    //this.car = new Coche("Ford", "Mustang", 0, 5);
  }
  acelerarCoche() : void{
this.car.velocidad += this.car.aceleracion;
  }
  frenarCoche() : void{
    this.car.velocidad -= this.car.aceleracion;
    if(this.car.velocidad < 0){
      this.car.velocidad = 0;
    }
  }


}
