import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit  {

  constructor() {}

  disabled = "all"
  ngOnInit(): void {
  }

  settingsForm = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    telephone_number: new FormControl(),
    id_number: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
  })


}
