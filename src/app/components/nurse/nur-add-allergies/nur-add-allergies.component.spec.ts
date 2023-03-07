import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurAddAllergiesComponent } from './nur-add-allergies.component';

describe('NurAddAllergiesComponent', () => {
  let component: NurAddAllergiesComponent;
  let fixture: ComponentFixture<NurAddAllergiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurAddAllergiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurAddAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
