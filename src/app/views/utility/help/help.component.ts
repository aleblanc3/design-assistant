import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: 'aida-help',
    imports: [RouterLink, TranslatePipe],
    templateUrl: 'help.component.html',
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpComponent {

}