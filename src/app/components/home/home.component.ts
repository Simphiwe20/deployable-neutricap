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
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_tqZoa2FrrKHc0SXV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_tqZoa2FrrKHc0SXV(bh) {
    try {
      bh = this.sd_azLtfGiZyWrylVhT(bh);
      //appendnew_next_sd_tqZoa2FrrKHc0SXV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tqZoa2FrrKHc0SXV');
    }
  }

  showsidenav(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tXB6bokoTStU4Y6i(bh);
      //appendnew_next_showsidenav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FKSyQSUP8DiZ3iht');
    }
  }
  //appendnew_flow_homeComponent_start

  sd_azLtfGiZyWrylVhT(bh) {
    try {
      this.page.hidesideNav = false;
      //appendnew_next_sd_azLtfGiZyWrylVhT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_azLtfGiZyWrylVhT');
    }
  }

  sd_tXB6bokoTStU4Y6i(bh) {
    try {
      const page = this.page;
      page.hidesidenav = !page.hidesidenav;
      //appendnew_next_sd_tXB6bokoTStU4Y6i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tXB6bokoTStU4Y6i');
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
  //appendnew_flow_homeComponent_Catch
}
