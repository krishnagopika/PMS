import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthRecordComponent } from './patient-health-record.component';

describe('PatientHealthRecordComponent', () => {
  let component: PatientHealthRecordComponent;
  let fixture: ComponentFixture<PatientHealthRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHealthRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHealthRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
