import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursesComponent } from './new-courses.component';

describe('NewCoursesComponent', () => {
  let component: NewCoursesComponent;
  let fixture: ComponentFixture<NewCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
