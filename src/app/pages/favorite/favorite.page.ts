import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  public title: string;
  type: string;  

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.type = 'Personal Info';
  }

  //Switch tab 
  segmentChanged(ev: any) {
    //console.log('Segment changed', ev);    
  }

}
