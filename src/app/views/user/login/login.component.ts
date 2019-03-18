import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import 'rxjs/Rx';
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

       this.errorFlag = false;
    }

    login() {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;

        console.log('username: ' + this.username);
        console.log('password: ' + this.password);

        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe((user: User) => {
                if (user) {
                    console.log(user);
                    console.log('made it here');

                    this.router.navigate(['/user', user._id]);
                } else {
                    console.log('That password was incorrect');
                    this.errorFlag = true;
                }
            }
            );
    }

    ngOnInit() {
        this.title = 'This is the login page';
    }


}
