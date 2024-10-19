import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"

import { HeroesComponent } from "./heroes/heroes.component";
import { FilasComponent } from "./filas/filas.component";
;

@NgModule({
    declarations: [
        HeroesComponent,
        FilasComponent
    ],
    exports:[
        HeroesComponent,
        FilasComponent
    ],
    imports:[
        CommonModule
    ]
})
export class superheroesmodulos{}