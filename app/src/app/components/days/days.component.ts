import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DaysService } from "../../services/days.service";
import { Day } from "../../types/day";
import {MembersService} from "../../services/members.service";
import { Member } from "../../types/member";


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  public days: Day[];
  public memberId: string;
  private members: Member[];

  constructor(private daysService: DaysService,
              private route: ActivatedRoute,
              private membersService: MembersService) {
    this.setDays = this.setDays.bind(this);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.memberId = params['memberId'];
      this.getDays();

      this.members = this.membersService.getMembersArray();
    });
  }

  getDays() {
    this.daysService.getDaysForMember(this.memberId)
      .subscribe(this.setDays);
  }

  setDays(days) {
    this.days = days.sort((a, b) => a.description.localeCompare(b.description));
  }
}
