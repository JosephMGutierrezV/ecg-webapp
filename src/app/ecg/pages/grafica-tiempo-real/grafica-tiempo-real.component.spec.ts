import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTiempoRealComponent } from './grafica-tiempo-real.component';

describe('GraficaTiempoRealComponent', () => {
  let component: GraficaTiempoRealComponent;
  let fixture: ComponentFixture<GraficaTiempoRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaTiempoRealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaTiempoRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
