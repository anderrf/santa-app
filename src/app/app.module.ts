import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentTabComponent } from './components/student-tab/student-tab.component';
import { ClassTabComponent } from './components/class-tab/class-tab.component';
import { CommunityTabComponent } from './components/community-tab/community-tab.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { CommunityPageComponent } from './pages/community-page/community-page.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CommunityAlertsComponent } from './components/community/community-alerts/community-alerts.component';
import { CommunityPartnershipsComponent } from './components/community/community-partnerships/community-partnerships.component';
import { CommunityEventsComponent } from './components/community/community-events/community-events.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    LoginPageComponent,
    MainPageComponent,
    NavbarComponent,
    StudentTabComponent,
    ClassTabComponent,
    CommunityTabComponent,
    InfoBlockComponent,
    CommunityPageComponent,
    BackButtonComponent,
    CommunityAlertsComponent,
    CommunityPartnershipsComponent,
    CommunityEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
