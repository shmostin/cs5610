import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {


    userId: String;
    websiteId: String;
    pageId: String;
    widgetId: String;
    widget: Widget;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
      this.widget = new Widget('', '', 0, '', '', '', '');
  }

  ngOnInit() {
      this.activatedRoute.params
          .subscribe((params: any) => {
              this.userId = params['uid'];
              this.websiteId = params['wid'];
              this.pageId = params['pid'];
              this.widgetId = params['wgid'];
          });
      this.widgetService.findWidgetById(this.pageId, this.widgetId).subscribe(
          widget => this.widget = widget
      );
  }

}
