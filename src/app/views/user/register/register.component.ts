import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @ViewChild('f') registerForm: NgForm;

    // properties
    user: User;
    username: string;
    password: string;
    vpassword: string;
    userErrorFlag: boolean;
    userErrorMsg: string;
    pwdErrorFlaf: boolean;
    pwdErrorMsg: string;

    constructor(private _userService: UserService, private router: Router) {
    }



    register() {

        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.vpassword = this.registerForm.value.vpassword;
        this.userErrorFlag = false;
        this.pwdErrorFlaf = false;

        // call user service only if passwords match else show the same error
        if (this.password === this.vpassword) {
            this._userService.findUserByUsername(this.username)
                .subscribe(
                    (user: any) => {
                        if (user != null) {
                            this.userErrorFlag = true;
                        } else {
                            return this._userService.createUser(this.user)
                                .subscribe(
                                    (newUser: any) => {
                                        this.router.navigate(['/user', newUser._id]);
                                    });
                        }
                    });
        } else {
            this.pwdErrorFlaf = true;
        }
    }

    ngOnInit() {
        this.pwdErrorMsg = 'Those passwords do not match!';
        this.userErrorMsg = 'That username is already in use, please select another';
        this.user = new User(undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined);
    }
}
