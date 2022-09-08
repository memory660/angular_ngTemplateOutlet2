import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Methode1Component } from './methode1.component';

describe('Methode1Component', () => {
  let component: Methode1Component;
  let fixture: ComponentFixture<Methode1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Methode1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Methode1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
