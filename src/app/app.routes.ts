import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { SignupComponent } from './view/signup/signup.component';
import { MyTasksComponent } from './view/my-tasks/my-tasks.component';
import { AccessPortalComponent } from './view/access-portal/access-portal.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignupComponent},
    {
        path: 'access-portal', component: AccessPortalComponent, children: [
            { path: '', redirectTo: 'myTasks', pathMatch: 'full' },
            { path: 'mytasks', component: MyTasksComponent, pathMatch: 'full' },
        ]
    },
    { path: '**', redirectTo: 'home' },
];
