import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadalertComponent } from './badalert.component';

describe('BadalertComponent', () => {
  let component: BadalertComponent;
  let fixture: ComponentFixture<BadalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
