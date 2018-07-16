import { Component, OnInit } from '@angular/core';
import { MembersService } from "../../../services/members.service";
import {ScoresService} from "../../../services/scores.service";

@Component({
  selector: 'app-scores-finale',
  templateUrl: './scores-finale.component.html',
  styleUrls: ['./scores-finale.component.css']
})
export class ScoresFinaleComponent implements OnInit {

  public members;
  public shownMol;
  private drumRoll;
  private theMol;

  constructor(private membersService: MembersService,
              private scoresService: ScoresService) { }

  ngOnInit() {
    const molId = "5b3a4bceb0057c2ff216a3e8";
    this.membersService.getMembersArray(true).then(members => {
      this.members = members;
      this.theMol = members.filter(a => a._id === molId)[0];

      this.scoresService.showFinaleEmitter.subscribe(showFinale => {
        if(showFinale) {
          this.showMol();
        }
      });
    });
  }


  createAudio() {
    this.drumRoll = new Audio('assets/drum_roll.mp3');
    this.drumRoll.load();
    this.drumRoll.play();
  }

  showMol() {
    let counter = 0;
    let intervalCounter = 0;

    this.createAudio();

    const showMolInterval = setInterval(() => {
      this.shownMol = this.members[counter];
      counter = counter++ < this.members.length - 1 ? counter++ : 0;
      intervalCounter ++;

      if(intervalCounter === 240) {
        clearInterval(showMolInterval);
        this.shownMol = null;

        setTimeout(() => {
          this.shownMol = this.theMol;
        }, 1000);
      }
    }, 100);
  }

}
