import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { LoaderService } from "./services/loader.service";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public appPages = [
    {
      title: "Home",
      url: "tabs/home",
      icon: "home",
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "person-circle",
    },
    {
      title: "Collections",
      url: "/collections",
      icon: "images",
    },
    {
      title: "Camera",
      url: "/camera",
      icon: "camera",
    },
  ];

  public labels = [
    { title: "Developer", url: "/developer", icon: "person" },
    {
      title: "App",
      url: "/app",
      icon: "code-slash",
    },
  ];

  public terms = [
    {
      title: "Privacy policy",
      url: "/privacy",
    },
    {
      title: "Terms of Use",
      url: "/terms",
    },
    {
      title: "Cookies policy",
      url: "/cookies",
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ionLoader: LoaderService,
    private iab: InAppBrowser
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
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }

    //Loading
    this.ionLoader.showHideAutoLoader();
  }

  options: InAppBrowserOptions = {
    location: "yes", //Or 'no'
    hidden: "no", //Or  'yes'
    clearcache: "yes",
    clearsessioncache: "yes",
    zoom: "yes", //Android only ,shows browser zoom controls
    hardwareback: "yes",
    mediaPlaybackRequiresUserAction: "no",
    shouldPauseOnSuspend: "no", //Android only
    closebuttoncaption: "Close", //iOS only
    disallowoverscroll: "yes", //iOS only
    toolbar: "yes", //iOS only
    enableViewportScale: "no", //iOS only
    allowInlineMediaPlayback: "no", //iOS only
    presentationstyle: "pagesheet", //iOS only
    fullscreen: "yes", //Windows only
  };

  getUrl(url: string) {
    let target = "_blank";
    this.iab.create(url, target, this.options);
  }
}
