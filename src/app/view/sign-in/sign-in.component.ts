import { Component } from '@angular/core';
import { LibHeaderComponent } from '../../core/shared/header/header.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LibHeaderComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
