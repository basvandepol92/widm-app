import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WIDM app';
  showMenu = true; //Set to false on deploying

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
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
  }
}
