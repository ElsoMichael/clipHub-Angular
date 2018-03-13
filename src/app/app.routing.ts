import { Routes } from '@angular/router';

// Components
import { ClipsListComponent } from './Clips/clips-list/clips-list.component';
import { ClipAllComponent } from './Clips/clip-all/clip-all.component';
import { ClipTodayComponent } from './Clips/clip-today/clip-today.component';
import { ClipWeekComponent } from './Clips/clip-week/clip-week.component';
import { ClipMonthComponent } from './Clips/clip-month/clip-month.component';

// Path's
export const routes: Routes = [
    { path: '', component: ClipsListComponent },
    { path: 'all', component: ClipAllComponent },
    { path: 'today', component: ClipTodayComponent },
    { path: 'week', component: ClipWeekComponent },
    { path: 'month', component: ClipMonthComponent },
    { path: '**', redirectTo: '' }
];