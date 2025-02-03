import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../body/body.component';
import { RouterModule } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-access-portal',
  standalone: true,
  imports: [CommonModule, SidenavComponent, BodyComponent, RouterModule],
  templateUrl: './access-portal.component.html',
  styleUrl: './access-portal.component.scss'
})

export class AccessPortalComponent {
  title = 'Dashboard';

  isSideNacCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = this.screenWidth;
    this.isSideNacCollapsed = data.collapsed;
  }
}
