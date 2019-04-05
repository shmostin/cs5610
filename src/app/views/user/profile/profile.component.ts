import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @ViewChild('f') profileForm: NgForm;
    username: string;
    user: User;
    uid: string;

    constructor(private userService: UserService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.user = new User('', '', '', '');
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                console.log('profile component: ' + params);
                this.uid = params['uid'];
                console.log('userId: ' + this.uid);
            });
        this.userService.findUserById(this.uid)
            .subscribe(
                user => this.user = user);
    }

    saveInfoAndGetWebsites() {
        const username = this.profileForm.value.username;
        const firstname = this.profileForm.value.firstName;
        const lastname = this.profileForm.value.lastName;
        const newUser = new User(username, this.user.password, firstname, lastname);
        this.userService.updateUserById(this.user._id, newUser)
            .subscribe(
                () => this.router.navigate(['/user', this.uid, 'website']));
    }


    logout() {
        this.userService.logout()
            .subscribe(
                (data: any) => this.router.navigate(['/login'])
            );
    }
}

    // getUser() {
    //     this.user = this.sharedService.user;
    //     this.username = this.user['username'];
    //     this.firstName = this.user['firstName'];
    //     this.lastName = this.user['lastName'];
    //     this.email = this.user['email'];
    //     this.userId = this.user['_id'];
    // }

    // updateUser() {
    //     const updatedUser = {
    //         _id: this.user['_id'],
    //         username: this.username,
    //         firstName: this.firstName,
    //         lastName: this.lastName,
    //         email: this.email
    //
    //     };
    //
    //     this.userService.updateUser(updatedUser)
    //         .subscribe(
    //             (data: any) => {
    //                 this.user = data;
    //             },
    //             (error: any) => this.errorFlag = true
    //         );
    // }

// }
