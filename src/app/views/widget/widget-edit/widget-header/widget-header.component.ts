import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  widget: Widget;

  constructor(private widgetService: WidgetService, private router: ActivatedRoute) {
    this.widget = new Widget('123', 'HEADER', '321', '2', 'GIZMODO');
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.widget._id = params['widgetid'];
      console.log('widget id: ' + this.widget._id);
    });
    this.widget = this.widgetService.findWidgetsId(this.widget._id);
  }
}
