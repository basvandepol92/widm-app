import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.css']
})
export class ScoresPageComponent implements OnInit {

  showView = false;

  constructor() { }

  ngOnInit() {
    this.showView = localStorage.getItem('admin') === 'true' ? true : false;
  }

}
