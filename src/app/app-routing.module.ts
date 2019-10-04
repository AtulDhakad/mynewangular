





import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//layout components
import {AdminLayoutComponent} from './views/layout/admin-layout/admin-layout.component'
import { WebLayoutComponent } from './views/layout/web-layout/web-layout.component';

//pages components
import { DashboardComponent } from './views/admin-template/dashboard/dashboard.component';
import { RegisterComponent } from './views/admin-template/register/register.component';
import { LoginComponent } from './views/admin-template/login/login.component';
import { UsersComponent } from './views/admin-template/users/users.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //Site routes goes here 
  { 
    path: '', 
    component: WebLayoutComponent,
    // children: [
    //   { path: '', component: HomeComponent, pathMatch: 'full'},
    //   { path: 'about', component: AboutComponent },
    //   { path: 'test/:id', component: AboutComponent }
    // ]
},{ 
    path: 'admin',
    component: AdminLayoutComponent, 
    canActivate:[AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent }
    ]
},

//no layout routes
{ path: 'admin/login', component: LoginComponent},
{ path: 'admin/register', component: RegisterComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
