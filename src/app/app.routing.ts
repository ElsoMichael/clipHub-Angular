import { Routes } from '@angular/router';

// Components
import { ClipsListComponent } from './Clips/clips-list/clips-list.component';
import { ClipAllComponent } from './Clips/clip-all/clip-all.component';
import { ClipTodayComponent } from './Clips/clip-today/clip-today.component';
import { ClipWeekComponent } from './Clips/clip-week/clip-week.component';
import { ClipMonthComponent } from './Clips/clip-month/clip-month.component';
import { ApiSearchComponent } from './Clips/api-search/api-search.component';
import { ChannelClipsComponent } from './Clips/channel-clips/channel-clips.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { AuthLoggedOutComponent } from './auth/auth-logged-out/auth-logged-out.component';
import { GameClipsComponent } from './Clips/game-clips/game-clips.component';

// Path's
export const routes: Routes = [
  { path: '', component: ClipsListComponent },
  { path: 'all', component: ClipAllComponent },
  { path: 'today', component: ClipTodayComponent },
  { path: 'week', component: ClipWeekComponent },
  { path: 'month', component: ClipMonthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logmeout', component: AuthLoggedOutComponent },
  { path: 'search', component: ApiSearchComponent },
  { path: 'channel/:id', component: ChannelClipsComponent },
  { path: 'game/:slug', component: GameClipsComponent },
  { path: '**', redirectTo: '' }
];