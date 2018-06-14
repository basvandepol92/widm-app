import {Component, OnInit} from '@angular/core';
import {MembersService} from "../../../services/members.service";
import {ScoresService} from "../../../services/scores.service";

@Component({
  selector: 'app-scores-top',
  templateUrl: './scores-top.component.html',
  styleUrls: ['./scores-top.component.css']
})
export class ScoresTopComponent implements OnInit {
  private members;
  private scores;
  public topScorers;

  constructor(private membersService: MembersService,
              private scoresService: ScoresService) {
    this.setScores = this.setScores.bind(this);
  }

  ngOnInit() {
    this.membersService.getMembersArray().then(members => {
      this.members = members;

      this.getScores();
    });
  }

  getScores() {
    this.scoresService.getScores().subscribe(this.setScores)
  }

  setScores(scores) {
    if(scores && this.members.length > 0) {
      this.topScorers = this.members
        .map(member => {
          const score = scores.filter(score => score._id === member._id)[0];
          member = {...score, ...member};
          member.score = member.score || 0;
          return member;
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    }
  }
}
