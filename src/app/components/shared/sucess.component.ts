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
  selector: 'bh-sucess',
  templateUrl: './sucess.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sucessComponent {
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
      this.sd_gzgVNswepMNZKRg8(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_gzgVNswepMNZKRg8(bh) {
    try {
      bh = this.sd_HEPNtgrh9aBFkLzS(bh);
      //appendnew_next_sd_gzgVNswepMNZKRg8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gzgVNswepMNZKRg8');
    }
  }

  done(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_UPGqBtmDeeo9VSH1(bh);
      //appendnew_next_done
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ja1ZqA8GhkW0ERUq');
    }
  }
  //appendnew_flow_sucessComponent_start

  sd_HEPNtgrh9aBFkLzS(bh) {
    try {
      this.page.routeData = undefined;
      this.page.feedback = undefined;
      this.page.isPayment = bh.false;
      bh = this.sd_iX3VNQRqEzNotSgf(bh);
      //appendnew_next_sd_HEPNtgrh9aBFkLzS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HEPNtgrh9aBFkLzS');
    }
  }

  sd_iX3VNQRqEzNotSgf(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.routeData = route.snapshot.queryParams;
      bh = this.sd_pUxBkGov8ooZznwt(bh);
      //appendnew_next_sd_iX3VNQRqEzNotSgf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iX3VNQRqEzNotSgf');
    }
  }

  sd_pUxBkGov8ooZznwt(bh) {
    try {
      const page = this.page;
      let ben = JSON.parse(
        page.routeData.routeData
          ? page.routeData.routeData
          : page.routeData.data
      );
      if (page.routeData._type === 'payment') {
        page.feedback = `Payment to ${ben.benName} was sucessfully`;
        page.isPayment = true;
      } else if (page.routeData._type === 'ele') {
        page.feedback = `${ben.benName}'s Electricity has been purchased sucessfully`;
      } else if (page.routeData._type === 'transfer') {
        page.feedback = `${ben.benName} Transfer was made sucessfully`;
      } else {
        page.feedback = ` ${ben.benName} has been added to your benefeciaries`;
      }

      page.routeData = JSON.parse(page.routeData.routeData);

      this.sd_W7CHMmSdOZ185aR9(bh);
      //appendnew_next_sd_pUxBkGov8ooZznwt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pUxBkGov8ooZznwt');
    }
  }

  sd_W7CHMmSdOZ185aR9(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.routeData);
      //appendnew_next_sd_W7CHMmSdOZ185aR9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W7CHMmSdOZ185aR9');
    }
  }

  async sd_UPGqBtmDeeo9VSH1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(
          '/logged_in_landing/pay_beneficiary'
        );
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_UPGqBtmDeeo9VSH1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UPGqBtmDeeo9VSH1');
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
  //appendnew_flow_sucessComponent_Catch
}
