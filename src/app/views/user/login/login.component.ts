import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @ViewChild('f') loginForm: NgForm;

    // properties
    username: String;
    password: String;
    errorFlag: boolean;
    errorMsg = 'Invalid username or password';

    title: string;
    disabledFlag: boolean;
    inputText: string;

    constructor(private router: Router) {

        // username: String;
        // password: String;
    }

    login() {
        this.username = this.loginForm.value.username;
        // console.log(this.username);
        // console.log(this.password);
    }

    ngOnInit() {
        this.title = 'This is the login page';
        this.disabledFlag = true;
    }

    // binding click event
    buttonClicked(event: any) {
        console.log(event);
    }

}
