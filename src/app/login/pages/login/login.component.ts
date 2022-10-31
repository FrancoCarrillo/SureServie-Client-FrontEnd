import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {LoginDto} from "../../model/LoginDto";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;

  user: LoginDto = new LoginDto("", "");

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  })

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {

  }


  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(){

    this.loginService.sign_in(this.user).subscribe((response: any) => {

      if(response.roles[0] !== "ROLE_CLIENT")
      {
        alert("Wrong username or password")
        return
      }

      localStorage.setItem("id", response.id)
      this.route.navigate(['/service']).then( () =>{
        location.reload()
        }
      );
    }, () =>{
      alert("Wrong username or password")
    })

  }

}
