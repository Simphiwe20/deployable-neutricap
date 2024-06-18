// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register_feedback',
  templateUrl: './register_feedback.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class register_feedbackComponent {
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
      this.sd_mqB74TINubkIjsNP(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mqB74TINubkIjsNP(bh) {
    try {
      bh = this.sd_AObngPNXEtHAZ99j(bh);
      //appendnew_next_sd_mqB74TINubkIjsNP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mqB74TINubkIjsNP');
    }
  }

  //appendnew_flow_register_feedbackComponent_start

  sd_AObngPNXEtHAZ99j(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_ZDIikGmLSDFIbWN2(bh);
      //appendnew_next_sd_AObngPNXEtHAZ99j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AObngPNXEtHAZ99j');
    }
  }

  sd_ZDIikGmLSDFIbWN2(bh) {
    try {
      bh = this.sd_Huxs80G68vogfx2W(bh);
      //appendnew_next_sd_ZDIikGmLSDFIbWN2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZDIikGmLSDFIbWN2');
    }
  }

  sd_Huxs80G68vogfx2W(bh) {
    try {
      const page = this.page;
      setTimeout(() => {
        page.router.navigate(['/ft-landing']);
      }, 5000);
      //appendnew_next_sd_Huxs80G68vogfx2W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Huxs80G68vogfx2W');
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
  //appendnew_flow_register_feedbackComponent_Catch
}
