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
    this.setMembers = this.setMembers.bind(this);
  }
  members: Member[];

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.membersService.getMembers()
      .subscribe(this.setMembers);
  }

  setMembers(members) {
    this.members = members.sort((a, b) => a.name.localeCompare(b.name));
    this.membersService.setMembersArray(members);
  }

}
