import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {LoadingStateService} from "./services/loading-state.service";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WIDM app';
  showMenu = environment.showMenu; //Set to false on deploying
  showLoading = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private loadingStateService: LoadingStateService) {


    this.activatedRoute.queryParams.subscribe(params => {
      if (params['admin'] === 'true') {
        localStorage.setItem('admin', 'true');
        this.showMenu = true;
      }
    });

    this.showMenu = localStorage.getItem('admin') === 'true' ? true : false;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.loadingStateService.change.subscribe(showLoading => {
      this.showLoading = showLoading;
    });
  }

  toggleMenu() {
    let admin = localStorage.getItem('admin');

    if(admin === 'true') {
      localStorage.setItem('admin', 'false');
      this.showMenu = false;
      return;
    }

    localStorage.setItem('admin', 'true');
    this.showMenu = true;
  }
}
