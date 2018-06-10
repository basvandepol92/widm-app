import { Component, OnInit } from '@angular/core';
import { MembersService } from "../../services/members.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public members: any;

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.membersService.getMembersArray().then(members => {
      this.members =  members;
    });
  }
}
