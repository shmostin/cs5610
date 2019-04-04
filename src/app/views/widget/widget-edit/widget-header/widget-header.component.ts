import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
    @ViewChild('f') widgetForm: NgForm;
    flag = false; // setting error flag as false by default
    error: string;
    alert: string;
    wid: string;
    pid: string;
    uid: string;
    widgetId: string;
    widget: Widget;

    newWidget: Widget;
    widgetName: string;
    widgetSize: number;
    widgetText: string;



    constructor(private widgetService: WidgetService, private activeRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.error = 'please enter the name of the widget';
    this.alert = 'Enter the name of the widget';

    this.activeRouter.params
        .subscribe(
            (params: any) => {
              this.wid = params['wid'];
              this.pid = params['pid'];
              this.uid = params['uid'];
              this.widgetId = params['widgetId'];
            }
        );

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
        console.log('updateWidget called from the client');
        const text = this.widgetForm.value.widgetText;
        const size = this.widgetForm.value.widgetSize;
        this.widget.text = text;
        this.widget.size = this.widget.size + size;

        // this.newWidget = new WidgetHeading(this.widgetName, undefined, 'HEADING', this.pid, this.widgetSize, this.widgetText);
        this.widgetService.updateWidget(this.widgetId, this.newWidget)
            .subscribe(
                (widget) => {
                    console.log(widget);
                    this.backOnePage();
                }
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

    getWidgetSize() {
        return this.widget.size.toString();
    }
}
