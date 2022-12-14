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
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import  {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { TechnicianInfoComponent } from './dialog/technician-info/technician-info.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from "@angular/material/grid-list";
import { ReservationInfoComponent } from './dialog/reservation-info/reservation-info.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";
import { AppointmentComponent } from './appointment/pages/appointment/appointment.component';
import { RateTechnicianComponent } from './dialog/rate-technician/rate-technician.component';
import {MatSliderModule} from "@angular/material/slider";
import { ChangePasswordComponent } from './dialog/change-password/pages/change-password/change-password.component';
import { UpdateImageComponent } from './dialog/update-image/pages/update-image/update-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    LoginComponent,
    ServiceComponent,
    SettingsComponent,
    SignupComponent,
    TechnicianInfoComponent,
    ReservationInfoComponent,
    AppointmentComponent,
    RateTechnicianComponent,
    ChangePasswordComponent,
    UpdateImageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatNativeDateModule,
    FormsModule,
    MatChipsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// @ts-ignore
export class AppModule { }
