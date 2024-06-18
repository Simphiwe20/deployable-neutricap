// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-messages',
  templateUrl: './messages.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class messagesComponent {
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
      this.sd_LcvImEeazBu1tGQG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_LcvImEeazBu1tGQG(bh) {
    try {
      bh = this.sd_AIGBMD2nlwzvORPj(bh);
      //appendnew_next_sd_LcvImEeazBu1tGQG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LcvImEeazBu1tGQG');
    }
  }

  getElectricity(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KgAvLx72RX0GLFJx(bh);
      //appendnew_next_getElectricity
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NjfHHCxJjOJV0vnR');
    }
  }

  getScan(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_z5ioaXk9YOX0ts3M(bh);
      //appendnew_next_getScan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaF0Ztq3Kbxr1bor');
    }
  }

  getAirtime(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NaIyo7cEWVdfjJHz(bh);
      //appendnew_next_getAirtime
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x9m0p9mzequl3sZ3');
    }
  }

  getBeneficiary(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_B2SF1jKSYwErsrng(bh);
      //appendnew_next_getBeneficiary
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XHIm2cslpcv4jpll');
    }
  }

  updateMessage(message: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { message };
      bh.local = {};
      bh = this.sd_EzY2hCKyYGqdtrEp(bh);
      //appendnew_next_updateMessage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L2nh9SXrWCG5en3S');
    }
  }
  //appendnew_flow_messagesComponent_start

  sd_AIGBMD2nlwzvORPj(bh) {
    try {
      this.page.electricity_array = undefined;
      this.page.scanned = undefined;
      this.page.airitme = undefined;
      this.page.ben = undefined;
      this.page.contacanated = undefined;
      this.page.messages = undefined;
      bh = this.sd_2hOeDMIyzMBjcPQY(bh);
      //appendnew_next_sd_AIGBMD2nlwzvORPj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AIGBMD2nlwzvORPj');
    }
  }

  sd_2hOeDMIyzMBjcPQY(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.getMessages(bh);
      //appendnew_next_sd_2hOeDMIyzMBjcPQY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2hOeDMIyzMBjcPQY');
    }
  }

  async getMessages(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getTransMessage();
      bh.messages = outputVariables.local.messages;

      bh = this.sd_PqI5bKDCALhoRBZD(bh);
      //appendnew_next_getMessages
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_idKJnZUv0o15F4gd');
    }
  }

  sd_PqI5bKDCALhoRBZD(bh) {
    try {
      const page = this.page;
      page.messages = bh.messages.filter(
        (message, indx) => message.belongsTo == page.user.accountNumber
      );
      //appendnew_next_sd_PqI5bKDCALhoRBZD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PqI5bKDCALhoRBZD');
    }
  }

  sd_KgAvLx72RX0GLFJx(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Gj8SZ3kfDvMOjBJt(bh);
      //appendnew_next_sd_KgAvLx72RX0GLFJx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KgAvLx72RX0GLFJx');
    }
  }

  sd_Gj8SZ3kfDvMOjBJt(bh) {
    try {
      const page = this.page;
      bh.url_electric = page.ssdUrl + 'get-electricity';

      bh.body = {
        collection: 'electricity',
      };
      bh = this.sd_kWxlBgP7jub4HX9j(bh);
      //appendnew_next_sd_Gj8SZ3kfDvMOjBJt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gj8SZ3kfDvMOjBJt');
    }
  }

  async sd_kWxlBgP7jub4HX9j(bh) {
    try {
      let requestOptions = {
        url: bh.url_electric,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_R435umt3s3rq9mO0(bh);
      //appendnew_next_sd_kWxlBgP7jub4HX9j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kWxlBgP7jub4HX9j');
    }
  }

  sd_R435umt3s3rq9mO0(bh) {
    try {
      const page = this.page;
      bh.electricity = page.result.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.electricity_array = bh.electricity;
      console.log(page.electricity_array);

      //appendnew_next_sd_R435umt3s3rq9mO0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R435umt3s3rq9mO0');
    }
  }

  sd_z5ioaXk9YOX0ts3M(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_6vsQuDjlD3pho4J4(bh);
      //appendnew_next_sd_z5ioaXk9YOX0ts3M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z5ioaXk9YOX0ts3M');
    }
  }

  sd_6vsQuDjlD3pho4J4(bh) {
    try {
      const page = this.page;
      bh.url_scanned = page.ssdUrl + 'get-scanned';

      bh.body = {
        collection: 'scan_to_pay',
      };
      bh = this.sd_ldDcrkXEyoSKYHhf(bh);
      //appendnew_next_sd_6vsQuDjlD3pho4J4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6vsQuDjlD3pho4J4');
    }
  }

  async sd_ldDcrkXEyoSKYHhf(bh) {
    try {
      let requestOptions = {
        url: bh.url_scanned,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_93Acfxr8d3FbtmFT(bh);
      //appendnew_next_sd_ldDcrkXEyoSKYHhf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ldDcrkXEyoSKYHhf');
    }
  }

  sd_93Acfxr8d3FbtmFT(bh) {
    try {
      const page = this.page;
      bh.scanner = page.results.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.scanned = bh.scanner;

      bh = this.sd_9Mts9oTjlkMuIPG9(bh);
      //appendnew_next_sd_93Acfxr8d3FbtmFT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_93Acfxr8d3FbtmFT');
    }
  }

  sd_9Mts9oTjlkMuIPG9(bh) {
    try {
      const page = this.page;
      console.log('scanned ==>', page.scanned);
      //appendnew_next_sd_9Mts9oTjlkMuIPG9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Mts9oTjlkMuIPG9');
    }
  }

  sd_NaIyo7cEWVdfjJHz(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_2sVzz4ZMmJKttY7j(bh);
      //appendnew_next_sd_NaIyo7cEWVdfjJHz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NaIyo7cEWVdfjJHz');
    }
  }

  sd_2sVzz4ZMmJKttY7j(bh) {
    try {
      const page = this.page;
      bh.url_airtime = page.ssdUrl + 'get-airtime';

      bh.body_airtime = {
        collection: 'airtime',
      };
      bh = this.sd_JSZIpftIEmJyh2st(bh);
      //appendnew_next_sd_2sVzz4ZMmJKttY7j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2sVzz4ZMmJKttY7j');
    }
  }

  async sd_JSZIpftIEmJyh2st(bh) {
    try {
      let requestOptions = {
        url: bh.url_airtime,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body_airtime,
      };
      this.page.results_airtime = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_svyuHWAJZwPOtGQT(bh);
      //appendnew_next_sd_JSZIpftIEmJyh2st
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JSZIpftIEmJyh2st');
    }
  }

  sd_svyuHWAJZwPOtGQT(bh) {
    try {
      const page = this.page;
      bh.airtime = page.results_airtime.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.airtime = bh.airtime;

      bh = this.sd_bNfpBkgAt22iOEF5(bh);
      //appendnew_next_sd_svyuHWAJZwPOtGQT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_svyuHWAJZwPOtGQT');
    }
  }

  sd_bNfpBkgAt22iOEF5(bh) {
    try {
      const page = this.page;
      console.log('airtime ==>', page.airtime);
      //appendnew_next_sd_bNfpBkgAt22iOEF5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bNfpBkgAt22iOEF5');
    }
  }

  sd_B2SF1jKSYwErsrng(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_QCTW6HruhkNOZsDF(bh);
      //appendnew_next_sd_B2SF1jKSYwErsrng
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B2SF1jKSYwErsrng');
    }
  }

  sd_QCTW6HruhkNOZsDF(bh) {
    try {
      const page = this.page;
      bh.url_payed = page.ssdUrl + 'get-payed-ben';

      bh.body_payed = {
        collection: 'payed-ben',
      };
      bh = this.sd_WNtB0sEMcXAdg857(bh);
      //appendnew_next_sd_QCTW6HruhkNOZsDF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QCTW6HruhkNOZsDF');
    }
  }

  async sd_WNtB0sEMcXAdg857(bh) {
    try {
      let requestOptions = {
        url: bh.url_payed,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body_payed,
      };
      this.page.results_payed = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_jtkIHqRPN3YCnxLa(bh);
      //appendnew_next_sd_WNtB0sEMcXAdg857
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WNtB0sEMcXAdg857');
    }
  }

  sd_jtkIHqRPN3YCnxLa(bh) {
    try {
      const page = this.page;
      bh.payed_ben = page.results_payed.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.ben = bh.payed_ben;

      bh = this.sd_TrXnyxUrkhKXppe8(bh);
      //appendnew_next_sd_jtkIHqRPN3YCnxLa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jtkIHqRPN3YCnxLa');
    }
  }

  sd_TrXnyxUrkhKXppe8(bh) {
    try {
      const page = this.page;
      console.log('beneficiary ==>', page.ben);
      //appendnew_next_sd_TrXnyxUrkhKXppe8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TrXnyxUrkhKXppe8');
    }
  }

  sd_EzY2hCKyYGqdtrEp(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.input.message.read,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_0iaFYiV7SVKaS3O0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EzY2hCKyYGqdtrEp');
    }
  }

  sd_0iaFYiV7SVKaS3O0(bh) {
    try {
      const page = this.page;
      bh.input.message.read = true;
      bh.message = bh.input.message;

      console.log('Read message: ', bh.message);
      bh = this.sd_wdSKgCrmsvVb34HG(bh);
      //appendnew_next_sd_0iaFYiV7SVKaS3O0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0iaFYiV7SVKaS3O0');
    }
  }

  async sd_wdSKgCrmsvVb34HG(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.updateTransMessage(
        bh.message
      );

      //appendnew_next_sd_wdSKgCrmsvVb34HG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wdSKgCrmsvVb34HG');
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
  //appendnew_flow_messagesComponent_Catch
}
