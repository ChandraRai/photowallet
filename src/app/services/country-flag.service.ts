import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryFlagService {
  private endpoint = 'https://restcountries.eu/rest/v2/all';

  constructor( private http: HttpClient ) { }

  //method to get list
  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }
}
