import { Injectable } from '@angular/core';
import { RhetosService } from '@omega/rhetos';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GenericRhetosService extends RhetosService<{ ID: string }>
{
  constructor(protected http: HttpClient, rhetosRestUrl: string, schema: string, resource: string) {
    super(http, rhetosRestUrl, schema, resource);

  }
}
