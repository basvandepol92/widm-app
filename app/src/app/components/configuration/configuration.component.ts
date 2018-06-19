import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  showView = false;
  constructor() { }

  ngOnInit() {
    this.showView = localStorage.getItem('admin') === 'true' ? true : false;
  }

}
