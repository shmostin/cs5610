
export class Widget {
    _id: String;
    type: String;
    pageId: String;
    size: Number;
    url: String;
    width: String;
    name: String;
    text: String;
    placeHolder: String;
    title: String;
    description: String;
    height: String;
    rows: Number;
    class: String;
    icon: String;
    deletable: Boolean;
    formatted: Boolean;

    constructor(type: String, pageId: String, size: Number, url: String, width: String, name: String, text: String) {
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.name = name;
        this.text = text;
        this.rows = 0;
        this.deletable = true;
        this.formatted = false;
    }
}

// export interface Widget {
//     name: string;
//     _id: string;
//     widgetType: string;
//     pageId: string;
// }
//
// export class WidgetHeading implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     size: number;
//     text: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, size: number, text: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.size = size;
//         this.text = text;
//     }
// }
//
// export class WidgetImage implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     width: string;
//     url: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.width = width;
//         this.url = url;
//     }
// }
//
// export class WidgetHtml implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     text: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, text: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.text = text;
//     }
// }
//
// export class WidgetYoutube implements Widget {
//     name: string;
//     _id: string;
//     pageId: string;
//     widgetType: string;
//     width: string;
//     url: string;
//
//     constructor(name: string, _id: string, widgetType: string, pageId: string, width: string, url: string) {
//         this._id = _id;
//         this.widgetType = widgetType;
//         this.pageId = pageId;
//         this.width = width;
//         this.url = url;
//     }
// }
