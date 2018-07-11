import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresAnimationComponent } from './scores-animation.component';

describe('ScoresAnimationComponent', () => {
  let component: ScoresAnimationComponent;
  let fixture: ComponentFixture<ScoresAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
