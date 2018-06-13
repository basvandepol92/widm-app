import { Component, OnInit } from '@angular/core';
import { DaysService } from "../../../services/days.service";
import { Day } from "../../../types/day";
import {ActivatedRoute} from "@angular/router";
import { MatSnackBar } from "@angular/material";
import {LoadingStateService} from "../../../services/loading-state.service";

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
              private snackbar: MatSnackBar,
              private loadingStateService: LoadingStateService  ) { }

  ngOnInit() {
    this.loadingStateService.loading(true);
    this.getDays();
    this.onDayCreated = this.onDayCreated.bind(this);
  }

  getDays() {
    this.daysService.getDays()
      .subscribe(days => {
        this.days = days.sort((a, b) => a.description.localeCompare(b.description));
        this.loadingStateService.loading(false);
      })
  }

  createDay(day) {
    if (!day.description) {
      this.snackbar.open(`Selecteer een dag`, null, {
        duration: 1000
      });
      return;
    }

    this.loadingStateService.loading(true );
    this.daysService.create(day)
      .subscribe(this.onDayCreated);
  }

  onDayCreated(day) {
    this.days.push(day);
    this.days.sort((a, b) => a.description.localeCompare(b.description))
    this.newDay = new Day();

    this.loadingStateService.loading(false);
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
