import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputTextElementComponent} from './mat-input-text-element.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ MatInputTextElementComponent ],
  entryComponents: [ MatInputTextElementComponent ],
})
export class MatInputTextElementModule {
  customElementComponent: Type<any> = MatInputTextElementComponent;
}
