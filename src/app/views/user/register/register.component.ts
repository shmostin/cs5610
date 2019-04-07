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
    // user: User;
    username: string;
    password: string;
    vpassword: string;
    userErrorFlag: boolean;
    userErrorMsg: string;
    pwdErrorFlag: boolean;
    pwdErrorMsg: string;

    constructor(private _userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.pwdErrorMsg = 'Those passwords do not match!';
        this.userErrorMsg = 'That username is already in use, please select another';
    }


    createUser() {
        const username = this.registerForm.value.username;
        const password = this.registerForm.value.password;
        const user = new User(username, password, '', '', '');
        // this.userService.createUser(user)
        //   .subscribe(
        //     (user) => this.router.navigate(['/user', user._id]));
        this._userService.register(username, password)
            .subscribe(
                (user: any) => {
                    // console.log(data);
                    this.router.navigate(['/user', user._id]);
                    return;
                },
                (error: any) => {
                    // this.error = error._body;
                    console.log(error);
                }
            );

    }
    // register() {
    //     console.log('Attempting Registration');
    //     this.username = this.registerForm.value.username;
    //     this.password = this.registerForm.value.password;
    //     this.vpassword = this.registerForm.value.vpassword;
    //     // this.user = new User(this.username, this.password, '', '', '');
    //     const newUser = {
    //         username: this.username,
    //         password: this.password,
    //         firstName: null,
    //         lastName: null,
    //         email: null
    //     };
    //     this.userErrorFlag = false;
    //     this.pwdErrorFlag = false;
    //
    //     // call user service only if passwords match else show the same error
    //     console.log('Comparing given passwords: ');
    //     console.log(this.password);
    //     console.log(this.vpassword);
    //     if (this.password === this.vpassword) {
    //         console.log('Passwords Matched!');
    //         console.log('Calling findUserByUsername() to check if already exists');
    //         this._userService.findUserByUsername(this.username)
    //             .subscribe(
    //                 (user: any) => {
    //                     console.log('what was found on the database: ' + user);
    //                     if (user != null) {
    //                         this.userErrorFlag = true;
    //                     } else {
    //                         console.log('calling createUser from register component');
    //                         console.log('user being sent to the db: ' + JSON.stringify(newUser));
    //                         this._userService.createUser(newUser)
    //                             .subscribe(
    //                                 (resUser: any) => {
    //                                     console.log('newUser returned from the database req: ' + resUser);
    //                                     this.router.navigate(['/', 'login']);
    //                                 },
    //                                 (error: any) => {
    //                                     console.log(error);
    //                                 });
    //                     }
    //                 });
    //     } else {
    //         this.pwdErrorFlag = true;
    //     }
    // }




}
