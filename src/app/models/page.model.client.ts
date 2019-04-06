export class Page {
    _id: String;
    name: String;
    websiteId: String;
    title: String;


    constructor(name, websiteId, description) {
        this.name = name;
        this.title = description;
        this.websiteId = websiteId;
    }
}
