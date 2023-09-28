import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPublicNotesComponent } from './class-public-notes.component';

describe('ClassPublicNotesComponent', () => {
  let component: ClassPublicNotesComponent;
  let fixture: ComponentFixture<ClassPublicNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPublicNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassPublicNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
