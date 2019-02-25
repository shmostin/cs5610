import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

    webId: String;
    pages = [{}];


    constructor(private pageServices: PageService , private activatedRoute: ActivatedRoute) { }


    ngOnInit() {
        this.activatedRoute.params.subscribe( (params: any) => {
                console.log('this website id: ' + params['wid']);
                this.webId = params['wid'];
            }
        );
        this.pages = this.pageServices.findPageByWebsiteId(this.webId);
        console.log('pages length from component: ' + this.pages.length);
    }

}
