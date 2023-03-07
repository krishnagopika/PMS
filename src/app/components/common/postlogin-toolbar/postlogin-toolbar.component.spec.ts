import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostloginToolbarComponent } from './postlogin-toolbar.component';

describe('PostloginToolbarComponent', () => {
  let component: PostloginToolbarComponent;
  let fixture: ComponentFixture<PostloginToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostloginToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostloginToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
