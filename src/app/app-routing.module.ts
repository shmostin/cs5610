import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RegisterComponent} from './views/user/register/register.component';
import {PageEditComponent} from './views/page/page-edit/page-edit.component';
import {PageListComponent} from './views/page/page-list/page-list.component';
import {PageNewComponent} from './views/page/page-new/page-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetHeaderComponent} from './views/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './views/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';


// Where :uid, :wid, :pid, and :wgid are path parameters encoding the IDs of particular users,
// websites, pages, and widgets.


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'user/:uid', component: ProfileComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent},
    {path: 'user/:uid/website/:wid/page', component: PageListComponent},
    {path: 'user/:uid/website/:wid/page/new', component: PageNewComponent},
    {path: 'user/:uid/website/:wid', component: WebsiteEditComponent},
    {path: 'website-list', component: WebsiteListComponent},
    {path: 'user/:uid/website/new', component: WebsiteNewComponent},
    {path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
    {path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
    {path: 'user/:uid/website/:wid/page/:pid', component: WidgetEditComponent},












];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export const routing = RouterModule.forRoot(appRoutes)
export class AppRoutingModule { }
