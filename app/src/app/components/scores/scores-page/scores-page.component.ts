import { Component, OnInit } from '@angular/core';
import {ScoresService} from "../../../services/scores.service";

@Component({
  selector: 'app-scores-page',
  templateUrl: './scores-page.component.html',
  styleUrls: ['./scores-page.component.css']
})
export class ScoresPageComponent implements OnInit {
  public expanded: boolean;
  public showView: boolean;


  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.showView = localStorage.getItem('admin') === 'true' ? true : false;
  }

  animateScores(view) {
    this.expanded = false;
    this.scoresService.showScoreAnimation(view);
  }
}
