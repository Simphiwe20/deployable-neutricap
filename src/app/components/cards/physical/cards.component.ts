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
  selector: 'bh-cards',
  templateUrl: './cards.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class cardsComponent {
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
      this.sd_qOHXOKY3yqWoTu6j(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qOHXOKY3yqWoTu6j(bh) {
    try {
      bh = this.sd_9br5SIlar8wPCTNp(bh);
      //appendnew_next_sd_qOHXOKY3yqWoTu6j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qOHXOKY3yqWoTu6j');
    }
  }

  hideCard(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_64K6Av8icu4MUani(bh);
      //appendnew_next_hideCard
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vZplwie72amkSdbv');
    }
  }
  //appendnew_flow_cardsComponent_start

  sd_9br5SIlar8wPCTNp(bh) {
    try {
      this.page.hide = true;
      this.page.user = undefined;
      bh = this.sd_Y7bPLTy1TTtvfVoY(bh);
      //appendnew_next_sd_9br5SIlar8wPCTNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9br5SIlar8wPCTNp');
    }
  }

  sd_Y7bPLTy1TTtvfVoY(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      //appendnew_next_sd_Y7bPLTy1TTtvfVoY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y7bPLTy1TTtvfVoY');
    }
  }

  sd_64K6Av8icu4MUani(bh) {
    try {
      const page = this.page;
      page.hide = !page.hide;
      //appendnew_next_sd_64K6Av8icu4MUani
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_64K6Av8icu4MUani');
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
  //appendnew_flow_cardsComponent_Catch
}
