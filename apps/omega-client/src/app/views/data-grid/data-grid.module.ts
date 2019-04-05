import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from '@angular/material';

const routes = [
  {
    path     : '**',
    component: DataGridComponent
  }
];

@NgModule({
  declarations: [DataGridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([MatProgressSpinner]),
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class DataGridModule { }
