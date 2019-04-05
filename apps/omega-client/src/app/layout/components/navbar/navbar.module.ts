import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { FuseSharedModule } from '@omega/core';
import { NavbarVerticalStyle2Module } from './vertical/style-2/style-2.module';
import { NavbarHorizontalStyle1Module } from './horizontal/style-1/style-1.module';


@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        FuseSharedModule,

        NavbarVerticalStyle2Module,
        NavbarHorizontalStyle1Module
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
