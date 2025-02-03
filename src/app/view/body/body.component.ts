import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, AppComponent, RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() { }
  ngOnInit(): void {

  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body__trimmed';
    }
    else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body__md__screen';
    }
    return styleClass;
  }
}
