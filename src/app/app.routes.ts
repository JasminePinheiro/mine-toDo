import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home' }
];
