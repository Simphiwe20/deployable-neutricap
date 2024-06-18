// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-undercostructions',
  templateUrl: './undercostructions.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class undercostructionsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_DgjmH1917DqBuMUw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_DgjmH1917DqBuMUw(bh) {
    try {
      bh = this.sd_qgZkRXjP7fIswe0i(bh);
      //appendnew_next_sd_DgjmH1917DqBuMUw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DgjmH1917DqBuMUw');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_eu8osyExOk35VPuK(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IqA2d2MtRJOq5bgv');
    }
  }
  //appendnew_flow_undercostructionsComponent_start

  sd_qgZkRXjP7fIswe0i(bh) {
    try {
      //appendnew_next_sd_qgZkRXjP7fIswe0i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qgZkRXjP7fIswe0i');
    }
  }

  async sd_eu8osyExOk35VPuK(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_eu8osyExOk35VPuK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eu8osyExOk35VPuK');
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
  //appendnew_flow_undercostructionsComponent_Catch
}
