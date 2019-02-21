import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  page: Page;

  constructor(private pageService: PageService, private router: ActivatedRoute) {
    this.page = new Page('321', 'Post 1', '456', 'Lorem');
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.page._id = params['pageid'];
      console.log('page id: ' + this.page._id);
    });

      this.page = this.pageService.findPageById(this.page._id);
  }

}
