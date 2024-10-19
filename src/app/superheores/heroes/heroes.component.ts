import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  public  nombre:string= "Batman";
  public edad:number=25;


  public getdescripcion():string{
    return `${this.nombre} - ${this.edad}`;
  }


  public CambiarNombre():void{
    this.nombre="Spierman";
  }

  public CambiarEdad():void{
    this.edad=45;
  }

  public restaurar():void{
    this.nombre="Batman";
    this.edad=25;
  }
}

