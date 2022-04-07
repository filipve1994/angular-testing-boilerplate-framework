import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Module } from './examples/example1/example1.module';
import { AppExampleModule } from './app-example/app-example.module';
import { PersonalProjectsModule } from '@modules/personal-projects/personal-projects.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Example1Module,
    AppExampleModule,
    //safe to delete, nothing todo with boilerplate stuff
    PersonalProjectsModule
  ],
  exports: [
    CommonModule,
    Example1Module,
    AppExampleModule,
    //safe to delete, nothing todo with boilerplate stuff
    PersonalProjectsModule
  ]
})
export class ModulesModule {}
