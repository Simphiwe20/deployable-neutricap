// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-activation_options',
  templateUrl: './activation_options.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class activation_optionsComponent {
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
      this.sd_VQg1hM3ezDTcUihY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VQg1hM3ezDTcUihY(bh) {
    try {
      bh = this.sd_JMBch2jHoER6AnSc(bh);
      //appendnew_next_sd_VQg1hM3ezDTcUihY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VQg1hM3ezDTcUihY');
    }
  }

  //appendnew_flow_activation_optionsComponent_start

  sd_JMBch2jHoER6AnSc(bh) {
    try {
      //appendnew_next_sd_JMBch2jHoER6AnSc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JMBch2jHoER6AnSc');
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
  //appendnew_flow_activation_optionsComponent_Catch
}
