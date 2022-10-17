import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SureService-FrontEnd';


  onLogin = false;

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

  ngOnInit(): void {
    this.onLogin = localStorage.getItem("id") != null;
  }


}
