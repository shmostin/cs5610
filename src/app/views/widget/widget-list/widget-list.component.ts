import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
    uid: string;
    pid: string;
    wid: string;
    widgets: Widget[];
    startIndex: Number;
    endIndex: Number;



    constructor(private widgetservice: WidgetService,
              private router: Router,
              private activeroute: ActivatedRoute,
                private sanitizer: DomSanitizer) {
  }

    ngOnInit() {

        // fetch userId, pageId and websiteId from url
        this.activeroute.params
            .subscribe(
                (params: any) => {
                    this.wid = params['wid'];
                    this.pid = params['pid'];
                    this.uid = params['uid'];
                }
            );
            console.log('ids found: ' + this.wid + ' ' +  this.pid + ' ' + this.uid);
        // fetching list of widgets using widget service
        this.widgetservice.findWidgetsByPageId(this.pid)
            .subscribe(
                (data: any) => {
                    this.widgets = data;
                }
            );
    }

    // reorderWidgets(indexes) {
    //     // call widget service function to update widget as per index
    //     this.widgetservice.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
    //         .subscribe(
    //             (data) => console.log(data)
    //         );
    // }

    makeSafeUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    backOnePage() {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    }

    widgetEdit(widgetId) {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', widgetId]);
    }

    widgetChoose() {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', 'new']);
    }

}
