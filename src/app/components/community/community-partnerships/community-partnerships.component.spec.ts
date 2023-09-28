import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPartnershipsComponent } from './community-partnerships.component';

describe('CommunityPartnershipsComponent', () => {
  let component: CommunityPartnershipsComponent;
  let fixture: ComponentFixture<CommunityPartnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPartnershipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
