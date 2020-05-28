import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidDataService } from '../../services/covid-data.service';
import { CountryFlagService } from '../../services/country-flag.service';
import { LoaderService } from '../../services/loader.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public title: string;
  public heading: string;  
  public mobileScale: boolean;
  
  updateList: any = [];  
  flagList: any = [];
  myList: any = [];

   constructor( private route: ActivatedRoute, 
    private CovidDataService: CovidDataService, 
    private CountryFlagService: CountryFlagService, 
    private ionLoader: LoaderService,
    public alertController: AlertController ) { }

  ngOnInit() {
    //Loading
    this.ionLoader.showHideAutoLoader();
    this.screenSize();

    this.title = this.route.snapshot.data.title;
    this.heading = "Current COVID-19 updates";
    this.displayList(); 
    this.displayFlagList(); 
  }
  //Device scale
  screenSize() {
    this.mobileScale = true;

    if(window.screen.width > 400) {
      this.mobileScale = false;
    }
  }

  // Display covid list
  async displayList() {
    this.CovidDataService.getList().subscribe(data => {
      //console.log(data);
      this.updateList = data;
      return this.updateList = Array.of(this.updateList);
    });
  }

  // Display flag list
  async displayFlagList() {
    this.CountryFlagService.getList().subscribe(data => {
      //console.log(data);
      this.flagList = data;
      return this.flagList = Array.of(this.flagList);
    });
  }

  async getSearchList(ev: any) { 
    const query = ev.target.value.toLowerCase();
    this.myList = await this.updateList;
    
    if(query == '') {
      this.displayList();
    } 

    this.myList = this.myList.filter(value => {
      for(var i = 0; i < value.countries.length; i++)        
        if(value.countries[i].name.toLowerCase() == query) {
          //console.log(value.countries[i]); 
          this.presentAlert(value.countries[i]);
          //return (value.countries[i].name.indexOf(query));           
        } 
    }); 
  }

  async presentAlert(s: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: s.name,
      subHeader: 'Cases: ' + s.cases,
      message: 'Deaths: ' + s.deaths,
      buttons: ['OK']
    });
    await alert.present();    
  }    
}
        
    
        