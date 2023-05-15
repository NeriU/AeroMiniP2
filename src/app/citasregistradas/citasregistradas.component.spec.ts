import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasregistradasComponent } from './citasregistradas.component';

describe('CitasregistradasComponent', () => {
  let component: CitasregistradasComponent;
  let fixture: ComponentFixture<CitasregistradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasregistradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasregistradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
