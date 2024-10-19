import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './filas.component.html',
  styleUrl: './filas.component.css'
})
export class FilasComponent {

public Heroes:string[]=["Spiderman", "Loky", "Thor", "Hulk"];
public EliminarHerore?:string;

public BorrarHeroe():void{
this.EliminarHerore = this.Heroes.pop();
}

public Restaurar():void{
  this.Heroes=["Spiderman", "Loky", "Thor", "Hulk"];
}
}
