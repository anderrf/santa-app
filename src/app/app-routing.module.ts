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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
