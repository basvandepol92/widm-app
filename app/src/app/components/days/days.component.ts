import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DaysService } from "../../services/days.service";
import { Day } from "../../types/day";
import {MembersService} from "../../services/members.service";
import { Member } from "../../types/member";
import {LoadingStateService} from "../../services/loading-state.service";


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  public days: Day[];
  public memberId: string;
  private members: any;
  public currentMember: any;

  constructor(private daysService: DaysService,
              private route: ActivatedRoute,
              private membersService: MembersService,
              private loadingStateService: LoadingStateService,
              private router: Router) {
    this.setDays = this.setDays.bind(this);
  }

  ngOnInit() {
    this.loadingStateService.loading(true);
    this.route.params.subscribe(params => {
      this.memberId = params['memberId'];
      this.getDays();

      this.membersService.getMembersArray().then(members => {
        this.members =  members;
        this.getCurrentMember();
      });
    });
  }

  getCurrentMember() {
    this.currentMember = this.members.filter(member => member._id === this.memberId)[0];
  }

  getDays() {
    this.daysService.getDaysForMember(this.memberId)
      .subscribe(this.setDays);
  }

  setDays(days) {
    this.days = days.sort((a, b) => a.description.localeCompare(b.description));
    this.loadingStateService.loading(false);
  }

  openUrl(day) {
    if(day.answered) {
      return;
    }

    this.router.navigateByUrl(`/questions/${this.memberId}/${day._id}`);
  }

  showSelectQuestions() {
    return !this.currentMember.answered_questions || this.currentMember && this.currentMember.answered_questions && this.days && (this.currentMember.answered_questions.length !== this.days.length);
  }
}
