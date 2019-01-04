import {Component, Input, OnChanges} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {FormControlConfiguration} from '../../models/app-configuration.model';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnChanges {
  // @Input()
  control: FormControl;
  // @Input()
  controlConfiguration: FormControlConfiguration;
/*  // @Input()
  descriptionControl: FormControl;
  // @Input()
  descriptionControlConfiguration: FormControlConfiguration;*/
  // @Input()
  showDescriptionForOptions: string[];

  constructor() {
    this.controlConfiguration = {
      'placeholder': 'sample custom select component',
      'help': '',
      'hint': '',
      'enumeration': [
        {
          'name': 'OPTION1',
          'label': 'option1'
        },
        {
          'name': 'OPTION2',
          'label': 'option2'
        }
      ]
    } as FormControlConfiguration;
    this.control = new FormControl('', Validators.compose([Validators.maxLength(10), Validators.required]));
    this.showDescriptionForOptions = [];
  }

  ngOnChanges() {
    if (this.control) {
      this.control.setValue(String(this.control.value));
    }
  }

  hasValidator(): boolean {
    if (this.control && this.control.validator && this.control.validator({} as AbstractControl)) {
      return this.control.validator({} as AbstractControl).hasOwnProperty('required');
    } else {
      return false;
    }
  }

  clearDescription(): void {
   /* if (this.descriptionControl) {
      this.descriptionControl.setValue('');
    }*/
  }

}
