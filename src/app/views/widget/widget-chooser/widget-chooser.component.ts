import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
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


  backOnePage() {
      this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }


  findWidgetEdit(widget) {
    this.widgetService.createWidget(this.pid, widget)
        .subscribe(
            (widget) => {
                this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
            }
        );
  }


  toHeader() {
    const widget = new Widget('HEADING', this.pid, 0, '', '', '', '');
    this.findWidgetEdit(widget);
  }

  toImage() {
      const widget = new Widget('IMAGE', this.pid, 0, '', '', '', '');
      this.findWidgetEdit(widget);
  }

  toYoutube() {
      const widget = new Widget('YOUTUBE', this.pid, 0, '', '', '', '');
      this.findWidgetEdit(widget);
  }

  toHtml() {
      const widget = new Widget('HTML', this.pid, 0, '', '', '', '');
      this.findWidgetEdit(widget);
  }

  toText() {
      const widget = new Widget('TEXT', this.pid, 0, '', '', '', '');
      this.findWidgetEdit(widget);
  }
}
