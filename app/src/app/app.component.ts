import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WIDM app';
  showMenu = false;

  constructor(private activatedRoute: ActivatedRoute) {
    const that = this;
    if (this.showMenu !== true) {
      this.activatedRoute.queryParams.subscribe(params => {
        if (params['admin'] === 'true') {
          that.showMenu = true;
        }
      });
    }
  }
}
