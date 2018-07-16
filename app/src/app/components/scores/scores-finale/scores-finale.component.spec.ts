import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresFinaleComponent } from './scores-finale.component';

describe('ScoresFinaleComponent', () => {
  let component: ScoresFinaleComponent;
  let fixture: ComponentFixture<ScoresFinaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresFinaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
