import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  siteList: Observable<Site[]>;

  constructor(private activatedRoute: ActivatedRoute, HttpClient: HttpClient) {
    this.siteList = HttpClient.get<Site[]>('https://imageapis.herokuapp.com/api/images');
  } 

  ngOnInit() {
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
