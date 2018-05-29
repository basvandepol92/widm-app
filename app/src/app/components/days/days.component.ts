import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DaysService } from "../../services/days.service";
import { Day } from "../../types/day";


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  days: Day[];
  memberId: String;

  constructor(private daysService: DaysService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.memberId = params['memberId'];
      this.getDays();
    });
  }

  getDays() {
    this.daysService.getDays()
      .subscribe(days => this.days = days)
  }

}
