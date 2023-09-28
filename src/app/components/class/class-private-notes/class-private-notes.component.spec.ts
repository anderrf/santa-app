import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPrivateNotesComponent } from './class-private-notes.component';

describe('ClassPrivateNotesComponent', () => {
  let component: ClassPrivateNotesComponent;
  let fixture: ComponentFixture<ClassPrivateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPrivateNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassPrivateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
