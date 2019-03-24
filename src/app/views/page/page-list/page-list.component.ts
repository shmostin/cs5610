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

    uid: String;
    webId: String;
    pages: Page[] = [];


    constructor(private pageServices: PageService , private activatedRoute: ActivatedRoute, private router: Router) { }


    ngOnInit() {
        this.activatedRoute.params.subscribe( (params: any) => {
                console.log('this website id: ' + params['wid']);
                this.webId = params['wid'];
                this.uid = params['uid'];
            }
        );
        this.pages = this.pageServices.findPageByWebsiteId(this.webId);
        console.log('pages length from component: ' + this.pages.length);
    }

}
