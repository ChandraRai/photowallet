import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// For camera
import { CameraService } from '../../services/camera.service';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  public title: string;

  constructor( private activatedRoute: ActivatedRoute, private photoService: CameraService ) { }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('id');
    this.photoService.loadSaved();
  }
}
