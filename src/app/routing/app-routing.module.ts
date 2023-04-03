import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { TutorialDetailsComponent } from '../tutorial/tutorial-details/tutorial-details.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditorComponent } from '../dashboard/editor/editor.component';
import { UsersComponent } from '../dashboard/users/users.component';
import { TutorialsComponent } from '../dashboard/tutorials/tutorials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tutorials', component: TutorialComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'users', component: UsersComponent },
  { path: 'tutorial-list', component: TutorialsComponent },
  { path: '**', redirectTo: '' } // handle 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
