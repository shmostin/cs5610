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
        console.log('Inside create widget on the client side');
        return this.http.post<Widget>(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
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

    findWidgetsByPageId(pageId) {
        console.log('findWidgetsByPageId called in the client');
        return this.http.get<Widget[]>(this.baseUrl + '/api/page/' + pageId + '/widget');
    }


    // findWidgetsId(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             return this.widgets[i];
    //         }
    //     }
    // }

    findWidgetById(pageId, widgetId) {
        return this.http.get<Widget>(this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId);
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

    updateWidget(pageId, widgetId, widget) {
        console.log('Client widget service: updateWidget()');
        return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId, widget);
    }
    // deleteWidget(widgetId) {
    //     for (let i = 0; i < this.widgets.length; i++) {
    //         if (this.widgets[i]._id === widgetId) {
    //             // const cut = +i;
    //             this.widgets.splice(i, 1);
    //         }
    //     }
    // }

    deleteWidget(pageId, widgetId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId);
    }

    reorderWidgets(startIndex, endIndex, pageId) {

        const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '');
    }
}
