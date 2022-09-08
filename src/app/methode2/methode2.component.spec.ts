import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Methode2Component } from './methode2.component';

describe('Methode2Component', () => {
  let component: Methode2Component;
  let fixture: ComponentFixture<Methode2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Methode2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Methode2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
