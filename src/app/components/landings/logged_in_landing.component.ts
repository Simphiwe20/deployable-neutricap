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
  selector: 'bh-logged_in_landing',
  templateUrl: './logged_in_landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class logged_in_landingComponent {
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
      this.sd_XF0gShbhqyAaYvau(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XF0gShbhqyAaYvau(bh) {
    try {
      bh = this.sd_xkyc4kOM44EIss9T(bh);
      //appendnew_next_sd_XF0gShbhqyAaYvau
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XF0gShbhqyAaYvau');
    }
  }

  //appendnew_flow_logged_in_landingComponent_start

  sd_xkyc4kOM44EIss9T(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_1l91qiTYiwAw5Kaq(bh);
      //appendnew_next_sd_xkyc4kOM44EIss9T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xkyc4kOM44EIss9T');
    }
  }

  sd_1l91qiTYiwAw5Kaq(bh) {
    try {
      bh = this.sd_vamgXGR64QI3u8Ga(bh);
      //appendnew_next_sd_1l91qiTYiwAw5Kaq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1l91qiTYiwAw5Kaq');
    }
  }

  sd_vamgXGR64QI3u8Ga(bh) {
    try {
      const page = this.page;
      page.router.navigate(['/logged_in_landing/home']);
      //appendnew_next_sd_vamgXGR64QI3u8Ga
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vamgXGR64QI3u8Ga');
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
  //appendnew_flow_logged_in_landingComponent_Catch
}
