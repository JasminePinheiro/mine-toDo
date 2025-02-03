import { Component } from '@angular/core';
import { LibHeaderComponent } from '../../core/shared/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LibHeaderComponent, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
