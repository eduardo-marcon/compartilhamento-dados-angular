import { Component } from '@angular/core';

@Component({
  selector: 'app-pai-componente',
  templateUrl: './pai-componente.component.html',
  styleUrl: './pai-componente.component.css'
})
export class PaiComponenteComponent {
  
  countFather = 0;

  updateCount(value: number){
    this.countFather = value;
  }
}
