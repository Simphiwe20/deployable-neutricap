// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pay_ben_electric',
  templateUrl: './pay_ben_electric.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pay_ben_electricComponent {
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
      this.sd_xf7t8X9Ye6lM7YIS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xf7t8X9Ye6lM7YIS(bh) {
    try {
      bh = this.sd_IWl8M6oJAKBcyY6N(bh);
      //appendnew_next_sd_xf7t8X9Ye6lM7YIS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xf7t8X9Ye6lM7YIS');
    }
  }

  pay(Index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { Index };
      bh.local = {};
      bh = this.sd_fdywoKIQ7rD6pDeH(bh);
      //appendnew_next_pay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_imxRlcjMb6AzDfsg');
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
      bh = this.sd_q3gK3AWJBKLqCsRK(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EcE1JNVwt9Bx0EQS');
    }
  }
  //appendnew_flow_pay_ben_electricComponent_start

  sd_IWl8M6oJAKBcyY6N(bh) {
    try {
      this.page.user = undefined;
      this.page.benArray = undefined;
      this.page.selected = undefined;
      bh = this.sd_UqSs5cRIzT53bSy2(bh);
      //appendnew_next_sd_IWl8M6oJAKBcyY6N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IWl8M6oJAKBcyY6N');
    }
  }

  sd_UqSs5cRIzT53bSy2(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_j6BmzFZsyKTZNyJU(bh);
      //appendnew_next_sd_UqSs5cRIzT53bSy2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UqSs5cRIzT53bSy2');
    }
  }

  sd_j6BmzFZsyKTZNyJU(bh) {
    try {
      this.page.ssdurl = bh.system.environment.properties.ssdURL;
      bh = this.sd_6bU6IPM2y6cpEn2r(bh);
      //appendnew_next_sd_j6BmzFZsyKTZNyJU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j6BmzFZsyKTZNyJU');
    }
  }

  sd_6bU6IPM2y6cpEn2r(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdurl + 'get-beneficiary-electricity';
      page.collection = 'beneficiary-electricity';

      bh = this.sd_ndxvOY5zJnissX0D(bh);
      //appendnew_next_sd_6bU6IPM2y6cpEn2r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6bU6IPM2y6cpEn2r');
    }
  }

  async sd_ndxvOY5zJnissX0D(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.collection,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_geeTXGYJtFb3Ef1M(bh);
      //appendnew_next_sd_ndxvOY5zJnissX0D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ndxvOY5zJnissX0D');
    }
  }

  sd_geeTXGYJtFb3Ef1M(bh) {
    try {
      const page = this.page;
      console.log(page.user);

      bh.beneficiaries = page.results.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });
      page.benArray = bh.beneficiaries;
      //appendnew_next_sd_geeTXGYJtFb3Ef1M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_geeTXGYJtFb3Ef1M');
    }
  }

  sd_fdywoKIQ7rD6pDeH(bh) {
    try {
      const page = this.page;
      page.selected = bh.input.Index;

      bh = this.sd_EjSuXhjTOYlGmLHM(bh);
      //appendnew_next_sd_fdywoKIQ7rD6pDeH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fdywoKIQ7rD6pDeH');
    }
  }

  sd_EjSuXhjTOYlGmLHM(bh) {
    try {
      sessionStorage.setItem('electricBen', JSON.stringify(this.page.selected));
      bh = this.sd_CVmkNnZnDdXTqukU(bh);
      //appendnew_next_sd_EjSuXhjTOYlGmLHM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EjSuXhjTOYlGmLHM');
    }
  }

  async sd_CVmkNnZnDdXTqukU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(
          '/logged_in_landing/buy_electricity/ele'
        );
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_CVmkNnZnDdXTqukU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CVmkNnZnDdXTqukU');
    }
  }

  async sd_q3gK3AWJBKLqCsRK(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_q3gK3AWJBKLqCsRK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q3gK3AWJBKLqCsRK');
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
  //appendnew_flow_pay_ben_electricComponent_Catch
}
