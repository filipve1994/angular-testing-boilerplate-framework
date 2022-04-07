import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WrapperExample1Component} from "./modules/example1/wrapper-example1/wrapper-example1.component";
import {AppExampleComponent} from "./modules/app-example/app-example/app-example.component";

const routes: Routes = [
  {
    path: '',
    component: AppExampleComponent
  },
  {
    path: 'example1',
    component: WrapperExample1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
