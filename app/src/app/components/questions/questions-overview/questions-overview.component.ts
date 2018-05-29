import { Component, OnInit } from '@angular/core';
import { DaysService } from "../../../services/days.service";
import { Day } from "../../../types/day";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-questions-overview',
  templateUrl: './questions-overview.component.html',
  styleUrls: ['./questions-overview.component.css']
})
export class QuestionsOverviewComponent implements OnInit {
  days: Day[];

  constructor(private daysService: DaysService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDays();
  }

  getDays() {
    this.daysService.getDays()
      .subscribe(days => this.days = days)
  }
}
