import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLogComponent } from './button-log.component';

describe('ButtonLogComponent', () => {
  let component: ButtonLogComponent;
  let fixture: ComponentFixture<ButtonLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
