import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'omega-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() caption: string;
  @Input() controlName: string;

  constructor() { }

  ngOnInit() {
  }

}
