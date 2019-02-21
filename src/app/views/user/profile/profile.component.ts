import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User;

    constructor(private userService: UserService, private route: ActivatedRoute) {
        this.user = new User('111', 'alice', 'alice', 'alice', 'alice', 'a@a.com');
    }

    updateUser(user) {
        console.log(this.user.username);
        console.log(this.user.firstName);
        console.log(this.user.lastName);

        this.userService.updateUser(this.user._id, user);
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.user._id = params['uid'];
            console.log('user id: ' + this.user._id);
        });
        this.user = this.userService.findUserById(this.user._id);

    }

}
