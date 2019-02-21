import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: String;
  password: String;

  login () {

    console.log(this.username);
    console.log(this.password);
  }

  ngOnInit() {
  }

}
