import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

    uid: string;
    wid: string;
    pages: Page[];


    constructor(private pageServices: PageService , private activatedRoute: ActivatedRoute, private router: Router) { }


    ngOnInit() {
        this.activatedRoute.params.subscribe( (params: any) => {
                console.log('this website id: ' + params['wid']);
                this.wid = params['wid'];
                this.uid = params['uid'];
            });
        this.pageServices.findPagesByWebsite(this.wid)
            .subscribe(
                pages => this.pages = pages);
        // console.log('pages length from component: ' + this.pages.length);
    }

    createNewPage() {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', 'new']);
    }

    backOnePage() {
        this.router.navigate(['user', this.uid, 'website']);
    }

    getEditPage(pageId) {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', pageId]);
    }

    getWidgetList(pageId) {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', pageId, 'widget']);
    }

}
