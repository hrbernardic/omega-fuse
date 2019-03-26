import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path     : '**',
    component: FormsComponent
  }
];

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormsComponent
  ]
})
export class FormsModule { }
