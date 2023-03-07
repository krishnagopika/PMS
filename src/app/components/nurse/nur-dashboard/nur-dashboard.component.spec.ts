import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurDashboardComponent } from './nur-dashboard.component';

describe('NurDashboardComponent', () => {
  let component: NurDashboardComponent;
  let fixture: ComponentFixture<NurDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
