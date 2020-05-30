import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'      
    },
    {
      title: 'Collections',
      url: '/collections',
      icon: 'images'
    },   
    {
      title: 'Favorites',
      url: '/favorite',
      icon: 'heart'
    },    
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    }
  ];
  public labels = [ 
    { title: 'Developer', 
      url: '/developer', 
      icon: 'person'}, 
    {
      title: 'App', 
      url: '/app', 
      icon: 'code-slash'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ionLoader: LoaderService    
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    //Loading
    this.ionLoader.showHideAutoLoader();
  } 
}
