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
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { ClassAlertsComponent } from './components/class/class-alerts/class-alerts.component';
import { ClassFunctionsListComponent } from './components/class/class-functions-list/class-functions-list.component';
import { ClassPublicNotesComponent } from './components/class/class-public-notes/class-public-notes.component';
import { ClassPrivateNotesComponent } from './components/class/class-private-notes/class-private-notes.component';
import { ClassSchedulesComponent } from './components/class/class-schedules/class-schedules.component';
import { WeekSchedulesComponent } from './components/week-schedules/week-schedules.component';
import { ClassProfessorSchedulesComponent } from './components/class/class-professor-schedules/class-professor-schedules.component';

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
    CommunityEventsComponent,
    ClassPageComponent,
    ClassAlertsComponent,
    ClassFunctionsListComponent,
    ClassPublicNotesComponent,
    ClassPrivateNotesComponent,
    ClassSchedulesComponent,
    WeekSchedulesComponent,
    ClassProfessorSchedulesComponent
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
