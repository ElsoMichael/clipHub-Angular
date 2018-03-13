import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Header Component
import { HeaderComponent } from './header/header.component';

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
    ClipsListComponent,
    ClipAllComponent,
    ClipTodayComponent,
    ClipWeekComponent,
    ClipMonthComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }