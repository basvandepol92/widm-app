import {Component, OnInit} from '@angular/core';
import {ScoresService} from "../../../services/scores.service";

@Component({
  selector: 'app-scores-animation',
  templateUrl: './scores-animation.component.html',
  styleUrls: ['./scores-animation.component.css']
})
export class ScoresAnimationComponent implements OnInit {

  public background: string;
  public showScoreAnimation: boolean;
  public showScore: boolean;
  public score: object;
  public type: string;

  constructor(private scoresService: ScoresService) {
    this.showScoreAnimation = false;
    this.showScore = false;
    this.background = this.CONST.init;
    this.setBackground = this.setBackground.bind(this);
  }

  get CONST() {
    return {
      init: 'INIT',
      positive: 'GREEN_BACKGROUND',
      negative: 'RED_BACKGROUND',
      animateTimes: 11
    }
  }

  ngOnInit() {
    this.scoresService.change.subscribe(scoreType => {
      const that = this;
      this.type = scoreType;
      this.showScoreAnimation = true;

      setTimeout(() => {
        that.startAnimation(that.setBackground, 200, that.CONST.animateTimes);
      }, 500)
    });
  }

  startAnimation(callback, factor, times) {
    const that = this
    let internalCallback = function (tick, counter) {
      return function () {
        if (--tick >= 0) {
          window.setTimeout(internalCallback, ++counter * factor);
          callback();
        } else {
          that.showScores();
        }
      }
    }(times, 0);

    window.setTimeout(internalCallback, factor);
  }

  setBackground() {
    this.background === this.CONST.positive ? this.animateRed() : this.animateGreen();
  }

  animateGreen() {
    this.background = this.CONST.positive;
  }

  animateRed() {
    this.background = this.CONST.negative;
  }

  showScores() {
    const that = this;
    this.animateInit();
    this.showScore = true;


    setTimeout(() => {
      that.showScore = false;
      that.showScoreAnimation = false;
    }, 7500)
  }

  animateInit() {
    this.background = this.CONST.init;
  }
}
