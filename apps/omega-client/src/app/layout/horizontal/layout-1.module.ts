import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { FuseSharedModule, FuseSidebarModule } from '@omega/core';
import { NavbarModule } from '../components/navbar/navbar.module';
import { ToolbarModule } from '../components/toolbar/toolbar.module';
import { ContentModule } from '../components/content/content.module';
import { QuickPanelModule } from '../components/quick-panel/quick-panel.module';
import { HorizontalLayout1Component } from './layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,

        ContentModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
