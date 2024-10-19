import { Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h2>contador:{{contador}}</h2>

    <button (click)="incrementar(+1)">+1</button>
    <button (click)="reinicio()">reinicio</button>
    <button (click)="incrementar(-1)">-1</button>
    `
})

export class CounterComponent{
    public contador:number = 5;

    incrementar(valor:number):void{
      this.contador += valor;
    }
  
    reinicio():void{
      this.contador = 5;
    }
}
