import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';


@Injectable()
export class WebsiteService {

    constructor() {
    }

    websites: Website[] =
        [
            new Website('456', 'Facebook', '123', 'Lorem'),
            new Website('456', 'Tweeter', '234', 'Lorem'),
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


    findWebsiteByUser(userId: String) {
        const websites = [];
        for (let i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerId === userId) {
                websites.push(this.websites[i]);
            }
        }
        return websites;

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
