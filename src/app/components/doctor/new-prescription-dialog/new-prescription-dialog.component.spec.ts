import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrescriptionDialogComponent } from './new-prescription-dialog.component';

describe('NewPrescriptionDialogComponent', () => {
  let component: NewPrescriptionDialogComponent;
  let fixture: ComponentFixture<NewPrescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPrescriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPrescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
