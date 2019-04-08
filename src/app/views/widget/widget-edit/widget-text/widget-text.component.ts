import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';


@Component({
    selector: 'app-widget-text',
    templateUrl: './widget-text.component.html',
    styleUrls: ['./widget-text.component.css']
})

export class WidgetTextComponent implements OnInit {

    widgetId: string;
    widget: Widget;
    pid: String;
    uid: String;
    wid: String;


    constructor(private route: ActivatedRoute, private router: Router, private widgetService: WidgetService) {}

    ngOnInit() {}

    backOnePage() {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }

    updateWidget() {
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
    }

    getWidgetUrl() {
        return this.widget.url;
    }

    getWidgetText() {
        return this.widget.text;
    }
}
