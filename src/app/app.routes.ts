import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { SignInComponent } from './view/sign-in/sign-in.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'signIn', component: SignInComponent},
    { path: '**', redirectTo: 'home' },
];
