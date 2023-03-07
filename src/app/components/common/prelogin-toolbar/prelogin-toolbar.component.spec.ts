import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloginToolbarComponent } from './prelogin-toolbar.component';

describe('PreloginToolbarComponent', () => {
  let component: PreloginToolbarComponent;
  let fixture: ComponentFixture<PreloginToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreloginToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreloginToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
