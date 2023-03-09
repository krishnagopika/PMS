import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrUpdateObservationComponent } from './dr-update-observation.component';

describe('DrUpdateObservationComponent', () => {
  let component: DrUpdateObservationComponent;
  let fixture: ComponentFixture<DrUpdateObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrUpdateObservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrUpdateObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
