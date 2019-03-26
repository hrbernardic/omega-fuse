import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@omega/core';
import { ContentComponent } from './content.component';


@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        FuseSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
