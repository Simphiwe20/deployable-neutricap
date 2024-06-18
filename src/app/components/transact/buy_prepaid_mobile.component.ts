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
  selector: 'bh-buy_prepaid_mobile',
  templateUrl: './buy_prepaid_mobile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_prepaid_mobileComponent {
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
      this.sd_p4sm80b2Lk7ftExJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_p4sm80b2Lk7ftExJ(bh) {
    try {
      bh = this.sd_zZrEz4qRverzK30w(bh);
      //appendnew_next_sd_p4sm80b2Lk7ftExJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p4sm80b2Lk7ftExJ');
    }
  }

  sd_EHtPPpFLPEf2LrLb(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_JLd8VYofvYgod59E(bh);
      //appendnew_next_sd_EHtPPpFLPEf2LrLb
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EHtPPpFLPEf2LrLb');
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
      bh = this.sd_gXxT5pfnmBdecsA0(bh);
      //appendnew_next_routeBen
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aE63iJPpfCGnZXSt');
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
      bh = this.sd_smadqUhuYDNYVAWd(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fHVJawpJv95D4MrJ');
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
      bh = this.sd_4b8LN9LgZ3swauQi(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BlW2Uy9nx8jpPrrE');
    }
  }
  //appendnew_flow_buy_prepaid_mobileComponent_start

  sd_zZrEz4qRverzK30w(bh) {
    try {
      this.page.initials = undefined;
      this.page.searchValue = undefined;
      bh = this.sd_r2KPhIQlg9Yol0Cf(bh);
      //appendnew_next_sd_zZrEz4qRverzK30w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zZrEz4qRverzK30w');
    }
  }

  sd_r2KPhIQlg9Yol0Cf(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_fyp5ipo8XmRGM3D7(bh);
      //appendnew_next_sd_r2KPhIQlg9Yol0Cf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r2KPhIQlg9Yol0Cf');
    }
  }

  sd_fyp5ipo8XmRGM3D7(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-beneficiary-airtime';
      console.log(bh.url);
      bh = this.sd_qwpK0FsFshMXIGwO(bh);
      //appendnew_next_sd_fyp5ipo8XmRGM3D7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fyp5ipo8XmRGM3D7');
    }
  }

  async sd_qwpK0FsFshMXIGwO(bh) {
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
      bh = this.sd_V75CLoFKEzRuCoTr(bh);
      //appendnew_next_sd_qwpK0FsFshMXIGwO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qwpK0FsFshMXIGwO');
    }
  }

  sd_V75CLoFKEzRuCoTr(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_5cpVx162KKGnJIfs(bh);
      //appendnew_next_sd_V75CLoFKEzRuCoTr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V75CLoFKEzRuCoTr');
    }
  }

  sd_5cpVx162KKGnJIfs(bh) {
    try {
      this.page.ssdurl = bh.system.environment.properties.ssdURL;
      bh = this.sd_aVfvP6BOOlhYdVgB(bh);
      //appendnew_next_sd_5cpVx162KKGnJIfs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5cpVx162KKGnJIfs');
    }
  }

  sd_aVfvP6BOOlhYdVgB(bh) {
    try {
      const page = this.page;
      console.log(page.user);
      console.log('Beneficiaries: ', page.ben);

      page.ben = page.ben.filter(
        (ben) => ben.belongsTo === page.user.accountNumber
      );

      console.log(page.ben);
      //appendnew_next_sd_aVfvP6BOOlhYdVgB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aVfvP6BOOlhYdVgB');
    }
  }

  sd_JLd8VYofvYgod59E(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      //appendnew_next_sd_JLd8VYofvYgod59E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JLd8VYofvYgod59E');
    }
  }

  sd_gXxT5pfnmBdecsA0(bh) {
    try {
      const page = this.page;
      page.routeData = { routeData: JSON.stringify(bh.input.ben) };
      bh = this.sd_0qrEfgaQPuKQOTKU(bh);
      //appendnew_next_sd_gXxT5pfnmBdecsA0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gXxT5pfnmBdecsA0');
    }
  }

  async sd_0qrEfgaQPuKQOTKU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/buy_airtime');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_0qrEfgaQPuKQOTKU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0qrEfgaQPuKQOTKU');
    }
  }

  sd_smadqUhuYDNYVAWd(bh) {
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
      //appendnew_next_sd_smadqUhuYDNYVAWd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_smadqUhuYDNYVAWd');
    }
  }

  async sd_4b8LN9LgZ3swauQi(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_4b8LN9LgZ3swauQi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4b8LN9LgZ3swauQi');
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
  //appendnew_flow_buy_prepaid_mobileComponent_Catch
}
