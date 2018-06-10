import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresTopComponent } from './scores-top.component';

describe('ScoresTopComponent', () => {
  let component: ScoresTopComponent;
  let fixture: ComponentFixture<ScoresTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
