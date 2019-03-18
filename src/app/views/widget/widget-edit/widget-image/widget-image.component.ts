import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

    flag = false;
    widget = {};
    userId: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    baseUrl: string;

    constructor(private activatedRouter: ActivatedRoute,
                private widgetService: WidgetService,
                private router: Router,
                private sharedService: SharedService) { }

    ngOnInit() {
       this.baseUrl = environment.baseUrl;


       this.activatedRouter.params
           .subscribe(
               (params: any) => {
                   this.userId = this.sharedService.user['_id'];
                   this.websiteId = params['websiteId'];
                   this.pageId = params['pageId'];
                   this.widgetId = params['widgetId'];
               }
           );

       this.widgetService.findWidgetsById(this.widgetId)
           .subscribe(
               (data: any) => this.widget = data,
               (error: any) => console.log(error)
           );
    }

    updateWidget() {
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
                (error: any) => console.log(error)
            );
    }

    deleteWidget() {

        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
                (error: any) => console.log(error)
            );
    }
}
