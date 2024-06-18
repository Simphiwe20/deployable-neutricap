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
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent {
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
      this.sd_GshVIoKNmdvI93fw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GshVIoKNmdvI93fw(bh) {
    try {
      bh = this.sd_xV0StEqkp7VzwxqT(bh);
      //appendnew_next_sd_GshVIoKNmdvI93fw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GshVIoKNmdvI93fw');
    }
  }

  //appendnew_flow_landingComponent_start

  sd_xV0StEqkp7VzwxqT(bh) {
    try {
      this.page.user = { fullName: 'Simphiwe' };
      bh = this.sd_hSXkVqbQP8cTtYzI(bh);
      //appendnew_next_sd_xV0StEqkp7VzwxqT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xV0StEqkp7VzwxqT');
    }
  }

  sd_hSXkVqbQP8cTtYzI(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_hI3gfhVm39WC4LqQ(bh);
      //appendnew_next_sd_hSXkVqbQP8cTtYzI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hSXkVqbQP8cTtYzI');
    }
  }

  sd_hI3gfhVm39WC4LqQ(bh) {
    try {
      const page = this.page;
      page.user = page.result.fullName.split(' ')[0];
      console.log(page.user);
      console.log(page.result.fullName.split(' '));
      //appendnew_next_sd_hI3gfhVm39WC4LqQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hI3gfhVm39WC4LqQ');
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
  //appendnew_flow_landingComponent_Catch
}
