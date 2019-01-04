import {InjectionToken} from '@angular/core';

export const ELEMENT_MODULE_PATHS_AS_ROUTES = [
  {
    path: 'app-mat-input-text-element',
    loadChildren: './mat-input-text-element/mat-input-text-element.module#MatInputTextElementModule'
  }
];

/** Injection token to provide the element path modules. */
export const ELEMENT_MODULE_PATHS_TOKEN = new InjectionToken('app/elements-map');

/** Map of possible custom element selectors to their lazy-loadable module paths. */
export const ELEMENT_MODULE_PATHS = new Map<string, string>();
ELEMENT_MODULE_PATHS_AS_ROUTES.forEach(route => {
  ELEMENT_MODULE_PATHS.set(route.path, route.loadChildren);
});
