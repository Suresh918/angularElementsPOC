import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputTextAreaComponent} from './components/mat-input-text-area/mat-input-text-area.component';
import {MatSelectComponent} from './components/mat-select/mat-select.component';
import {MatButtonToggleComponent} from './components/mat-button-toggle/mat-button-toggle.component';
import {RouterModule} from '@angular/router';
import {MatInputTextComponent} from './components/mat-input-text/mat-input-text.component';
import {BadgeComponent} from './components/badge/badge.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatBadgeModule,
    RouterModule
  ],
  declarations: [
    MatInputTextComponent,
    MatInputTextAreaComponent,
    MatSelectComponent,
    BadgeComponent,
    MatButtonToggleComponent
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatInputTextComponent,
    MatInputTextAreaComponent,
    MatSelectComponent,
    BadgeComponent,
    MatBadgeModule,
    MatButtonToggleModule,
    MatButtonToggleComponent,
  ],
  entryComponents: [
    MatInputTextComponent,
    MatInputTextAreaComponent,
    MatSelectComponent,
    BadgeComponent,
    MatButtonToggleComponent
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }]
})
export class SharedModule {
}
