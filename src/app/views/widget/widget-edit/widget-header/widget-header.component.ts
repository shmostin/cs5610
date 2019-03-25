import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget, WidgetHeading} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
    flag = false; // setting error flag as false by default
    error: string;
    alert: string;
    wid: string;
    pid: string;
    uid: string;
    widgetId: string;
    widget: Widget;

    newWidget: WidgetHeading;
    widgetName: string;
    widgetSize: number;
    widgetText: string;



    constructor(private widgetService: WidgetService, private activeRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.error = 'please enter the name of the widget';
    this.alert = 'Enter the name of the widget';

    this.activeRouter.params
        .subscribe(
            (params: any) => {
              this.wid = params['wid'];
              this.pid = params['pid'];
              this.uid = params['uid'];
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
        this.newWidget = new WidgetHeading(this.widgetName, undefined, 'HEADING', this.pid, this.widgetSize, this.widgetText);
        this.widgetService.createWidget(this.pid, this.newWidget);
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
