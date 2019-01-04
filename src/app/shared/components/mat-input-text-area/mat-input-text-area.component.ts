import {Component} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {FormControlConfiguration} from '../../models/app-configuration.model';

@Component({
  selector: 'app-mat-input-text-area',
  templateUrl: './mat-input-text-area.component.html',
  styleUrls: ['./mat-input-text-area.component.scss']
})
export class MatInputTextAreaComponent {
  // @Input()
  control: FormControl;
 // @Input()
  controlConfiguration: FormControlConfiguration;

  constructor() {
    this.controlConfiguration = {
      'placeholder': 'sample custom text area component',
      'help': '',
      'hint': ''
    } as FormControlConfiguration;
    this.control = new FormControl('', Validators.compose([Validators.maxLength(10), Validators.required]) );

  }

  hasValidator(): boolean {
    if (this.control && this.control.validator && this.control.validator({} as AbstractControl)) {
      return this.control.validator({} as AbstractControl).hasOwnProperty('required');
    } else {
      return false;
    }
  }

  getControlLength(): number {
    if (this.control && this.control.value) {
      return Array.isArray(this.control.value) ? this.control.value[0].length : this.control.value.length;
    }
    return 0;
  }

}
