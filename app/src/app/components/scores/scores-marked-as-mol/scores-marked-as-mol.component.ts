import {Component, OnInit, ViewChild} from '@angular/core';
import {MembersService} from "../../../services/members.service";
import {ScoresService} from "../../../services/scores.service";
import {MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-scores-marked-as-mol',
  templateUrl: './scores-marked-as-mol.component.html',
  styleUrls: ['./scores-marked-as-mol.component.css']
})
export class ScoresMarkedAsMolComponent implements OnInit {

  public members;
  displayedColumns = ['index', 'name', 'markedAsMol'];
  dataSource = new MatTableDataSource();

  constructor(private membersService: MembersService,
              private scoresService: ScoresService) {
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.membersService.getMembersArray(true).then(members => {
      this.members = members;

      this.getTopWIDM();
    });
  }

  getTopWIDM() {
    if (this.members.length > 0) {
      this.members = this.members
        .filter(a => a.markedAsMol)
        .sort((a, b) => b.markedAsMol - a.markedAsMol);

      console.log(this.members);
      this.dataSource = new MatTableDataSource(this.members);
    }

  }
}
