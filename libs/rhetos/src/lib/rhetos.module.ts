import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RhetosService } from './rhetos.service';
import { CredentialsInterceptor } from './interceptors/credentials-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true
    },
    RhetosService]
})
export class RhetosModule { }
