import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FuseProgressBarModule, FuseSharedModule } from '@omega/core';
import { ToolbarComponent } from './toolbar.component';
import { FuseSearchBarModule } from '../../../../../../../libs/core/src/lib/fuse/components';


@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseProgressBarModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
