import { Component, OnInit } from '@angular/core';
import {Widget, WidgetImage} from '../../../../models/widget.model.client';
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
    widget: Widget;
    userId: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    baseUrl: string;

    newWidget: WidgetImage;
    widgetName: string;
    widgetText: string;
    widgetUrl: string;
    widgetWidth: string;

    constructor(private activatedRouter: ActivatedRoute,
                private widgetService: WidgetService,
                private router: Router,
                private sharedService: SharedService) { }

    ngOnInit() {
       this.baseUrl = environment.baseUrl;


       this.activatedRouter.params
           .subscribe(
               (params: any) => {
                   this.userId = params['uid'];
                   this.websiteId = params['wid'];
                   this.pageId = params['pid'];
                   this.widgetId = params['wid'];
               }
           );

       this.widgetService.findWidgetsById(this.widgetId)
           .subscribe(
               (data: any) => this.widget = data,
               (error: any) => console.log(error)
           );
    }

    updateWidget() {
        this.newWidget = new WidgetImage(this.widgetName, undefined, 'IMAGE', this.pageId, this.widgetWidth, this.widgetUrl);
        this.widgetService.updateWidget(this.widgetId, this.newWidget);
        this.router.navigate(['../'], {relativeTo: this.activatedRouter});
    }

    deleteWidget() {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], {relativeTo: this.activatedRouter});
    }
}
