import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  wid: string;
  uid: string;
  pid: string;
  name: string
  description: string;
  pages: Page[] = [];
  page: Page;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  updatePage() {
    const newPage = new Page(this.pid, this.name, this.wid, this.description);
    this.pageService.updatePage(this.pid, newPage);
    this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
  }

  deletePage() {
    this.pageService.deletePage(this.pid);
    this.router.navigateByUrl('/user/' + this.uid + '/website/' + this.wid + '/page');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
  }

}
