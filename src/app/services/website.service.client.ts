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
        console.log('client side createWebsite');
        return this.http.post<Website>(this.baseUrl + '/api/user/' + userId + '/website', website);
    }

    findAllWebsitesForUser(userId: String) {
        return this.http.get<Website[]>(this.baseUrl + '/api/user/' + userId + '/website');
    }


    findWebsitesByUser(userId: String) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website');
    }

    findWebsiteById(userId, websiteId) {
        console.log('looking for websiteById');
        return this.http.get<Website>(this.baseUrl + '/api/user/' + userId + '/website/' + websiteId);
    }

    updateWebsite(userId, websiteId, website) {
        console.log('front end website service updateWebsite Called');
        const url = this.baseUrl + '/api/user/' + userId + '/website/' + websiteId;
        // const body = websiteId;
        return this.http.put<Website>(url, website);
    }

    deleteWebsite(websiteId) {
        var url = this.baseUrl + '/api/website' + websiteId;
        return this.http.delete(url);
    }
}
