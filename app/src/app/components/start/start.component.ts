import { Component, OnInit } from '@angular/core';
import { Member } from "../../types/member";
import { MembersService } from "../../services/members.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private membersService: MembersService ) {
  }
  members: any;

  ngOnInit() {
    this.membersService.getMembersArray().then(members => {
      this.members =  members;
    });
  }
}
