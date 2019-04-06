import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-website-edit',
    templateUrl: './website-edit.component.html',
    styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
    @ViewChild('f') websiteForm: NgForm;
    uid: String;
    wid: String;
    name: String;
    previousWebsite: Website;
    websites = [];


    constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.previousWebsite = new Website('', '', '');
    }


    ngOnInit() {
        this.activatedRoute.params.subscribe((params: any) => {
            console.log('params from web-edit page: ' + JSON.stringify(params));
            this.uid = params['uid'];
            this.wid = params['wid'];
        });
        this.websiteService.findWebsiteById(this.uid, this.wid).
        subscribe(
            website => this.previousWebsite = website);
    }

    backOnePage() {
        this.router.navigate(['/user', this.uid, 'website']);
    }

    update() {
        const website = new Website(this.websiteForm.value.newName, this.uid, this.websiteForm.value.newDescription)
        this.websiteService.updateWebsite(this.uid, this.wid, website)
            .subscribe(
                () => this.backOnePage()
            );
    }

    delete() {
        this.websiteService.deleteWebsite(this.wid)
            .subscribe(
                () => this.backOnePage()
            );
    }

    getOldWebName() {
        return this.previousWebsite.name;
    }

    getOldWebDescriptoin() {
        return this.previousWebsite.description;
    }



}
