import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppExampleComponent } from './app-example/app-example.component';



@NgModule({
  declarations: [
    AppExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AppExampleComponent]
})
export class AppExampleModule { }
