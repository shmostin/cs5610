import {Component, OnInit} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
    selector: 'app-website-edit',
    templateUrl: './website-edit.component.html',
    styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

    uid: String;
    wid: String;
    name: String;
    website = {
        _id: '',
        name: '',
        developerId: '',
        description: ''
    };
    websites = [];


    constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {
        this.activatedRoute.params.subscribe((params: any) => {
            console.log('params from web-edit page: ' + params.toString());
            this.uid = params['uid'];
            this.wid = params['wid'];
        });
        this.websiteService.findWebsiteById(this.wid).
        subscribe(data => {
            this.website = JSON.parse(JSON.stringify(data));
            console.log(this.website);
        });
    }


    update() {
        this.websiteService.updateWebsite(this.wid, new Website(this.wid, this.name, this.uid, this.website.description));
    }

    delete() {
        this.websiteService.deleteWebsite(this.wid);
    }


}
