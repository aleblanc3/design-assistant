import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { marker } from '@colsen1991/ngx-translate-extract-marker';

//PrimeNG

//Custom

@Component({
    selector: 'aida-invalid-urls',
    imports: [
        CommonModule, FormsModule, TranslatePipe,
    ],
    templateUrl: './invalid-urls.component.html',
    styles: ``
})
export class InvalidUrlsComponent {


}