import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class WeatherService {
  apiKey="APIKEY INSERT";
  URI: string = "";
  public cityName:string ="";
  constructor( private http: HttpClient) { 
  }
getWeather (cityName: string) {
  this.URI = 'https://api.openweathermap.org/data/2.5/weather?appid='+this.apiKey+'&units=metric&q='+cityName;
  return this.http.get(this.URI);
}
}
