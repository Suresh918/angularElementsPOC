import {Component} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {FormControlConfiguration} from '../../models/app-configuration.model';

@Component({
  selector: 'app-mat-input-text-element',
  templateUrl: './mat-input-text-element.component.html',
  styleUrls: [ './mat-input-text-element.component.scss' ],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class MatInputTextElementComponent {
  // @Input()
  control: FormControl;
 // @Input()
  controlConfiguration: FormControlConfiguration;

  constructor() {
    this.controlConfiguration = {
      'placeholder': 'sample custom text component lazy loaded',
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
