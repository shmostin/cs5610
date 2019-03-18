import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WidgetService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    createWidget(pageId, widget) {
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
    }

    // findWidgetsByPageId(pageId) {
    //     const widgets = [];
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i].pageId === pageId) {
    //             widgets.push(this.widgets[i]);
    //         }
    //     }
    //     return widgets;
    // }

    findwidgetsByPageId(pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
    }


    // findWidgetsId(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             return this.widgets[i];
    //         }
    //     }
    // }

    findWidgetsById(widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId);
    }

    // updateWidget(widgetId, widget) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             switch (widget.widgetType) {
    //                 case 'HEADER':
    //                     this.widgets[i].text = widget.text;
    //                     this.widgets[i].size = widget.size;
    //                     return true;
    //
    //                 case 'IMAGE':
    //                     this.widgets[i].text = widget.text;
    //                     this.widgets[i].text = widget.width;
    //                     this.widgets[i].url = widget.url;
    //                     return true;
    //
    //                 case 'YOUTUBE':
    //                     this.widgets[i].text = widget.text;
    //                     this.widgets[i].text = widget.width;
    //                     this.widgets[i].url = widget.url;
    //                     return true;
    //             }
    //
    //         }
    //     }
    //     return false;
    // }

    updateWidget(widgetId, widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
    }
    // deleteWidget(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             // const cut = +i;
    //             this.widgets.splice(i, 1);
    //         }
    //     }
    // }

    deleteWidget(widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId);
    }

    reorderWidgets(startIndex, endIndex, pageId) {

        const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    }
}
