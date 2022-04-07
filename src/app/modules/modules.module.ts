import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Example1Module} from "./example1/example1.module";
import {AppExampleModule} from "./app-example/app-example.module";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    Example1Module,
    AppExampleModule
  ]
})
export class ModulesModule { }
