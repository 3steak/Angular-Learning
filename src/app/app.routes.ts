import { Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'profile/:username', component: ProfileComponent },
];
