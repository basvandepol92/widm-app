import {Component, OnInit} from '@angular/core';
import {Member} from "../../types/member";
import {MembersService} from "../../services/members.service";
import {MatSnackBar} from "@angular/material";
import {LoadingStateService} from "../../services/loading-state.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  public members: any;
  public member: Member = new Member();

  constructor(private membersService: MembersService,
              private snackbar: MatSnackBar,
              private loadingStateService: LoadingStateService) {
  }

  ngOnInit() {
    this.loadingStateService.loading(true);
    this.membersService.getMembersArray().then(members => {
      this.members =  members;
      this.loadingStateService.loading(false);
    });

    this.onMemberCreated = this.onMemberCreated.bind(this);
  }

  createMember() {
    const member = this.member;
    if (!member.name) {
      this.snackbar.open(`Voer de naam van de persoon in`, null, {
        duration: 1000
      });
      return;
    }

    this.loadingStateService.loading(true);
    this.membersService.create(member)
      .subscribe(this.onMemberCreated);
  }

  onMemberCreated(member) {
    this.members.push(member);
    this.members.sort((a, b) => a.name.localeCompare(b.name));
    this.member = new Member();

    this.loadingStateService.loading(false);
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
