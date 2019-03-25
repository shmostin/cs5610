import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget, WidgetYoutube} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

    flag = false; // setting error flag as false by default
    error: string;
    alert: string;

    wid: string;
    pid: string;
    uid: string;
    widgetId: string;

    newWidget: WidgetYoutube;
    widgetName: string;
    widgetText: string;
    widgetUrl: string;
    widgetWidth: string;
    widget: Widget;

    constructor(private widgetService: WidgetService, private activatedRouter: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {

        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';

        // fetch ids from current url
        this.activatedRouter.params
            .subscribe(
                (params: any) => {
                    this.wid = params['wid'];
                    this.pid = params['pid'];
                    this.widgetId = params['wid'];
                    this.uid = params['uid'];
                }
            );

        // fetch widget values as created on widget-new component
        this.widgetService.findWidgetsById(this.widgetId)
            .subscribe(
                (data: any) => this.widget = data,
                (error: any) => console.log(error)
            );
    }

    updateWidget() {
        this.newWidget = new WidgetYoutube(this.widgetName, undefined, this.widgetId, this.pid, this.widgetWidth, this.widgetUrl);

    }

    deleteWidget() {

        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                (data: any) => this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']),
                (error: any) => console.log(error)
            );

    }
}
