import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperExample1Component } from './wrapper-example1.component';

describe('WrapperExample1Component', () => {
  let component: WrapperExample1Component;
  let fixture: ComponentFixture<WrapperExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperExample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
