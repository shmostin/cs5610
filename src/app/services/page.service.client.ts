import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class PageService {

    constructor(private http: HttpClient) {
    }

    base_url = environment.baseUrl;


    // pages: Page[] =
    //     [
    //         new Page('321', 'Post 1', '456', 'Lorem'),
    //         new Page('432', 'Post 2', '456', 'Lorem'),
    //         new Page('543', 'Post 3', '456', 'Lorem'),
    //     ];


    createPage(websiteId: string, page: Page) {
        return this.http.post<Page>(this.base_url + '/api/website/' + websiteId + '/page', page);
    }

    findAllPagesForWebsite(websiteId: string) {
        // const listOfPages = [];
        // for (let i = 0; i < this.pages.length; i++) {
        //     if (this.pages[i].websiteId === websiteId) {
        //         listOfPages.push(this.pages[i]);
        //     }
        // }
        // return listOfPages;
        console.log('calling page.service.server from page.service.client');
        return this.http.get(this.base_url + '/api/website/' + websiteId + '/page');
    }


    findPageById(pageId: string) {
        // for (let i = 0; i < this.pages.length; i++) {
        //     if (this.pages[i]._id === pageId) {
        //         return this.pages[i];
        //     }
        // }
        return this.http.get(this.base_url + '/api/page/' + pageId);
    }

    updatePage(pageId: string, page: Page) {
        // for (let i = 0; i < this.pages.length; i++) {
        //     if (this.pages[i]._id === pageId) {
        //        this.pages[i].name = page.name;
        //        this.pages[i].title = page.title;
        //     }
        // }
        return this.http.put(this.base_url + '/api/page/' + pageId, Page);
    }

   deletePage(pageId) {
        // for (let i = 0; i < this.pages.length; i++) {
        //     if (this.pages[i]._id === pageId) {
        //         const cut = +i;
        //         this.pages.splice(cut, 1);
        //     }
        // }
       return this.http.delete(this.base_url + '/api/page/' + pageId);
   }
}
