import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho-componente',
  templateUrl: './filho-componente.component.html',
  styleUrl: './filho-componente.component.css'
})
export class FilhoComponenteComponent {

  @Output() countIncremental = new EventEmitter<number>();

  count = 0;

  fCountIncremental(){
    this.count++;
    this.countIncremental.emit(this.count); /* emitindo o evento */
  }

}
