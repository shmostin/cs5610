import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;
  uid: string;
  wid: string;
  name: string;
  description: string;
  pages: Page[] = [];

  constructor(private pageservice: PageService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.uid = params['uid'];
          this.wid = params['wid'];
          this.pages = this.pageservice.findPageByWebsiteId(this.wid);
        }
    );
  }

}
