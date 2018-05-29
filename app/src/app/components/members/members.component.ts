import { Component, OnInit } from '@angular/core';
import { Member } from "../../types/member";
import { MembersService } from "../../services/members.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  member: Member = new Member();

  constructor(private membersService: MembersService ) { }

  ngOnInit() {
    this.getMembers();

    this.onMemberCreated = this.onMemberCreated.bind(this);
  }

  getMembers() {
    this.membersService.getMembers()
      .subscribe(members => this.members = members);
  }

  createMember(member) {
    this.membersService.create(member)
      .subscribe(this.onMemberCreated);
  }

  onMemberCreated(member) {
    this.members.push(member);
    this.member = new Member();
  }

  deleteMember(deleteMember) {
    this.membersService.delete(deleteMember).subscribe();
    this.members = this.members.filter(member => member._id !== deleteMember._id);
  }
}
