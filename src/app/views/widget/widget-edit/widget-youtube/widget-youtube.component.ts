import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

    @ViewChild('f') widgetForm: NgForm;
    flag = false;
    error: string;
    alert: string;

    wid: string;
    pid: string;
    uid: string;
    widgetId: string;

    newWidget: Widget;
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

    backOnePage() {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }


    updateWidget() {
        const text = this.widgetForm.value.widgetName;
        const url = this.widgetForm.value.widgetUrl;
        const width = this.widgetForm.value.widgetWidth;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;
        this.widgetService.updateWidget(this.widgetId, this.widget)
            .subscribe(
                () => this.backOnePage()
            );
    }

    deleteWidget() {

        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                () => this.backOnePage()
            );
    }

    getWidgetText() {
        return this.widget.text;
    }

    getWidgetWidth() {
        return this.widget.width;
    }

    getWidgetUrl() {
        return this.widget.url
;    }
}
