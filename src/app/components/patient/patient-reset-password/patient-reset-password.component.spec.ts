import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientResetPasswordComponent } from './patient-reset-password.component';

describe('PatientResetPasswordComponent', () => {
  let component: PatientResetPasswordComponent;
  let fixture: ComponentFixture<PatientResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
