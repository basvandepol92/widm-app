import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresMarkedAsMolComponent } from './scores-marked-as-mol.component';

describe('ScoresMarkedAsMolComponent', () => {
  let component: ScoresMarkedAsMolComponent;
  let fixture: ComponentFixture<ScoresMarkedAsMolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresMarkedAsMolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresMarkedAsMolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
