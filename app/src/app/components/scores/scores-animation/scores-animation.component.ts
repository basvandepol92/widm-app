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
    this.setKeyButton = this.setKeyButton.bind(this);
  }

  get CONST() {
    return {
      init: 'INIT',
      positive: 'GREEN_BACKGROUND',
      negative: 'RED_BACKGROUND',
      animateSpeed: 750,
    }
  }

  ngOnInit() {
    this.scoresService.change.subscribe(scoreType => {
      this.showScoreAnimation = true;
      this.startAnimation().then(() => this.showScores(scoreType));
    });
  }

  timeout(ms) {
    return new Promise(res => setTimeout(res, ms));
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

  showScores(scoreType) {
    this.animateInit();
    this.type = scoreType;
    this.showScore = true;
    document.addEventListener("keyup", this.setKeyButton);
  }

  setKeyButton(e) {
    if (e.which === 32) {
      this.showScore = false;
      this.showScoreAnimation = false;
      document.removeEventListener("keyup", this.setKeyButton);
    }
  }

  animateInit() {
    this.background = this.CONST.init;
  }

  async startAnimation() {
    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();

    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();

    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();

    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();

    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();

    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();

    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();
  }
}
