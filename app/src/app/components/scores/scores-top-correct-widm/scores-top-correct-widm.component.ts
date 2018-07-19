import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoresService} from "../../../services/scores.service";
import {MembersService} from "../../../services/members.service";
import {MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-scores-top-correct-widm',
  templateUrl: './scores-top-correct-widm.component.html',
  styleUrls: ['./scores-top-correct-widm.component.css']
})
export class ScoresTopCorrectWidmComponent implements OnInit {
  displayedColumns = ['index', 'name', 'score'];
  public members;
  public scores;
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private membersService: MembersService,
              private scoresService: ScoresService) {

    this.setScores = this.setScores.bind(this);

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.membersService.getMembersArray().then(members => {
      this.members = members;
      this.getScores();
    });
  }

  getScores() {
    this.scoresService.getCounterCorrectWIDM().subscribe(this.setScores)
  }

  setScores(scores) {

    this.scores = this.members
      .map(member => {
        Object.keys(scores).forEach(function (score){
          if(scores[score].id === member._id) {
            member.score = scores[score].score;
          }
        });

        return member;
      })
      .sort((a, b) => b.score - a.score);
    this.dataSource = new MatTableDataSource(this.scores);
  }

}
