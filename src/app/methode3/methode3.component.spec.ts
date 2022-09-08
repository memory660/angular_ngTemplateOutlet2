import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Methode3Component } from './methode3.component';

describe('Methode3Component', () => {
  let component: Methode3Component;
  let fixture: ComponentFixture<Methode3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Methode3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Methode3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
