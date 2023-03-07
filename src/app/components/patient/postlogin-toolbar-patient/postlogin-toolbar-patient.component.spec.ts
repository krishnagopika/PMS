import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostloginToolbarPatientComponent } from './postlogin-toolbar-patient.component';

describe('PostloginToolbarPatientComponent', () => {
  let component: PostloginToolbarPatientComponent;
  let fixture: ComponentFixture<PostloginToolbarPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostloginToolbarPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostloginToolbarPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
