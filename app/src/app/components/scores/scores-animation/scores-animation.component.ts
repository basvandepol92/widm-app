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
  private audio;

  constructor(private scoresService: ScoresService) {
    this.showScoreAnimation = false;
    this.showScore = false;
    this.background = this.CONST.init;
    this.setBackground = this.setBackground.bind(this);

    this.createAudio();
  }

  get CONST() {
    return {
      init: 'INIT',
      positive: 'GREEN_BACKGROUND',
      negative: 'RED_BACKGROUND',
      no_background: 'NO_BACKGROUND',
      animateSpeed: 750,
    }
  }

  ngOnInit() {
    this.scoresService.change.subscribe(scoreType => {
      this.background = this.CONST.no_background;
      this.type = scoreType;
      this.showScoreAnimation = true;
      this.audio.play();
      this.startAnimation().then(() => this.showScores());
    });
  }

  createAudio() {
    this.audio = new Audio('assets/sound.mp3');
    this.resetAudio();
    this.audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);

    this.audio.load();
  }

  resetAudio() {
    this.audio.currentTime = 0;
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


  showScores() {
    this.background = 'SHOW_SCORE';
  }

  closeButton() {
    this.showScore = false;
    this.showScoreAnimation = false;
    this.audio.pause();
    this.resetAudio();
  }

  animateInit() {
    this.background = this.CONST.no_background;
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

    await this.timeout(this.CONST.animateSpeed);
    this.animateRed();

    await this.timeout(this.CONST.animateSpeed);
    this.animateGreen();
    this.animateInit();

    await this.timeout(this.CONST.animateSpeed);
  }
}
