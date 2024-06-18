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
  selector: 'bh-feedback',
  templateUrl: './feedback.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class feedbackComponent {
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
      this.sd_yOBgvrXlC4puiKfw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yOBgvrXlC4puiKfw(bh) {
    try {
      bh = this.sd_0HtxUpSOPR8PcW02(bh);
      //appendnew_next_sd_yOBgvrXlC4puiKfw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yOBgvrXlC4puiKfw');
    }
  }

  //appendnew_flow_feedbackComponent_start

  sd_0HtxUpSOPR8PcW02(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_ZgsogB7G2DX0hHzg(bh);
      //appendnew_next_sd_0HtxUpSOPR8PcW02
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0HtxUpSOPR8PcW02');
    }
  }

  sd_ZgsogB7G2DX0hHzg(bh) {
    try {
      bh = this.sd_Eb5bIzVkHhjIKQTo(bh);
      //appendnew_next_sd_ZgsogB7G2DX0hHzg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZgsogB7G2DX0hHzg');
    }
  }

  sd_Eb5bIzVkHhjIKQTo(bh) {
    try {
      const page = this.page;
      setTimeout(() => {
        page.router.navigate(['/landing']);
      }, 4000);
      //appendnew_next_sd_Eb5bIzVkHhjIKQTo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Eb5bIzVkHhjIKQTo');
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
  //appendnew_flow_feedbackComponent_Catch
}
