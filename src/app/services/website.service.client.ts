import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';




@Injectable
export class WebsiteService {

    constructor() {
    }

    websites: Website[] =
        [
            new Website('123', 'Facebook', '456', 'Lorem'),
            new Website('234', 'Tweeter', '456', 'Lorem'),
            new Website('456', 'Gizmodo', '456', 'Lorem'),
            new Website('890', 'Go', '123', 'Lorem'),
            new Website('567', 'Tic Tac Toe', '123', 'Lorem'),
            new Website('678', 'Checkers', '123', 'Lorem'),
            new Website('789', 'Chess', '234', 'Lorem'),
        ];


    createWebsite(userId, website) {
        const aWebsite: Website = {
            _id: website._id,
            name: website.name,
            developerId: website.developerId,
                description: website.description
        };
        this.websites.push(aWebsite);
    }


    findWebsiteByUser(userId) {
        for (let i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerId === userId) {
                return this.websites[i];
            }
        }
    }

    findWebsiteById(websiteId: String) {
        for (let i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    }

    updateWebsite(websiteId, website) {
        for (let i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i].name = website.name;
                this.websites[i].description = website.description;
            }
        }
    }

    deleteWebsite(websiteId) {
        for (let i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites.splice(i, 1);
            }
        }
    }
}
