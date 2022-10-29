import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ReservationComponent} from "./reservation/pages/reservation/reservation.component";
import {ServiceComponent} from "./service/pages/service/service.component";
import {SettingsComponent} from "./settings/pages/settings/settings.component";
import {LoginComponent} from "./login/pages/login/login.component";
import {SignupComponent} from "./singup/pages/signup/signup.component";
import {AuthGuard} from "./share/guard/auth.guard";
import {LoginGuard} from "./share/guard/login.guard";
import {AppointmentComponent} from "./appointment/pages/appointment/appointment.component";

const routes: Routes = [
  { path: 'service', component: ServiceComponent, canActivate: [AuthGuard]},
  { path: 'reservation', component: ReservationComponent, canActivate: [AuthGuard]},
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard]},
  { path: 'log-in', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'sing-up', component: SignupComponent, canActivate: [LoginGuard]},
  { path: '', redirectTo: '/service', pathMatch: 'full'},
  { path: '/', redirectTo: '/service', pathMatch: 'full'},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
