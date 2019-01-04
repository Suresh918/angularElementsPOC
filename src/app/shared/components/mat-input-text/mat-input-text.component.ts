
import {FormControlConfiguration} from '../../models/app-configuration.model';
import {Component} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-mat-input-text',
  templateUrl: './mat-input-text.component.html',
  styleUrls: [ './mat-input-text.component.scss' ]
})
export class MatInputTextComponent {
  // @Input()
  control: FormControl;
  // @Input()
  controlConfiguration: FormControlConfiguration;

  constructor() {
    this.controlConfiguration = {
      'placeholder': 'sample custom text component',
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

}
