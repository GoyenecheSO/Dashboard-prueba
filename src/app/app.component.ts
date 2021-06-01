import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faBookReader} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  faCoffee = faCoffee;
  faUser=faUser;
  faMobile=faMobile;
  faBookReader=faBookReader;
  faEnvelope=faEnvelope;
  constructor (
  ) {
    
  }

  ngOnInit(){
  //  console.log("app.component.ts cargado");

  }
  check:boolean=false;
  showSideBar(){
    if(this.check==false){
      this.check=true;
    }else {
      this.check=false;
    }
  }
 

}
