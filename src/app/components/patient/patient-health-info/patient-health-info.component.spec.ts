import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthInfoComponent } from './patient-health-info.component';

describe('PatientHealthInfoComponent', () => {
  let component: PatientHealthInfoComponent;
  let fixture: ComponentFixture<PatientHealthInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHealthInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHealthInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
