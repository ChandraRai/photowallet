import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { analyzeAndValidateNgModules } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class CovidDataService {
  private endpoint_cases =
    "https://covid19-update-api.herokuapp.com/api/v1/world";
  private endpoint_prediction = "https://covid19-api.org/api/prediction/np";

  // new updated covid19 api
  private endpoint_covid19_daily = "https://api.covid19api.com/summary";

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
  /*public getCovidList(): Observable<any> {
    return this.http.get<any>(this.endpoint_cases);
  }*/

  //method to get prediction
  /*public getCovidPrediction(): Observable<any> {
    return this.http.get<any>(this.endpoint_prediction);
  }*/

  //method to get Covid-19 Updates
  public getCovidUpdate(): Observable<any> {
    return this.http.get<any>(this.endpoint_covid19_daily);
  }
}
