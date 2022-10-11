import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { ReservationComponent } from './reservation/pages/reservation/reservation.component';
import { LoginComponent } from './login/pages/login/login.component';
import { ServiceComponent } from './service/pages/service/service.component';
import { SettingsComponent } from './settings/pages/settings/settings.component';
import { SignupComponent } from './singup/pages/signup/signup.component';
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    LoginComponent,
    ServiceComponent,
    SettingsComponent,
    SignupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
