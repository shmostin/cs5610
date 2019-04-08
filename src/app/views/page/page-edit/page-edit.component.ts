import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;

  wid: string;
  uid: string;
  pid: string;
  name: string;
  description: string;
  pages: Page[];
  page: Page;
  oldPage: Page;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.oldPage = new Page('', '', '');
  }

    ngOnInit() {
        console.log('edit page ngOnInit');
        this.activatedRoute.params.subscribe((params: any) => {
            this.uid = params['uid'];
            this.wid = params['wid'];
            this.pid = params['pid'];
        });
        this.pageService.findPageById(this.pid, this.wid)
            .subscribe(
                page => this.oldPage = page
            );
        console.log('page found on the server: ' + JSON.stringify(this.oldPage));
    }

  updatePage() {
    const newPage = new Page(this.pageForm.value.pageName, this.wid, this.pageForm.value.pageTitle);
    this.pageService.updatePage(this.pid, this.wid, newPage)
        .subscribe(
            () => this.backOnePage()
        );
  }

  deletePage() {
    this.pageService.deletePage(this.pid)
        .subscribe(
            () => this.backOnePage()
        );
  }

  backOnePage() {
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page']);
  }

  getOldPageName() {
      console.log('calling get old page name');
    return this.oldPage.name;
  }

  getOldPageTitle() {
      console.log('calling get old page title');
    return this.oldPage.title;
  }

}
