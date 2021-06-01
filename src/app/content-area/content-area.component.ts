import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { WeatherService} from "../services/weather.service";


@Component({
  selector: 'content-area',
  templateUrl:'./content-area.component.html',
  styleUrls: ['./content-area.component.css'],
  providers: [WeatherService]
})
export class ContentAreaComponent implements OnInit {
  public title = '';
  public weatherCity:any=[];
  public icon = '';
  public term:number =0;
  public description:string ="";
  public imgUrl:string = '';
  public tempmax:number =0;
  public temmin:number =0;
  public humidity:number =0;
  public pressure:number =0;
  constructor (
    private _weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
  
  }
  ngOnInit(){
    this.getWeather();
  }
  getWeather(){   

      this.route.params.forEach((params:Params) => {
         let id=params["city"]
       
         this._weatherService.getWeather(id).subscribe(
          (response) =>{
            this.weatherCity = response
            this.term=this.weatherCity.main.temp
            this.description=this.weatherCity.weather[0].description
            this.tempmax= this.weatherCity.main.temp_max
            this.temmin= this.weatherCity.main.temp_min
            this.humidity= this.weatherCity.main.humidity
            this.pressure= this.weatherCity.main.pressure
            this.icon = this.weatherCity.weather[0].icon
            this.imgUrl ="http://openweathermap.org/img/wn/"+this.icon+"@2x.png"
          },
          error => console.log(error)
          )
      })
  }
  
}