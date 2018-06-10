import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresWidmComponent } from './scores-widm.component';

describe('ScoresWidmComponent', () => {
  let component: ScoresWidmComponent;
  let fixture: ComponentFixture<ScoresWidmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresWidmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresWidmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
