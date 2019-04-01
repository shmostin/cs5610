import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {extractStyleParams} from '@angular/animations/browser/src/util';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

    userId: String;
    websites: Website[] = [];


    constructor(private websiteService: WebsiteService , private activatedRoute: ActivatedRoute) { }


    ngOnInit() {
      this.activatedRoute.params.subscribe( (params: any) => {
          this.userId = params['uid'];
      }
      );
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe((data: any) => {
                this.websites = data;
                console.log('userId from the weblistComp: ' + this.userId);
                console.log('website list length: ' + this.websites.length);

            });
    }
}
