import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDrSheduleDelComponent } from './adm-dr-shedule-del.component';

describe('AdmDrSheduleDelComponent', () => {
  let component: AdmDrSheduleDelComponent;
  let fixture: ComponentFixture<AdmDrSheduleDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDrSheduleDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmDrSheduleDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
