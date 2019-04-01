import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WebsiteService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    // websites: Website[] =
    //     [
    //         new Website('456', 'Facebook', '123', 'Lorem'),
    //         new Website('456', 'Tweeter', '234', 'Lorem'),
    //     ];


    createWebsite(userId, website) {
        var body = {
            name: website.name,
            description: website.description,
            developerId: userId
        };
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, body);
    }

    findAllWebsitesForUser(userId: String) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    }


    findWebsitesByUser(userId: String) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    }

    findWebsiteById(websiteId: String) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId);
    }

    updateWebsite(websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        var body = websiteId;
        return this.http.put(url, body);
    }

    deleteWebsite(websiteId) {
        var url = this.baseUrl + '/api/website' + websiteId;
        return this.http.delete(url);
    }
}
