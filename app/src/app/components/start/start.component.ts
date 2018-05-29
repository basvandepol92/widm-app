import { Component, OnInit } from '@angular/core';
import { Member } from "../../types/member";
import { MembersService } from "../../services/members.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private membersService: MembersService ) { }
  members: Member[];

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.membersService.getMembers()
      .subscribe(members => this.members = members);
  }

}
