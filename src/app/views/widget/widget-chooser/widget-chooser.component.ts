import { Component, OnInit } from '@angular/core';
import {Widget, WidgetHeading, WidgetImage} from '../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

    wgid: string;
    widgets: Widget[] = [];
    uid: string;
    wid: string;
    pid: string;
    size: string;
    text: string;
    width: string;
    url: string;

  constructor(private activateRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
        (params: any) => {
          console.log('widget paramaters');
          console.log(params);
          this.uid = params['uid'];
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.wgid = params['wgid'];
        });
  }


  findWidgetEdit(widget: Widget) {
    this.widgetService.createWidget(this.pid, widget);
    this.router.navigate(['../' + widget._id], {relativeTo: this.activateRoute});
  }


  header() {
    const widget = new WidgetHeading(undefined, undefined, 'HEADING', this.pid, undefined, undefined);
    this.findWidgetEdit(widget);
  }

  image() {
      const widget = new WidgetImage(undefined, undefined, 'IMAGE', this.pid, undefined, undefined);
      this.findWidgetEdit(widget);
  }

  youtube() {
      const widget = new WidgetImage(undefined, undefined, 'YOUTUBE', this.pid, undefined, undefined);
      this.findWidgetEdit(widget);
  }
}
