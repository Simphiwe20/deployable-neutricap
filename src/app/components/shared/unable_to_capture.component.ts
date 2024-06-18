// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-unable_to_capture',
  templateUrl: './unable_to_capture.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class unable_to_captureComponent {
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
      this.sd_GEcjoZvfGb2FTorJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GEcjoZvfGb2FTorJ(bh) {
    try {
      bh = this.sd_9iJGgYdxXOorGQZu(bh);
      //appendnew_next_sd_GEcjoZvfGb2FTorJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GEcjoZvfGb2FTorJ');
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
      bh = this.sd_EsmateBZPve7Ugnc(bh);
      //appendnew_next_takePic
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WTjz7mlkSoXm1Unw');
    }
  }
  //appendnew_flow_unable_to_captureComponent_start

  sd_9iJGgYdxXOorGQZu(bh) {
    try {
      this.page.routeData = undefined;
      bh = this.sd_FSzLsUDgt61UlUkz(bh);
      //appendnew_next_sd_9iJGgYdxXOorGQZu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9iJGgYdxXOorGQZu');
    }
  }

  sd_FSzLsUDgt61UlUkz(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.routeData = route.snapshot.queryParams;
      //appendnew_next_sd_FSzLsUDgt61UlUkz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FSzLsUDgt61UlUkz');
    }
  }

  async sd_EsmateBZPve7Ugnc(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/take_selfie');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_EsmateBZPve7Ugnc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EsmateBZPve7Ugnc');
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
  //appendnew_flow_unable_to_captureComponent_Catch
}
