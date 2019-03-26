import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FuseModule, FuseProgressBarModule, FuseSharedModule, FuseSidebarModule } from '@omega/core';
import { fuseConfig } from './fuse-config/fuse-config';
import { HomeModule } from './views/home/home.module';
import { LayoutModule } from './layout/layout.module';

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

    // App modules
    LayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
