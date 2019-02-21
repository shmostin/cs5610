import {Injectable} from '@angular/core';
import { User } from '../models/user.model.client';




@Injectable
export class UserService {

        constructor() {}

     users: User[] =
        [
            new User('123', 'alice', 'alice', 'alice', 'alice', 'a@a.com'),
            new User('234', 'bob', 'bob', 'bob', 'bob', 'b@b.com'),
            new User('345', 'charly', 'charly', 'charly', 'charly', 'c@c.com'),
            new User('456', 'jannunzi', 'jannunzi', 'jannunzi', 'jannunzi', 'j@j.com'),

        ];


    /**
     * adds a user to the users array
     * @param user is the user we want to add to the array.
     */
    createUser(user: User) {
        this.users.push(new User(user._id, user.username, user.password, user.firstName, user.lastName, user.email));
    }


    /**
     * find the user by their _id.
     * @param userId the _id we are looking for.
     */
    findUserById(userId) {
        for (const entry of this.users) {
            if (entry._id === userId) {
                return entry;
            }
        }
    }

    /**
     * find the user by their username.
     * @param username the username we are looking for.
     */
    findUserByUsername(username) {
        for (const entry of this.users) {
            if (entry.username === username) {
                return entry;
            }
        }
    }

    /**
     * find the user by their credentials.
     * @param username the username we are looking for.
     * @param password the password we are looking for.
     */
    findUserByCredentials(username, password) {
        for (const entry of this.users) {
            if (entry.username === username && entry.password === password) {
                return entry;
            }
        }
    }


    /**
     * update a user in the array of users.
     * @param userId the _id we are looking for.
     * @param user the user information we want to use as the update.
     */
    updateUser(userId, user) {
        for (const entry of this.users) {
            if (entry._id === userId) {
                entry.firstName = user.firstName;
                entry.lastName = user.lastName;
                return entry;
            }
        }
    }

    /**
     * deletes a user from the array of users.
     * @param userId the _id we are using to find the user.
     */
    deleteUser(userId) {
        for (const entry in this.users) {
            if (this.users[entry]._id === userId) {
                const j = +entry;
              this.users.splice(j, 1);
            }
        }
    }
}
