import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssistComponent } from './assist/assist.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';

import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'assist',
    component: AssistComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AssistComponent,
    LoginComponent,
    LandingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
