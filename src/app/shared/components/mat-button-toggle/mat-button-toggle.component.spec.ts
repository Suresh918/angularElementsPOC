import {MatButtonToggleComponent} from './mat-button-toggle.component';
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

describe('MatButtonToggleComponent', function () {
  let fixture: ComponentFixture<MatButtonToggleComponent>;
  let component: MatButtonToggleComponent;
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, BrowserModule, FlexLayoutModule, MatButtonToggleModule],
      declarations: [MatButtonToggleComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(MatButtonToggleComponent);
    component = fixture.componentInstance;
    component['control'] = new FormControl('actualVal', Validators.compose([
      Validators.required
    ]));
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('control value require validation working', () => {
    component.control.setValue('');
    expect(component.control.valid).toBeFalsy();
  });
  it('control should contain actual value', () => {
    expect(component.control.value).toEqual('actualVal');
  });
});
