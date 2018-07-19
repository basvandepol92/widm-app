import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresTopCorrectWidmComponent } from './scores-top-correct-widm.component';

describe('ScoresTopCorrectWidmComponent', () => {
  let component: ScoresTopCorrectWidmComponent;
  let fixture: ComponentFixture<ScoresTopCorrectWidmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresTopCorrectWidmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresTopCorrectWidmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
