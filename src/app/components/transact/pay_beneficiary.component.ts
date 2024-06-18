// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pay_beneficiary',
  templateUrl: './pay_beneficiary.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pay_beneficiaryComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_lzNe04xIa08dVtzb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_lzNe04xIa08dVtzb(bh) {
    try {
      bh = this.sd_BFDXUB2w6y8MwKRS(bh);
      //appendnew_next_sd_lzNe04xIa08dVtzb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzNe04xIa08dVtzb');
    }
  }

  sd_dvCdE5EBo2c2KQYq(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rIP8bFIQoUGBhzm6(bh);
      //appendnew_next_sd_dvCdE5EBo2c2KQYq
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dvCdE5EBo2c2KQYq');
    }
  }

  routeBen(ben: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { ben };
      bh.local = {};
      bh = this.sd_CdrNSks9iMQacITh(bh);
      //appendnew_next_routeBen
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o6RbSsgtTWfOb8I9');
    }
  }

  search(event: any = undefined, value: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event, value };
      bh.local = {};
      bh = this.sd_2hCo0zwLNiEPxQOD(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PBP9i1fTeFWXozjL');
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
      bh = this.sd_UM4QJsEnStLgVrSn(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dVUFgVSyDUCkmMXK');
    }
  }
  //appendnew_flow_pay_beneficiaryComponent_start

  sd_BFDXUB2w6y8MwKRS(bh) {
    try {
      this.page.initials = undefined;
      this.page.searchValue = undefined;
      bh = this.sd_l94TVFVFgSBTzcn6(bh);
      //appendnew_next_sd_BFDXUB2w6y8MwKRS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BFDXUB2w6y8MwKRS');
    }
  }

  sd_l94TVFVFgSBTzcn6(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_PsVSDHNsPlUgPjxX(bh);
      //appendnew_next_sd_l94TVFVFgSBTzcn6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l94TVFVFgSBTzcn6');
    }
  }

  sd_PsVSDHNsPlUgPjxX(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-beneficiary-money';
      console.log(bh.url);
      bh = this.sd_aLFfNrtl2AkPwbMV(bh);
      //appendnew_next_sd_PsVSDHNsPlUgPjxX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PsVSDHNsPlUgPjxX');
    }
  }

  async sd_aLFfNrtl2AkPwbMV(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.ben = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_qh9tBIQUgkhopSB6(bh);
      //appendnew_next_sd_aLFfNrtl2AkPwbMV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLFfNrtl2AkPwbMV');
    }
  }

  sd_qh9tBIQUgkhopSB6(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_I6wltKb6FtHkz2j9(bh);
      //appendnew_next_sd_qh9tBIQUgkhopSB6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qh9tBIQUgkhopSB6');
    }
  }

  sd_I6wltKb6FtHkz2j9(bh) {
    try {
      this.page.ssdurl = bh.system.environment.properties.ssdURL;
      bh = this.sd_z6eWW0IN9Q7mDw8a(bh);
      //appendnew_next_sd_I6wltKb6FtHkz2j9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I6wltKb6FtHkz2j9');
    }
  }

  sd_z6eWW0IN9Q7mDw8a(bh) {
    try {
      const page = this.page; // bh.url = page.ssdurl + "get-beneficiary-electricity";
      // page.collection = "beneficiary-electricity";

      console.log(page.user);
      console.log('Beneficiaries: ', page.ben);

      page.ben = page.ben.filter(
        (ben) => ben.belongsTo === page.user.accountNumber
      );

      console.log(page.ben);
      //appendnew_next_sd_z6eWW0IN9Q7mDw8a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z6eWW0IN9Q7mDw8a');
    }
  }

  sd_rIP8bFIQoUGBhzm6(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      //appendnew_next_sd_rIP8bFIQoUGBhzm6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rIP8bFIQoUGBhzm6');
    }
  }

  sd_CdrNSks9iMQacITh(bh) {
    try {
      const page = this.page;
      page.routeData = { routeData: JSON.stringify(bh.input.ben) };
      bh = this.sd_RujuLoAQ4WQmDoWC(bh);
      //appendnew_next_sd_CdrNSks9iMQacITh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CdrNSks9iMQacITh');
    }
  }

  async sd_RujuLoAQ4WQmDoWC(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/pay_user');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_RujuLoAQ4WQmDoWC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RujuLoAQ4WQmDoWC');
    }
  }

  sd_2hCo0zwLNiEPxQOD(bh) {
    try {
      const page = this.page;
      let bens = page.ben;
      let result = [];
      console.log(bh.input.event);

      page.ben = bens.filter((ben: any) => {
        if (ben.benName.indexOf(page.searchValue)) {
          console.log(bh.input.event);
          console.log(ben.benName.indexOf(page.searchValue));
          console.log('Includes', ben);
          return ben;
        }
      });

      // page.ben = result
      console.log(page.searchValue);

      if (!bh.input.value.value) {
        page.ben = page.ben;
        console.log('value:', page.ben);
      }
      // console.log(bh.input.event.key)
      // console.log(bh.input.value)
      //appendnew_next_sd_2hCo0zwLNiEPxQOD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2hCo0zwLNiEPxQOD');
    }
  }

  async sd_UM4QJsEnStLgVrSn(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_UM4QJsEnStLgVrSn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UM4QJsEnStLgVrSn');
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
  //appendnew_flow_pay_beneficiaryComponent_Catch
}
