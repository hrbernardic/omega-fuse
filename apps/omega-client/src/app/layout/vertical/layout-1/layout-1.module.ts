import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule, FuseSidebarModule } from '@omega/core';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { VerticalLayout1Component } from './layout-1.component';
import { ContentModule } from '../../components/content/content.module';
import { QuickPanelModule } from '../../components/quick-panel/quick-panel.module';


@NgModule({
    declarations: [
        VerticalLayout1Component
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
        FuseSidebarModule,

        ContentModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayout1Component
    ]
})
export class VerticalLayout1Module
{
}
