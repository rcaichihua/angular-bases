import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{counter}}
  </h3>
  <button (click)="reset()">Reset</button>
  <button (click)="incrementar(+1)">+</button>
  <button (click)="decrementar(-1)">-</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 0;

  public incrementar(incre: number): void {
    this.counter += incre;
  }

  public decrementar(decre: number): void {
    this.counter -= decre;
  }

  public reset() {
    this.counter = 0;
  }
}
