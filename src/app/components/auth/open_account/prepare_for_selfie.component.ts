// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-prepare_for_selfie',
  templateUrl: './prepare_for_selfie.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class prepare_for_selfieComponent {
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
      this.sd_8xFIzc0OwxYZJ3QY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_8xFIzc0OwxYZJ3QY(bh) {
    try {
      bh = this.sd_xZjYdCKi3oyssZVv(bh);
      //appendnew_next_sd_8xFIzc0OwxYZJ3QY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8xFIzc0OwxYZJ3QY');
    }
  }

  takePic(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kMV0n7791fndSeuo(bh);
      //appendnew_next_takePic
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9tIddj3O6b4z2LUS');
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
      bh = this.sd_PwMQz2cHYldk2wCm(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7lLEhVWxrdKBYrpM');
    }
  }
  //appendnew_flow_prepare_for_selfieComponent_start

  sd_xZjYdCKi3oyssZVv(bh) {
    try {
      this.page.routeData = undefined;
      bh = this.sd_BVwRS5ZRXiavXdKg(bh);
      //appendnew_next_sd_xZjYdCKi3oyssZVv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xZjYdCKi3oyssZVv');
    }
  }

  sd_BVwRS5ZRXiavXdKg(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.routeData = route.snapshot.queryParams;
      this.sd_M6mt3noUsGlCB4E8(bh);
      //appendnew_next_sd_BVwRS5ZRXiavXdKg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BVwRS5ZRXiavXdKg');
    }
  }

  sd_M6mt3noUsGlCB4E8(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.routeData);
      //appendnew_next_sd_M6mt3noUsGlCB4E8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M6mt3noUsGlCB4E8');
    }
  }

  async sd_kMV0n7791fndSeuo(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/take_selfie');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_kMV0n7791fndSeuo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kMV0n7791fndSeuo');
    }
  }

  async sd_PwMQz2cHYldk2wCm(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_PwMQz2cHYldk2wCm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PwMQz2cHYldk2wCm');
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
  //appendnew_flow_prepare_for_selfieComponent_Catch
}
