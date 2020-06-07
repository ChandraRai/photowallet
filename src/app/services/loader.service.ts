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
      spinner: 'bubbles',     
      duration: 2000,      
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        //console.log('Loading dismissed! after 2 Seconds', dis);
      });
    });
  }  
}
