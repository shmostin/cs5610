import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {Widget} from '../models/widget.model.client';

@Injectable
export class WidgetService {

    constructor() {
    }

    widgets: Widget[] =
        [
            new Widget('123', 'HEADER', '321', '2', 'GIZMODO'),
            new Widget('123', 'HEADER', '321', '2', 'GIZMODO'),
            new Widget('123', 'IMAGE', '321', '2', '100%', 'http://larempixel.com/400/200/'),
            new Widget('123', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token'),
        ];


    createWidget(pageId, widget) {
        this.widgets.push(widget);
    }

    findWidgetsByPageId(pageId) {
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].pageId === pageId) {
                return this.widgets[i];
            }
        }
    }


    findWidgetsId(widgetId) {
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i];
            }
        }
    }

    updateWidget(widgetId, widget) {
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                switch (widget.widgetType) {
                    case 'HEADER':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        return true;

                    case 'IMAGE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].text = widget.width;
                        this.widgets[i].url = widget.url;
                        return true;

                    case 'YOUTUBE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].text = widget.width;
                        this.widgets[i].url = widget.url;
                        return true;
                }

            }
        }
        return false;
    }

    deleteWidget(widgetId) {
        for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                // const cut = +i;
                this.widgets.splice(i, 1);
            }
        }
    }
}
