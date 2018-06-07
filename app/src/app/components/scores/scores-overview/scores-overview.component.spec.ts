import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresOverviewComponent } from './scores-overview.component';

describe('ScoresOverviewComponent', () => {
  let component: ScoresOverviewComponent;
  let fixture: ComponentFixture<ScoresOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
