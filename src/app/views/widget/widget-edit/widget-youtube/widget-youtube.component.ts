import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

    widget: Widget;

    constructor(private widgetService: WidgetService, private router: ActivatedRoute) {
        this.widget = new Widget('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token');
    }

    ngOnInit() {
        this.router.params.subscribe(params => {
            this.widget._id = params['widgetid'];
            console.log('widget id: ' + this.widget._id);
        });
        this.widget = this.widgetService.findWidgetsId(this.widget._id);
    }
}