import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
    selector: 'app-website-new',
    templateUrl: './website-new.component.html',
    styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
    @ViewChild('f') webForm: NgForm;
    uid: string;
    wid: string;
    name: string;
    description: string;
    websites: Website[] = [];


    constructor(private websiteService: WebsiteService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

        this.activatedRoute.params.subscribe((params: Params) => {
            this.uid = params['uid'];
            this.wid = params['wid'];
        });
        this.websiteService.findAllWebsitesForUser(this.uid)
            .subscribe((data: any) => {
                this.websites = data;
            });
    }

    create() {
        const website = new Website(undefined, this.name, undefined, this.description)
        this.websiteService.createWebsite(this.uid, website);
    }

}
