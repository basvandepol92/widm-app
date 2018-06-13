import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {LoadingStateService} from "./services/loading-state.service";


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WIDM app';
  showMenu = true; //Set to false on deploying
  showLoading = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private loadingStateService: LoadingStateService) {
    const that = this;
    if (this.showMenu !== true) {
      this.activatedRoute.queryParams.subscribe(params => {
        if (params['admin'] === 'true') {
          that.showMenu = true;
        }
      });
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.loadingStateService.change.subscribe(showLoading => {
      console.log(showLoading);
      this.showLoading = showLoading;
    });
  }
}
