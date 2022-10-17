import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SureService-FrontEnd';
  showFiller = true;
  navItem = [
    {
      "title": "Service",
      "router":"service",
      "icon": "assignment"
    },
    {
      "title": "Reservation",
      "router":"reservation",
      "icon": "schedule"
    },
    {
      "title": "Settings",
      "router":"settings",
      "icon": "settings"
    }
  ]

}
