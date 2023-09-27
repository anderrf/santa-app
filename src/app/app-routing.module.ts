import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './services/auth.guard';
import { NotAuthGuard } from './services/not-auth.guard';

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
    path: 'main',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
