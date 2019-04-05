import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'omega-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() caption: string;
  @Input() controlName: string;

  constructor() { }

  ngOnInit() {
  }

}
