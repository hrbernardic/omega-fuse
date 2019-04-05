import { NgModule } from '@angular/core';
import { MatDividerModule, MatListModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { QuickPanelComponent } from './quick-panel.component';
import { FuseSharedModule } from '@omega/core';


@NgModule({
    declarations: [
        QuickPanelComponent
    ],
    imports     : [
        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,
        MatRadioModule,


        FuseSharedModule
    ],
    exports: [
        QuickPanelComponent
    ]
})
export class QuickPanelModule
{
}
