import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule, MatCheckboxModule,
  MatDatepickerModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import { FormsComponent } from './forms.component';
import { FuseSharedModule } from '@omega/core';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { InputLookupComponent } from './input-lookup/input-lookup.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';


const routes: Routes = [
    {
        path     : '**',
        component: FormsComponent
    }
];

@NgModule({
    declarations: [
        FormsComponent,
        InputTextComponent,
        InputNumberComponent,
        InputDateComponent,
        InputCheckboxComponent,
        InputLookupComponent,
        InputTextareaComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatDividerModule,
        NgxMatSelectSearchModule,

        FuseSharedModule,
    ]
})
export class FormsModule
{
}
