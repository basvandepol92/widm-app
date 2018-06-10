import { Component, OnInit } from '@angular/core';
import { MembersService } from "../../../services/members.service";

@Component({
  selector: 'app-scores-widm',
  templateUrl: './scores-widm.component.html',
  styleUrls: ['./scores-widm.component.css']
})
export class ScoresWidmComponent implements OnInit {
  public members;

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.membersService.getMembersArray(true).then(members => {
      this.members = members;

      this.getTopWIDM();
    });
  }

  getTopWIDM() {
    this.members = this.members
      .filter(a => a.markedAsMol)
      .sort((a,b) => b.markedAsMol - a.markedAsMol)
      .slice(0, 3);
  }

}
