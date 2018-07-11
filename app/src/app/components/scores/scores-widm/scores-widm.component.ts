import {Component, OnInit} from '@angular/core';
import {MembersService} from "../../../services/members.service";
import {ScoresService} from "../../../services/scores.service";

@Component({
  selector: 'app-scores-widm',
  templateUrl: './scores-widm.component.html',
  styleUrls: ['./scores-widm.component.css']
})
export class ScoresWidmComponent implements OnInit {
  public members;

  constructor(private membersService: MembersService,
              private scoresService: ScoresService) {
  }

  ngOnInit() {
    this.membersService.getMembersArray(true).then(members => {
      this.members = members;

      this.getTopWIDM();
    });
  }

  getTopWIDM() {
    if (this.members.length > 0) {
      this.members = this.members
        .filter(a => a.markedAsMol)
        .sort((a, b) => b.markedAsMol - a.markedAsMol)
        .slice(0, 3);
    }
  }
}
