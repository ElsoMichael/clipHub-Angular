import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Header Component
import { HeaderComponent } from './header/header.component';

// Auth Components
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

// Form
import { FormsModule } from "@angular/forms";

// Twitch Clips Api Components
import { ClipsListComponent } from './Clips/clips-list/clips-list.component';
import { ClipAllComponent } from './Clips/clip-all/clip-all.component';
import { ClipTodayComponent } from './Clips/clip-today/clip-today.component';
import { ClipWeekComponent } from './Clips/clip-week/clip-week.component';
import { ClipMonthComponent } from './Clips/clip-month/clip-month.component';

// Import RouterModule
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ClipsListComponent,
    ClipAllComponent,
    ClipTodayComponent,
    ClipWeekComponent,
    ClipMonthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }