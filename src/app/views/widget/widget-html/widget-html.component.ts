import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../models/widget.model.client';
import {Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';


@Component({
   selector: 'app-widget-html',
   templateUrl: './widget-html.component.html',
   styleUrls: ['./widget-html.component.css']
})

export class WidgetHtmlComponent implements OnInit {
    @ViewChild('f') widgetForm: NgForm;
    @Input() uid: String;
    @Input() wid: String;
    @Input() pid: String;
    @Input() widgetId: String;
    @Input() widget: Widget;

    constructor(private widgetService: WidgetService, private router: Router) { }

    ngOnInit() {}

    backOnePage() {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }

    updateWidget() {
        const text = this.widgetForm.value.newText;
        const name = this.widgetForm.value.newName;
        this.widget.text = text;
        this.widget.name = name;

        this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
            (widget) => {
                console.log('update widget called on client side' + widget);
                this.backOnePage();
            }
        );
    }

    /** Calls widget service to delete the widget and back us up one page */
    deleteWidget() {
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(
                () => this.backOnePage()
            );
    }

    printWidgetText() {
        return this.widget.text;
    }

    printWidgetName() {
        return this.widget.name;
    }

}
