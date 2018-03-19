import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// HttpModule
import { HttpModule } from '@angular/http';
// FormModule
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

// Header Component
import { HeaderComponent } from './header/header.component';

// Auth Components
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { AuthLoggedOutComponent } from './auth/auth-logged-out/auth-logged-out.component';

// My Api
import { ForumComponent } from './api/forum/forum.component';
import { ForumNewPostComponent } from './api/forum-new-post/forum-new-post.component';
import { ForumDetailsComponent } from './Api/forum-details/forum-details.component';

// Twitch Clips Api Components
import { ClipsListComponent } from './Clips/clips-list/clips-list.component';
import { ClipAllComponent } from './Clips/clip-all/clip-all.component';
import { ClipTodayComponent } from './Clips/clip-today/clip-today.component';
import { ClipWeekComponent } from './Clips/clip-week/clip-week.component';
import { ClipMonthComponent } from './Clips/clip-month/clip-month.component';
import { ApiSearchComponent } from './Clips/api-search/api-search.component';
import { ChannelClipsComponent } from './Clips/channel-clips/channel-clips.component';
import { GameClipsComponent } from './Clips/game-clips/game-clips.component';

// Import RouterModule
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { AuthService } from './services/Auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    AuthLoggedOutComponent,
    ForumComponent,
    ForumNewPostComponent,
    ClipsListComponent,
    ClipAllComponent,
    ClipTodayComponent,
    ClipWeekComponent,
    ClipMonthComponent,
    ChannelClipsComponent,
    GameClipsComponent,
    ApiSearchComponent,
    ForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }