import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CovidDataService } from "../../services/covid-data.service";
// import { CountryFlagService } from "../../services/country-flag.service";
import { LoaderService } from "../../services/loader.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public title: string;
  public heading: string;
  public mobileScale: boolean;

  updateList: any = [];
  flagList: any = [];
  myList: any = [];

  //New updated list
  newList: any = [];

  constructor(
    private route: ActivatedRoute,
    private CovidDataService: CovidDataService,
    //private CountryFlagService: CountryFlagService,
    private ionLoader: LoaderService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    //Loading
    this.ionLoader.showHideAutoLoader();
    this.screenSize();

    this.title = this.route.snapshot.data.title;
    this.heading = "Current COVID-19 updates";
    //this.displayList();
    //this.displayFlagList();

    // Display new list
    this.displayNewList();
  }

  //Device scale
  screenSize() {
    this.mobileScale = true;

    if (window.screen.width > 550) {
      this.mobileScale = false;
    }
  }

  // Display covid list
  /*async displayList() {
    this.CovidDataService.getCovidList().subscribe((data) => {
      //console.log(data);
      this.updateList = data;
      return (this.updateList = Array.of(this.updateList));
    });
  }*/

  // Display flag list
  /*async displayFlagList() {
    this.CountryFlagService.getFlagList().subscribe((data) => {
      //console.log(data);
      this.flagList = data;
      return (this.flagList = Array.of(this.flagList));
    });
  }*/

  //Searchbar
  /*async getSearchList(ev: any) {
    const query = ev.target.value.toLowerCase();
    this.myList = await this.updateList;

    if (query == "") {
      this.displayList();
    }

    this.myList = this.myList.filter((value) => {
      for (var i = 0; i < value.countries.length; i++)
        if (value.countries[i].name.toLowerCase() === query) {
          //console.log(value.countries[i]);
          this.presentAlert(value.countries[i]);
          //return (value.countries[i].name.indexOf(query));
        }
    });
  }*/

  //Display search item as alert
  async presentAlert(s: any) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: s.Country,
      subHeader: "Cases: " + s.TotalConfirmed,
      message: "Deaths: " + s.TotalDeaths,
      buttons: ["OK"],
    });
    await alert.present();
  }

  //Display all cases
  async displayNewList() {
    this.CovidDataService.getCovidUpdate().subscribe((data) => {
      this.newList = data;
      return (this.newList = Array.of(this.newList));
      //console.log(data);
    });
  }

  //Searchbar
  async getSearchList(ev: any) {
    const query = ev.target.value.toLowerCase();
    this.myList = await this.newList;

    if (query == "") {
      this.displayNewList();
    }

    this.myList = this.myList.filter((value) => {
      for (var i = 0; i < value.Countries.length; i++)
        if (value.Countries[i].Country.toLowerCase() === query) {
          //console.log(value.countries[i].country);
          this.presentAlert(value.Countries[i]);
          //return (value.countries[i].name.indexOf(query));
        }
    });
  }
}
