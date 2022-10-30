import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {SignUpDto} from "../../model/SignUpDto";
import {SignupService} from "../../services/signup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  hide_confirm = true;

  newUser: SignUpDto = new SignUpDto("", "", "", "", "", "", "");


  signUp = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    telephone_number: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
  })


  constructor(private signupService: SignupService, private route: Router) { }

  ngOnInit(): void {
  }


  get username() {
    return this.signUp.get('username');
  }
  get email() {
    return this.signUp.get('email');
  }
  get password() {
    return this.signUp.get('password');
  }
  get confirm_password() {
    return this.signUp.get('confirm_password');
  }
  get name() {
    return this.signUp.get('name');
  }
  get last_name() {
    return this.signUp.get('last_name');
  }
  get telephone_number() {
    return this.signUp.get('telephone_number');
  }
  get dni() {
    return this.signUp.get('dni');
  }

  registerUser(): void {
    this.newUser.username = this.signUp.get("username")?.value;
    this.newUser.email = this.signUp.get("email")?.value;
    this.newUser.password = this.signUp.get("password")?.value;
    this.newUser.name = this.signUp.get("name")?.value;
    this.newUser.last_name = this.signUp.get("last_name")?.value;
    this.newUser.telephone_number = this.signUp.get("telephone_number")?.value;
    this.newUser.dni = this.signUp.get("dni")?.value;

    if(this.signUp.status == "VALID"){
      if(this.password?.value != this.confirm_password?.value) {
        alert("Passwords doesn't match")
        return
      }

      this.signupService.sign_up(this.newUser).subscribe((response: any) =>{
        localStorage.setItem("id", response.id)
        this.route.navigate(['/service']).then( () =>{
            location.reload()
          }
        );
      }, () =>{
        alert("Bad Information")
      })

    } else {
      alert("Missing Information")
    }

  }

}
