import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';

@Injectable
export class PageService {

    constructor() {
    }

    pages: Page[] =
        [
            new Page('321', 'Post 1', '456', 'Lorem'),
            new Page('432', 'Post 2', '456', 'Lorem'),
            new Page('543', 'Post 3', '456', 'Lorem'),
        ];


    createPage(websiteId, page) {
        const newPage = {
            _id: (new Date()).getTime() + ' ',
            name: page.name,
            websiteId: page.websiteId,
            title: page.title
        };

        this.pages.push(newPage);
    }

    findPageByWebsiteId(websiteId) {
        const listOfPages = [];
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteId === websiteId) {
                listOfPages.push(this.pages[i]);
            }
        }
        return listOfPages;
    }


    findPageById(pageId) {
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                return this.pages[i];
            }
        }
        return 0;
    }

    updatePage(pageId, page) {
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
               this.pages[i].name = page.name;
               this.pages[i].title = page.title;
            }
        }
    }

   deletePage(pageId) {
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                const cut = +i;
                this.pages.splice(cut, 1);
            }
        }
   }
}
