import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurAddDiagnosisInfoComponent } from './nur-add-diagnosis-info.component';

describe('NurAddDiagnosisInfoComponent', () => {
  let component: NurAddDiagnosisInfoComponent;
  let fixture: ComponentFixture<NurAddDiagnosisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurAddDiagnosisInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurAddDiagnosisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
