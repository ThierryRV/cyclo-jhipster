import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CycloSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CycloSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CycloSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CycloSharedModule {
  static forRoot() {
    return {
      ngModule: CycloSharedModule
    };
  }
}
