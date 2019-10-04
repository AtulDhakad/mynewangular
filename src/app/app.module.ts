
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './views/layout/admin-layout/admin-layout.component';
import { WebLayoutComponent } from './views/layout/web-layout/web-layout.component';
import { HeaderComponent } from './views/admin-template/header/header.component';
import { FooterComponent } from './views/admin-template/footer/footer.component';
import { SidebarComponent } from './views/admin-template/sidebar/sidebar.component';
import { DashboardComponent } from './views/admin-template/dashboard/dashboard.component';
import { LoginComponent } from './views/admin-template/login/login.component';
import { RegisterComponent } from './views/admin-template/register/register.component';
import { UsersComponent } from './views/admin-template/users/users.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MzSidenavModule } from 'ngx-materialize'
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { SidebarModule } from 'ng-sidebar';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { PaginationModule,CarouselModule} from 'ngx-bootstrap';
import { HomeComponent } from './views/website-template/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WebLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MzSidenavModule,
    SidebarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
