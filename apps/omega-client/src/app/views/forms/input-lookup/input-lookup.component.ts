import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'omega-input-lookup',
  templateUrl: './input-lookup.component.html',
  styleUrls: ['./input-lookup.component.scss']
})
export class InputLookupComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() caption: string;
  @Input() controlName: string;
  @Input() dataObservable: Observable<Array<any>>;
  @Input() textField: string;
  /** control for the selected bank */
  public dataCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public dataFilterCtrl: FormControl = new FormControl();


  @ViewChild('singleSelect') singleSelect: MatSelect;

  constructor() { }

  ngOnInit() {
  }

}
