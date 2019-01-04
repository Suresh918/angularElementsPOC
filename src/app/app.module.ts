import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {CustomElementsModule} from './shared/custom-elements/custom-elements.module';
import {CustomElementsRegisterService} from './shared/custom-elements/custom-elements-register.service';
import {MatInputTextComponent} from './shared/components/mat-input-text/mat-input-text.component';
import {MatSelectComponent} from './shared/components/mat-select/mat-select.component';
import {MatInputTextAreaComponent} from './shared/components/mat-input-text-area/mat-input-text-area.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CustomElementsModule],
  providers: [],
  declarations: [],
  entryComponents: [],
})
export class AppModule {
  customComponentsConfig: any[];

  constructor(private injector: Injector,
              private readonly customElementsRegisterService: CustomElementsRegisterService) {
    this.customComponentsConfig = [{'app-mat-input-text': MatInputTextComponent},
      {'app-mat-input-text-area': MatInputTextAreaComponent},
      {'app-mat-select': MatSelectComponent}];
  }

  ngDoBootstrap() {
    this.customElementsRegisterService.loadCustomElements().subscribe();
    this.customComponentsConfig.forEach(config => {
      const selector = Object.keys(config);
      const component = config[selector[0]];
      const CustomElement = createCustomElement(component, {injector : this.injector});
      customElements.define(selector[0], CustomElement);
    });
  }
}
