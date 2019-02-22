import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

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

    constructor(private userService: UserService, private router: Router) {

        // username: String;
        // password: String;
    }

    login() {
        this.username = this.loginForm.value.username;
        // console.log(this.username);
        // console.log(this.password);

        const user: User = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['/user', user._id]);
        }
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
