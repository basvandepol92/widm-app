import {Component, OnInit} from '@angular/core';
import {Day} from "../../../types/day";
import {DaysService} from "../../../services/days.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-day-create',
  templateUrl: './day-create.component.html',
  styleUrls: ['./day-create.component.css']
})
export class DayCreateComponent implements OnInit {

  newDay: Day = new Day();
  days: Day[];

  constructor(private daysService: DaysService,
              private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.setDays = this.setDays.bind(this);
    this.onDayCreated = this.onDayCreated.bind(this);

    this.getDays();
  }

  getDays() {
    this.daysService.getDays()
      .subscribe(this.setDays);
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

