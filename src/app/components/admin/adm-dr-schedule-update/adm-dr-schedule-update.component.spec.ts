import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDrScheduleUpdateComponent } from './adm-dr-schedule-update.component';

describe('AdmDrScheduleUpdateComponent', () => {
  let component: AdmDrScheduleUpdateComponent;
  let fixture: ComponentFixture<AdmDrScheduleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDrScheduleUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmDrScheduleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
