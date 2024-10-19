import { NgModule } from "@angular/core";
import { CounterComponent } from "./componentes/counter-componentes";

@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[
        CounterComponent
    ]
})
export class conunterModule{}