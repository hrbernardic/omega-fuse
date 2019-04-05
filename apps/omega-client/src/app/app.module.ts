import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';

registerLocaleData(localeHr, 'hr');

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FuseModule, FuseProgressBarModule, FuseSharedModule, FuseSidebarModule } from '@omega/core';
import { fuseConfig } from './fuse-config/fuse-config';
import { HomeModule } from './views/home/home.module';
import { LayoutModule } from './layout/layout.module';
import { environment } from '../environments/environment';
import { RhetosModule } from '@omega/rhetos';

const appRoutes: Routes = [
  {
    path        : 'home',
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path        : 'forms',
    loadChildren: './views/forms/forms.module#FormsModule'
  },
  {
    path        : 'data-grid',
    loadChildren: './views/data-grid/data-grid.module#DataGridModule'
  },
  {
    path      : '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    //TranslateModule.forRoot(),


    // Material
    MatButtonModule,
    MatIconModule,

    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,

    // Omega Modules
    RhetosModule,

    // App modules
    LayoutModule,
    HomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "hr-HR" },
    { provide: "RHETOS_REST_URL", useValue: environment.rhetosRestURL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
