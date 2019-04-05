export interface RhetosRecordsResponse<T> {
  Records: T[];
}

export interface RhetosRecordsAndCountResponse<T> extends RhetosRecordsResponse<T> {
  TotalCount: number;
}

export interface RhetosIDResponse {
  ID: string;
}
