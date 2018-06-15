import {Component, OnInit} from '@angular/core';
import {ScoresService} from "../../services/scores.service";

@Component({
  selector: 'app-scores-total-correct-widm',
  templateUrl: './scores-total-correct-widm.component.html',
  styleUrls: ['./scores-total-correct-widm.component.css']
})
export class ScoresTotalCorrectWidmComponent implements OnInit {
  public score;

  constructor(private scoresService: ScoresService) {
    this.setScore = this.setScore.bind(this);
  }

  ngOnInit() {
    this.getScore();
  }

  getScore() {
    this.scoresService.getTotalCorrectWIDM().subscribe(this.setScore)
  }

  setScore(score) {
    if(score && Number.isInteger(score.score)) {
      this.score = score.score;
    }
  }
}


