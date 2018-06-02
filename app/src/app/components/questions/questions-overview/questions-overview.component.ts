import { Component, OnInit } from '@angular/core';
import { DaysService } from "../../../services/days.service";
import { Day } from "../../../types/day";
import {ActivatedRoute} from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-questions-overview',
  templateUrl: './questions-overview.component.html',
  styleUrls: ['./questions-overview.component.css']
})
export class QuestionsOverviewComponent implements OnInit {
  public days: Day[];
  public newDay: Day = new Day();

  constructor(private daysService: DaysService,
              private route: ActivatedRoute,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.getDays();

    this.setDays = this.setDays.bind(this);
    this.onDayCreated = this.onDayCreated.bind(this);
  }

  getDays() {
    this.daysService.getDays()
      .subscribe(days => this.days = days)
  }


  setDays(days) {
    console.log(days);
    this.days = days
  }

  createDay(day) {
    this.daysService.create(day)
      .subscribe(this.onDayCreated);
  }

  onDayCreated(day) {
    this.days.push(day);
    this.newDay = new Day();

    this.snackbar.open('Datum opgeslagen', null, {
      duration: 1000
    });
  }

  deleteDay(deleteDay) {
    this.daysService.delete(deleteDay).subscribe();
    this.days = this.days.filter(day => day._id !== deleteDay._id);

    this.snackbar.open(`${deleteDay.description} verwijderd`, null, {
      duration: 1000
    });
  }
}
