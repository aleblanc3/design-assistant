import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

//Custom components and services
import { AddUrlsComponent } from '../../../components/add-urls/add-urls.component';
import { FindPagesComponent } from '../../../components/find-pages/find-pages.component';
import { ViewPagesComponent } from '../../../components/view-pages/view-pages.component';

@Component({
  selector: 'aida-add-pages',
  imports: [
    TranslatePipe,
    AddUrlsComponent, FindPagesComponent, ViewPagesComponent
  ],
  templateUrl: './add-pages.component.html',
  styles: ``
})
export class AddPagesComponent {
}