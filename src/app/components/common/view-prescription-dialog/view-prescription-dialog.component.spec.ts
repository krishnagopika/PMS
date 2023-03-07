import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrescriptionDialogComponent } from './view-prescription-dialog.component';

describe('ViewPrescriptionDialogComponent', () => {
  let component: ViewPrescriptionDialogComponent;
  let fixture: ComponentFixture<ViewPrescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrescriptionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPrescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
