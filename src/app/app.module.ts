import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CoreModule} from "./core/core.module";
import {ModulesModule} from "./modules/modules.module";
import {PagesModule} from "./pages/pages.module";
import {SharedModule} from "./shared/shared.module";
import {UtilsModule} from "./utils/utils.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    FontAwesomeModule,

    // My own modules
    CoreModule,
    ModulesModule,
    PagesModule,
    SharedModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
