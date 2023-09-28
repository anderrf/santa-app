import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFunctionsListComponent } from './class-functions-list.component';

describe('ClassFunctionsListComponent', () => {
  let component: ClassFunctionsListComponent;
  let fixture: ComponentFixture<ClassFunctionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassFunctionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassFunctionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
