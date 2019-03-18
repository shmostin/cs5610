import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
    flag = false; // setting error flag as false by default
    error: string;
    alert: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    widget = {};


    constructor(private widgetService: WidgetService, private activeRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.error = 'please enter the name of the widget';
    this.alert = 'Enter the name of the widget';

    this.activeRouter.params
        .subscribe(
            (params: any) => {
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

        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.widget['name'] === undefined) {
            this.flag = true;
        } else {
            this.widgetService.updateWidget(this.widgetId, this.widget)
                .subscribe(
                    (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
                    (error: any) => console.log(error)
                );
        }
    }

    deleteWidget() {

        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
                (error: any) => console.log(error)
            );

    }
}
