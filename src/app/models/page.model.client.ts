export class Page {
    _id: String;
    name: String;
    websiteId: String;
    title: String;


    constructor(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.title = description;
        this.websiteId = websiteId;
    }
}
