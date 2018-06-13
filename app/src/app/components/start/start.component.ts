import { Component, OnInit } from '@angular/core';
import { MembersService } from "../../services/members.service";
import { LoadingStateService } from "../../services/loading-state.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public members: any;

  constructor(private membersService: MembersService,
              private loadingStateService: LoadingStateService) {}

  ngOnInit() {
    this.loadingStateService.loading(true);
    this.membersService.getMembersArray().then(members => {
      this.members =  members;
      this.loadingStateService.loading(false);
    });
  }
}
