import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

    widget: Widget;

    constructor(private widgetService: WidgetService, private router: ActivatedRoute) {
        this.widget = new Widget('123', 'IMAGE', '321', '2', '100%', 'http://larempixel.com/400/200/');
    }

    ngOnInit() {
        this.router.params.subscribe(params => {
            this.widget._id = params['widgetid'];
            console.log('widget id: ' + this.widget._id);
        });
        this.widget = this.widgetService.findWidgetsId(this.widget._id);
    }
}