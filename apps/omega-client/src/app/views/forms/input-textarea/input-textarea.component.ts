import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'omega-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() caption: string;
  @Input() controlName: string;

  constructor() { }

  ngOnInit() {
  }

}
