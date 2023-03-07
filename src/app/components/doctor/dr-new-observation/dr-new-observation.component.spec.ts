import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrNewObservationComponent } from './dr-new-observation.component';

describe('DrNewObservationComponent', () => {
  let component: DrNewObservationComponent;
  let fixture: ComponentFixture<DrNewObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrNewObservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrNewObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
