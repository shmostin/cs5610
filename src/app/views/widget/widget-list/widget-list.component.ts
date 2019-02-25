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

    userid: string;
    pageid: string;
    widgets: Widget[];

  constructor(private widgetservice: WidgetService,
              private route: Router,
              private activeroute: ActivatedRoute) {
  }

  ngOnInit() {
      this.activeroute.params.subscribe((params: any) => {
          this.userid = params['uid'];
          this.pageid = params['pid']; });
      this.widgets = this.widgetservice.findWidgetsByPageId(this.pageid);
      console.log(this.widgets);
  }

}
