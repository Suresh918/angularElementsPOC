import {Inject, Injectable, NgModuleFactoryLoader, NgModuleRef} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {ELEMENT_MODULE_PATHS_TOKEN} from './element-registry';
import {from, Observable} from 'rxjs';

@Injectable()
export class CustomElementsRegisterService {
  private elementsToLoad: Map<string, string>;

  constructor(private moduleFactoryLoader: NgModuleFactoryLoader,
              private moduleRef: NgModuleRef<any>,
              @Inject(ELEMENT_MODULE_PATHS_TOKEN) elementModulePaths: Map<string, string>) {
    this.elementsToLoad = new Map(elementModulePaths);
  }

  loadCustomElements(): Observable<void[]> {
    const allRegistered = Promise.all(Array.from(this.elementsToLoad.keys()).map(key => this.loadCustomElement(key)));
    return from(allRegistered.then(() => undefined));
  }

  loadCustomElement(selector: string): Promise<void> {
    if (this.elementsToLoad.has(selector)) {
      const modulePath = this.elementsToLoad.get(selector)!;
      const loadedAndRegistered = this.moduleFactoryLoader
        .load(modulePath)
        .then(elementModuleFactory => {
          const elementModuleRef = elementModuleFactory.create(this.moduleRef.injector);
          const injector = elementModuleRef.injector;
          const CustomElementComponent = elementModuleRef.instance.customElementComponent;
          const CustomElement = createCustomElement(CustomElementComponent, {injector});
          customElements!.define(selector, CustomElement);
          return customElements.whenDefined(selector);
        })
        .then(() => {
          this.elementsToLoad.delete(selector);
        })
        .catch(err => {
          return Promise.reject(err);
        });
      return loadedAndRegistered;
    }
    return Promise.resolve();
  }

}
