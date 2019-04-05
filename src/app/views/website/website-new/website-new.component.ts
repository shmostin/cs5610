import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
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
    website: Website;
    websites: Website[];


    constructor(private websiteService: WebsiteService,
                private activatedRoute: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {

        this.activatedRoute.params.subscribe(
            (params: any) => {
            this.uid = params['uid'];
        });
    }

    createWebsite() {
        console.log('from the form: ');
        console.log(this.webForm.value.newName);
        console.log(this.webForm.value.newDescription);
        // const website = new Website(this.webForm.value.newName, this.uid, this.webForm.value.newDescription);
        this.website.name = this.webForm.value.newName;
        this.website.developerId = this.uid;
        this.website.description = this.webForm.value.newDescription;

        this.websiteService.createWebsite(this.uid, this.website)
            .subscribe(
                (data: any) => {
                    this.website = data;
                    console.log('new website: ' + this.website._id + ' ' + this.website.name);
                    this.router.navigate(['/user', this.uid, 'website']);
                }
            );
    }

}
