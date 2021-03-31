import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Material Module
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';

//FlexLayout Module
import { FlexLayoutModule } from '@angular/flex-layout'

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    SigninComponent, 
    SignupComponent, 
    ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FlexLayoutModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
