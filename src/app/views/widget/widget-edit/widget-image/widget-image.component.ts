import {Component, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../../services/shared.service';
import {environment} from '../../../../../environments/environment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
    @ViewChild('f') widgetForm: NgForm;
    flag = false;
    widget: Widget;
    uid: string;
    wid: string;
    pid: string;
    widgetId: string;
    baseUrl: string;

    newWidget: Widget;
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
                   this.uid = params['uid'];
                   this.wid = params['wid'];
                   this.pid = params['pid'];
                   this.widgetId = params['wid'];
               }
           );

       this.widgetService.findWidgetById(this.pid, this.widgetId)
           .subscribe(
               (data: any) => this.widget = data,
               (error: any) => console.log(error)
           );
    }

    backOnePage() {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }

    updateWidget() {
        console.log('updateWidget called from the client');
        const text = this.widgetForm.value.widgetText;
        const url = this.widgetForm.value.url;
        const width = this.widgetForm.value.width;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;

        // this.newWidget = new WidgetImage(this.widgetName, undefined, 'IMAGE', this.pageId, this.widgetWidth, this.widgetUrl);
        // this.router.navigate(['../'], {relativeTo: this.activatedRouter});

        this.widgetService.updateWidget(this.pid, this.widgetId, this.widget)
            .subscribe(
                () => this.backOnePage()
            );
    }

    deleteWidget() {
        this.widgetService.deleteWidget(this.pid, this.widgetId)
            .subscribe(
                () => this.backOnePage()
            );
        // this.router.navigate(['../'], {relativeTo: this.activatedRouter});
    }

    getWidgetText() {
        return this.widget.text;
    }

    getWidgetWidth() {
        return this.widget.width;
    }

    getWidgetUrl() {
        return this.widget.url;
    }
}
