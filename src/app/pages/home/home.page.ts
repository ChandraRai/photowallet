import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CovidDataService } from '../../services/covid-data.service';
import { CountryFlagService } from '../../services/country-flag.service';

import { File } from '@ionic-native/file/ngx';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public title: string;
  public heading: string;  
  
  updateList: any = [];  
  flagList: any = [];

   constructor( private route: ActivatedRoute, 
    private CovidDataService: CovidDataService, 
    private CountryFlagService: CountryFlagService, 
    private ionLoader: LoaderService, 
    private file: File) { }

  ngOnInit() {
    //Loading
    this.ionLoader.showHideAutoLoader();
    
    this.title = this.route.snapshot.data.title;
    this.heading = "Current COVID-19 updates";
    this.displayList(); 
    this.displayFlagList();   
    this.writeJSON( this.updateList);
  }

  // Display covid list
  displayList(): void {
    this.CovidDataService.getList().subscribe(data => {
      //console.log(data);
      this.updateList = data;
      this.updateList = Array.of(this.updateList);
    });
  }

  // Display flag list
  displayFlagList(): void {
    this.CountryFlagService.getList().subscribe(data => {
      //console.log(data);
      this.flagList = data;
      this.flagList = Array.of(this.flagList);
    });
  }

  writeJSON(object) {
    // object is the data you need to write as json
    // filename is the filename
    // no error checking done - just an example
    return this.file.readAsText('../../assets', object)
    }

}