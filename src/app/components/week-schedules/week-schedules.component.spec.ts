import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSchedulesComponent } from './week-schedules.component';

describe('WeekSchedulesComponent', () => {
  let component: WeekSchedulesComponent;
  let fixture: ComponentFixture<WeekSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
