import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDrScheduleNewComponent } from './adm-dr-schedule-new.component';

describe('AdmDrScheduleNewComponent', () => {
  let component: AdmDrScheduleNewComponent;
  let fixture: ComponentFixture<AdmDrScheduleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDrScheduleNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmDrScheduleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
