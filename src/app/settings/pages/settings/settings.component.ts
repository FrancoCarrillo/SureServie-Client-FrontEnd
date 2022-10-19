import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit  {

  constructor() {}

  enable: boolean = false

  settingsForm = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    telephone_number: new FormControl(),
    id_number: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
  })

  ngOnInit(): void {
    this.settingsForm.disable()
  }

  editForm(): void {
    this.settingsForm.enable()
    this.enable = true
  }

  cancelEditForm(): void {
    this.settingsForm.disable()
    this.enable = false
  }
}
