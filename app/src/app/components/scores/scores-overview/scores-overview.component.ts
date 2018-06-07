import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {MembersService} from "../../../services/members.service";
import {ScoresService} from "../../../services/scores.service";

@Component({
  selector: 'app-scores-overview',
  templateUrl: './scores-overview.component.html',
  styleUrls: ['./scores-overview.component.css']
})
export class ScoresOverviewComponent implements OnInit {
  displayedColumns = ['index', 'name', 'score'];
  dataSource = new MatTableDataSource();
  members: any;
  scores: any;

  constructor(private membersService: MembersService,
              private scoresService: ScoresService) {

    this.setScores = this.setScores.bind(this);

  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.membersService.getMembersArray().then(members => {
      this.members = members;
      this.getScores();
    });
  }

  getScores() {
    this.scoresService.getScores().subscribe(this.setScores)
  }

  setScores(scores) {
    this.scores = this.members
      .map(member => {
        const score = scores.filter(score => score._id === member._id)[0];
        member = {...score, ...member};
        member.score = member.score || 0;
        return member;
      })
      .sort((a, b) => b.score - a.score);

    this.dataSource = new MatTableDataSource(this.scores);
  }
}
