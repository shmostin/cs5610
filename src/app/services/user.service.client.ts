import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model.client';


// import { User } from '../models/user.model.client';




@Injectable({providedIn: 'root'})
export class UserService {

        constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {}

    baseUrl = environment.baseUrl;
    APIUrl = '/api/user';


    /**
     * adds a user to the users array
     * @param user is the user we want to add to the array.
     */
    createUser(user) {
        return this.http.post(this.baseUrl + this.APIUrl, user);
    }


    /**
     * find the user by their _id.
     * @param userId the _id we are looking for.
     */
    findUserById(userId) {
        return this.http.get(this.baseUrl + this.APIUrl, userId);
    }

    /**
     * find the user by their username.
     * @param username the username we are looking for.
     */
    findUserByUsername(username) {
        return this.http.get(this.baseUrl + this.APIUrl + '?username=' + username);
    }

    /**
     * find the user by their credentials.
     * @param username the username we are looking for.
     * @param password the password we are looking for.
     */
    findUserByCredentials(username, password): Observable<User> {
        return this.http.get(this.baseUrl + this.APIUrl + '?username=' + username + '&password=' + password);
    }


    /**
     * update a user in the array of users.
     * @param userId the _id we are looking for.
     * @param user the user information we want to use as the update.
     */
    updateUser(user) {
        return this.http.put(this.baseUrl + this.APIUrl + '/' + user._id, user);
    }

    /**
     * deletes a user from the array of users.
     * @param userId the _id we are using to find the user.
     */
    deleteUser(userId) {
        return this.http.delete(this.baseUrl + this.APIUrl + '/' + userId);
    }

    register(username: String, password: String) {

        // this.options.withCredentials = true;
        const body = {
            username : username,
            password : password
        };

        return this.http.post(this.baseUrl + '/api/user', body);
    }


    logout() {
        // this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '');
    }
}
