import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CovidDataService {
  private endpoint = "https://covid19-update-api.herokuapp.com/api/v1/world";
  //private endpoint = "https://covid19-api.org/api/status";

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    }),
  };

  //method to get list
  public getCovidList(): Observable<any> {
    return this.http.get<any>(this.endpoint);
  }
}
