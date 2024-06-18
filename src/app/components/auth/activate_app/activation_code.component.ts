// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-activation_code',
  templateUrl: './activation_code.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class activation_codeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_FljhlTgaborXnGG4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_FljhlTgaborXnGG4(bh) {
    try {
      bh = this.sd_1ILyVtIqewn4yUhQ(bh);
      //appendnew_next_sd_FljhlTgaborXnGG4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FljhlTgaborXnGG4');
    }
  }

  //appendnew_flow_activation_codeComponent_start

  sd_1ILyVtIqewn4yUhQ(bh) {
    try {
      //appendnew_next_sd_1ILyVtIqewn4yUhQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1ILyVtIqewn4yUhQ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_activation_codeComponent_Catch
}
