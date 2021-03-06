import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
