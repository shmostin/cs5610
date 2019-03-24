import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {User} from '../../../models/user.model.client';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    username: String;
    firstName: String;
    lastName: String;
    email: String;
    user = User;
    userId: String;
    errorFlag: boolean;
    errorMsg = 'Invalid username or password !';

    constructor(private userService: UserService,
                private router: Router,
                private sharedService: SharedService,
                private activatedRoute: ActivatedRoute) {
    }


    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.userId = params['uid'];
                console.log('user id: ' + this.userId);
            });
        this.user = this.userService.findUserById(this.userId);
        this.username = this.user['username'];
    }

    logout() {
        this.userService.logout()
            .subscribe(
                (data: any) => this.router.navigate(['/login'])
            );
    }

    getUser() {
        this.user = this.sharedService.user;
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
        this.userId = this.user['_id'];
    }

    updateUser() {
        const updatedUser = {
            _id: this.user['_id'],
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email

        };

        this.userService.updateUser(updatedUser)
            .subscribe(
                (data: any) => {
                    this.user = data;
                },
                (error: any) => this.errorFlag = true
            );
    }

}
