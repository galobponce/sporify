import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(private _http: HttpClient) {}

  protected get<T>(url: string, headers?: HttpHeaders): Promise<T> {
    return this._http.get<T>(url, { headers }).toPromise();
  }
}
