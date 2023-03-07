import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDrScheduleComponent } from './adm-dr-schedule.component';

describe('AdmDrScheduleComponent', () => {
  let component: AdmDrScheduleComponent;
  let fixture: ComponentFixture<AdmDrScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDrScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmDrScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
