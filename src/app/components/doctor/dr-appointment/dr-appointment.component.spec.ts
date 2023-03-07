import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAppointmentComponent } from './dr-appointment.component';

describe('DrAppointmentComponent', () => {
  let component: DrAppointmentComponent;
  let fixture: ComponentFixture<DrAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
