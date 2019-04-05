import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'omega-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() caption: string;
  @Input() controlName: string;

  constructor() { }

  ngOnInit() {
  }

}
