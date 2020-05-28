import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  siteList: Observable<Site[]>;

  constructor(public activatedRoute: ActivatedRoute, 
    public HttpClient: HttpClient,
    private ionLoader: LoaderService ) {
    this.siteList = HttpClient.get<Site[]>('https://imageapis.herokuapp.com/api/images');
  } 

  ngOnInit() {
    this.ionLoader.showHideAutoLoader();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

export interface Site {
  id: string;
  location: string;
  owner: string;
  description: string;
  date_taken: Date;
  likes: number;
  tags: number;
  comments: string;
  updated: Date;
  imageurl: string;    
}
