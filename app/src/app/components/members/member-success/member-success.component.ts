import { Component, OnInit } from '@angular/core';
import {MembersService} from "../../../services/members.service";
import {Member} from "../../../types/member";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-success',
  templateUrl: './member-success.component.html',
  styleUrls: ['./member-success.component.css']
})
export class MemberSuccessComponent implements OnInit {
  private members: any;
  public currentMember: any;
  public showMemberSucces: boolean;

  constructor(private membersService:MembersService,
              private route: ActivatedRoute,
              private router: Router) {
    this.navigateView = this.navigateView.bind(this);
  }

  ngOnInit() {
    this.showMemberSucces = false;
    this.route.params.subscribe(params => {
      this.membersService.getMembersArray().then(members => {
        this.members =  members;


        this.membersService.change.subscribe(memberId => {
          console.log(memberId);
          this.getCurrentMember(memberId);
        });
      });
    });
  }

  getCurrentMember(memberId) {
    this.currentMember = this.members.filter(member => member._id === memberId)[0];

    setTimeout(this.navigateView, 3000);
  }

  navigateView() {
    this.currentMember = '';
    this.router.navigateByUrl('/start');
  }

}
