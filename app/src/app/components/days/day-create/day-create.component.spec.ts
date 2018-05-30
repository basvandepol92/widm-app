import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCreateComponent } from './day-create.component';

describe('DayCreateComponent', () => {
  let component: DayCreateComponent;
  let fixture: ComponentFixture<DayCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
