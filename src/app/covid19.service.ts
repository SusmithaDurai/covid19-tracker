import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http:HttpClient) { }

  public getcovid19Report(){
    return this.http.get('https://corona.lmao.ninja/v2/countries');
  }
}
