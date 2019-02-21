import { Component, OnInit } from '@angular/core';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  website: Website;

  constructor(private websiteService: WebsiteService, private router: ActivatedRoute) {
    this.website = new Website('123', 'Facebook', '456', 'Lorem');
  }



  ngOnInit() {
    this.router.params.subscribe(params => {
      this.website._id = params['webid'];
      console.log('web id: ' + this.website._id);
    });

    this.website = this.websiteService.findWebsiteById(this.website._id);
  }

}
