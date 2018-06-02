import { Component, OnInit } from '@angular/core';
import { Member } from "../../types/member";
import { MembersService } from "../../services/members.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public members: Member[];
  public member: Member = new Member();

  constructor(private membersService: MembersService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.getMembers();

    this.onMemberCreated = this.onMemberCreated.bind(this);
  }

  getMembers() {
    this.membersService.getMembers()
      .subscribe(members => this.members = members);
  }

  createMember() {
    const member = this.member;
    this.membersService.create(member)
      .subscribe(this.onMemberCreated);
  }

  onMemberCreated(member) {
    this.members.push(member);
    this.member = new Member();

    this.snackbar.open(`${member.name} opgeslagen`, null, {
      duration: 1000
    });
  }

  deleteMember(deleteMember) {
    this.membersService.delete(deleteMember).subscribe();
    this.members = this.members.filter(member => member._id !== deleteMember._id);

    this.snackbar.open(`${deleteMember.name} verwijderd`, null, {
      duration: 1000
    });
  }
}
