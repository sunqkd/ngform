import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactedFormComponent } from './reacted-form.component';

describe('ReactedFormComponent', () => {
  let component: ReactedFormComponent;
  let fixture: ComponentFixture<ReactedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
