import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHistoricoComponent } from './grafica-historico.component';

describe('GraficaHistoricoComponent', () => {
  let component: GraficaHistoricoComponent;
  let fixture: ComponentFixture<GraficaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
