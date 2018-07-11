import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresTotalCorrectWidmComponent } from './scores-total-correct-widm.component';

describe('ScoresTotalCorrectWidmComponent', () => {
  let component: ScoresTotalCorrectWidmComponent;
  let fixture: ComponentFixture<ScoresTotalCorrectWidmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresTotalCorrectWidmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresTotalCorrectWidmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
