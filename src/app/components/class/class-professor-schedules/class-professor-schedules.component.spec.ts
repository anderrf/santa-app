import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProfessorSchedulesComponent } from './class-professor-schedules.component';

describe('ClassProfessorSchedulesComponent', () => {
  let component: ClassProfessorSchedulesComponent;
  let fixture: ComponentFixture<ClassProfessorSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassProfessorSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassProfessorSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
