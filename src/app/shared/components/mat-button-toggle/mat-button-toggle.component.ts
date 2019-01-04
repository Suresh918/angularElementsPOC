import {Component, Input, OnChanges} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {FormControlConfiguration} from '../../models/app-configuration.model';

@Component({
  selector: 'app-mat-button-toggle',
  templateUrl: './mat-button-toggle.component.html',
  styleUrls: ['./mat-button-toggle.component.scss']
})
export class MatButtonToggleComponent implements OnChanges {
  @Input()
  control: FormControl;
  @Input()
  controlConfiguration: FormControlConfiguration;
  @Input()
  descriptionControl: FormControl;
  @Input()
  descriptionControlConfiguration: FormControlConfiguration;
  @Input()
  showDescriptionForOptions: string[];

  constructor() {
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
    if (this.descriptionControl) {
      this.descriptionControl.setValue('');
    }
  }
}
