import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhetosCountResponse } from './models/rhetos-count-response';
import { RhetosQueryResponse } from './models/rhetos-query-response';
import { RhetosInsertResponse } from './models/rhetos-insert-response';
import { RhetosQuery } from './query/rhetos-query.model';
import { RhetosRecordsResponse, RhetosRecordsAndCountResponse, RhetosIDResponse } from './models/rhetos-response.models';

@Injectable({
  providedIn: 'root'
})
export class RhetosService<TEntity extends { ID: string }> {
  private resourceApiUrl: string;

  constructor(
    protected http: HttpClient,
    private rhetosRestURL: string,
    private schemaName: string,
    private entityName: string
  ) {
    this.resourceApiUrl =
      this.rhetosRestURL + schemaName + '/' + entityName + '/';
  }

  getAll(): Observable<TEntity[]> {
    return this.http
      .get<RhetosRecordsResponse<TEntity>>(this.resourceApiUrl)
      .pipe(map(res => res.Records));
  }

  getAllWithCount(): Observable<TEntity[]> {
    return this.http
      .get<RhetosRecordsAndCountResponse<TEntity>>(this.resourceApiUrl)
      .pipe(map(res => res.Records));
  }

  query(query: RhetosQuery = new RhetosQuery()): Observable<TEntity[]> {
    return this.http
      .get<RhetosRecordsResponse<TEntity>>(this.resourceApiUrl + query.toString())
      .pipe(map(res => res.Records));
  }

  queryWithCount(query: RhetosQuery = new RhetosQuery()): Observable<RhetosRecordsAndCountResponse<TEntity>> {
    return this.http
      .get<RhetosRecordsAndCountResponse<TEntity>>(this.resourceApiUrl + 'RecordsAndTotalCount' + query.toString());
    // .pipe(map(res => res.Records));
  }

  get(ID: string): Observable<TEntity> {
    return this.http.get<TEntity>(this.resourceApiUrl + ID);
  }

  getCount(): Observable<number> {
    return this.http
      .get<RhetosCountResponse>(this.resourceApiUrl + 'Count')
      .pipe(map(res => res.TotalRecords));
  }

  insert(model: TEntity): Observable<string> {
    return this.http
      .post<RhetosIDResponse>(this.resourceApiUrl, model)
      .pipe(map(res => res.ID));
  }

  update(model: TEntity): Observable<TEntity> {
    return this.http.put<TEntity>(this.resourceApiUrl + model.ID, model);
  }

  delete(ID: string): Observable<any> {
    return this.http.delete<{ ID: string }>(this.resourceApiUrl + ID);
  }
}
