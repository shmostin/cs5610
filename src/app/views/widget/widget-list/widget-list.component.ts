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

    widgets = [{}];
    widget = {};
    websiteId: string;
    pageId: string;


    constructor(private widgetservice: WidgetService,
              private route: Router,
              private activeroute: ActivatedRoute) {
  }

    ngOnInit() {

        // fetch userId, pageId and websiteId from url
        this.activeroute.params
            .subscribe(
                (params: any) => {
                    this.websiteId = params['websiteId'];
                    this.pageId = params['pageId'];
                }
            );

        // fetching list of widgets using widget service
        this.widgetservice.findwidgetsByPageId(this.pageId)
            .subscribe(
                (data: any) => {
                    this.widgets = data;
                }
            );
    }

    reorderWidgets(indexes) {
        // call widget service function to update widget as per index
        this.widgetservice.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(
                (data) => console.log(data)
            );
    }

}
