import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PanelControlComponent } from './pages/panel-control/panel-control.component';
import { GraficaTiempoRealComponent } from './pages/grafica-tiempo-real/grafica-tiempo-real.component';
import { GraficaHistoricoComponent } from './pages/grafica-historico/grafica-historico.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    PanelControlComponent,
    GraficaTiempoRealComponent,
    GraficaHistoricoComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    LoginComponent,
    RegistroComponent,
    PanelControlComponent,
    GraficaTiempoRealComponent,
    GraficaHistoricoComponent,
  ],
})
export class EcgModule {}
