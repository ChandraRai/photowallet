import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor( public loadingController: LoadingController ) { }

  //Loading method
  showHideAutoLoader() {    
    this.loadingController.create({   
      cssClass: 'custom-loader',         
      backdropDismiss:true,
      duration: 2000,
      spinner: 'bubbles'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        //console.log('Loading dismissed! after 2 Seconds', dis);
      });
    });
  }

  // Show the loader for infinite time
  showLoader() {
    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });

  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });

  }
}