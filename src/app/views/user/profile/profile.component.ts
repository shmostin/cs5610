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

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.uid = params['uid'];
                console.log('user id:' + this.uid);
            });

        this.userService.findUserById(this.uid)
            .subscribe((data: any) => {
                this.user = data;
            });
    }
}

    // logout(); {
    //     this.userService.logout()
    //         .subscribe(
    //             (data: any) => this.router.navigate(['/login'])
    //         );
    // }

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
