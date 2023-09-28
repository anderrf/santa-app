import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAlertsComponent } from './class-alerts.component';

describe('ClassAlertsComponent', () => {
  let component: ClassAlertsComponent;
  let fixture: ComponentFixture<ClassAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
