import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '@transloco/transloco-root.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from '@core/core.module';
import { ModulesModule } from '@modules/modules.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from '@shared/shared.module';
import { UtilsModule } from '@utils/utils.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigService } from '@core/config/config.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, ObservableInput, of } from 'rxjs';
import { ImportPrimengModule } from './import-primeng.module';

@NgModule({
  declarations: [AppComponent],
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
    ImportPrimengModule,

    // My own modules
    CoreModule,
    ModulesModule,
    PagesModule,
    SharedModule,
    UtilsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      deps: [ConfigService, HttpBackend],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function load(config: ConfigService, httpBackend: HttpBackend): () => Promise<boolean> {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      const httpWithoutInterceptor = new HttpClient(httpBackend);

      httpWithoutInterceptor
        .get<any>('./assets/config/config.json')
        .pipe(
          map((configService: ConfigService) => {
            config.baseUrlApi = configService.baseUrlApi;
            config.appRelease = configService.appRelease;
            config.appVersion = configService.appVersion;
            config.environmentLevel = configService.environmentLevel;
            config.environmentName = configService.environmentName;
            config.installationTime = configService.installationTime;
            resolve(true);
          }),
          catchError((x: { status: number }, caught: Observable<void>): ObservableInput<any> => {
            if (x.status !== 404) {
              resolve(false);
            }
            config.baseUrlApi = 'http://localhost:8010';
            resolve(true);
            return of({});
          })
        )
        .subscribe();
    });
  };
}
