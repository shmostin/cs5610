import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
    uid: string;
    pid: string;
    wid: string;
    widgets: Widget[] = [];



    constructor(private widgetservice: WidgetService,
              private route: Router,
              private activeroute: ActivatedRoute) {
  }

    ngOnInit() {

        // fetch userId, pageId and websiteId from url
        this.activeroute.params
            .subscribe(
                (params: any) => {
                    this.wid = params['websiteId'];
                    this.pid = params['pageId'];
                }
            );

        // fetching list of widgets using widget service
        this.widgetservice.findwidgetsByPageId(this.pid)
            .subscribe(
                (data: any) => {
                    this.widgets = data;
                }
            );
    }

    reorderWidgets(indexes) {
        // call widget service function to update widget as per index
        this.widgetservice.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
            .subscribe(
                (data) => console.log(data)
            );
    }

}
