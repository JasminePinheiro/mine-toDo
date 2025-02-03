import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibHeaderComponent } from '../../core/shared/header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, LibHeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
