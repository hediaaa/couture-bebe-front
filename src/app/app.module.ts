import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './authentication/login/login.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './authentication/register/register.component';
import {AdminComponent} from './admin/admin.component';
import {PmComponent} from './pm/pm.component';
import {AuthService} from './authentication/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {httpInterceptorProviders} from './authentication/auth/auth-interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {UserService} from './services/user.service';
import {NavbarComponent} from './navbar/navbar.component';
import {CommonModule} from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PmComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  AppRoutingModule,
  CommonModule

  ],
  providers: [AuthService, httpInterceptorProviders, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
