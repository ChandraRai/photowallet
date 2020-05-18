import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CovidDataService } from '../../services/covid-data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public title: string;
  public heading: string;  
  
  //updateList: Array<covidModal>;
  updateList: any = [];

  constructor( private route: ActivatedRoute, private CovidDataService: CovidDataService ) {  
  }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    this.heading = "Current COVID-19 updates";
    this.displayList();
  }

  displayList(): void {
    this.CovidDataService.getList().subscribe(data => {
      //console.log(data);
      this.updateList = data;
      this.updateList = Array.of(this.updateList);
    });
  }
}

export interface covidModal {
  timeStamp: string,
  total: number,
  countries: [
    {
      name: string,
      cases: number,
      deaths: number,
      continent: string
    }]      
}

