import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  public showButton = false;
  constructor(private _location: Location) {}

  ngOnInit() {
    //this.showButton = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    this.showButton = true;
  }

  navigateBack() {
    this._location.back();
  }
}
