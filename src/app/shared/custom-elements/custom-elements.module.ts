import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ROUTES} from '@angular/router';
import {ELEMENT_MODULE_PATHS, ELEMENT_MODULE_PATHS_AS_ROUTES, ELEMENT_MODULE_PATHS_TOKEN} from './element-registry';
import {CustomElementsRegisterService} from './custom-elements-register.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CustomElementsRegisterService,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    { provide: ELEMENT_MODULE_PATHS_TOKEN, useValue: ELEMENT_MODULE_PATHS },
    { provide: ROUTES, useValue: ELEMENT_MODULE_PATHS_AS_ROUTES, multi: true },
  ],
})
export class CustomElementsModule { }
