import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../services/loader.service';
import { Site } from './folder.model'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public title: string;

  siteList: Observable<Site[]>;

  constructor(public activatedRoute: ActivatedRoute, 
    public http: HttpClient,
    private ionLoader: LoaderService ) {
    this.siteList = http.get<Site[]>('https://imageapis.herokuapp.com/api/images');
  } 

  ngOnInit() {
    this.ionLoader.showHideAutoLoader();
    this.title = this.activatedRoute.snapshot.data.title;
  }
}