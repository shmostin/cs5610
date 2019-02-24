import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {extractStyleParams} from '@angular/animations/browser/src/util';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

    userId: String;
    websites = [{}];


    constructor(private websiteService: WebsiteService , private activatedRoute: ActivatedRoute) { }


    ngOnInit() {
      this.activatedRoute.params.subscribe( (params: any) => {
          console.log(params['uid']);
          this.userId = params['uid'];
      }
      );
        this.websites = this.websiteService.findWebsiteByUser(this.userId);
        console.log('userId from the component: ' + this.userId);
        console.log(this.websites.length);
    }
}
