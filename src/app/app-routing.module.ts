import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './services/auth.guard';
import { NotAuthGuard } from './services/not-auth.guard';
import { StudentTabComponent } from './components/student-tab/student-tab.component';
import { ClassTabComponent } from './components/class-tab/class-tab.component';
import { CommunityTabComponent } from './components/community-tab/community-tab.component';
import { CommunityPageComponent } from './pages/community-page/community-page.component';
import { CommunityAlertsComponent } from './components/community/community-alerts/community-alerts.component';
import { CommunityPartnershipsComponent } from './components/community/community-partnerships/community-partnerships.component';
import { CommunityEventsComponent } from './components/community/community-events/community-events.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { ClassFunctionsListComponent } from './components/class/class-functions-list/class-functions-list.component';
import { ClassAlertsComponent } from './components/class/class-alerts/class-alerts.component';
import { ClassPublicNotesComponent } from './components/class/class-public-notes/class-public-notes.component';
import { ClassPrivateNotesComponent } from './components/class/class-private-notes/class-private-notes.component';
import { ClassSchedulesComponent } from './components/class/class-schedules/class-schedules.component';
import { ClassProfessorSchedulesComponent } from './components/class/class-professor-schedules/class-professor-schedules.component';

const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'menu',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        'path': '',
        pathMatch: 'full',
        redirectTo: '/menu/aluno'
      },
      {
        'path': 'aluno',
        component: StudentTabComponent
      },
      {
        'path': 'turma',
        component: ClassTabComponent
      },
      {
        'path': 'comunidade',
        component: CommunityTabComponent
      }
    ]
  },
  {
    path: 'comunidade',
    component: CommunityPageComponent,
    children: [
      {
        path: '',
        redirectTo: '/comunidade/avisos',
        pathMatch: 'full'
      },
      {
        path: 'avisos',
        component: CommunityAlertsComponent
      },
      {
        path: 'parcerias',
        component: CommunityPartnershipsComponent
      },
      {
        path: 'eventos',
        component: CommunityEventsComponent
      }
    ]
  },
  {
    path: 'turma/:classId',
    component: ClassPageComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ClassFunctionsListComponent
      },
      {
        path: 'avisos',
        component: ClassAlertsComponent
      },
      {
        path: 'chat-turma',
        component: ClassPrivateNotesComponent
      },
      {
        path: 'chat-professor',
        component: ClassPublicNotesComponent
      },
      {
        path: 'horarios-turma',
        component: ClassSchedulesComponent
      },
      {
        path: 'horarios-professor',
        component: ClassProfessorSchedulesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
