import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPatientInfoComponent } from './adm-patient-info.component';

describe('AdmPatientInfoComponent', () => {
  let component: AdmPatientInfoComponent;
  let fixture: ComponentFixture<AdmPatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmPatientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmPatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
