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
  selector: 'bh-buy_electricity',
  templateUrl: './buy_electricity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_electricityComponent {
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
      this.sd_RhetJNiooF2SX7DS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RhetJNiooF2SX7DS(bh) {
    try {
      bh = this.sd_GnFOuCY1M8rEoqSR(bh);
      //appendnew_next_sd_RhetJNiooF2SX7DS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RhetJNiooF2SX7DS');
    }
  }

  sd_0aJD3XniKPm4UEzK(Index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { Index };
      bh.local = {};
      bh = this.sd_6HiFRhzbHYhSN1Be(bh);
      //appendnew_next_sd_0aJD3XniKPm4UEzK
      return bh.input.Index;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0aJD3XniKPm4UEzK');
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
      bh = this.sd_jQumYFVMcdw7ayhy(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_epBRYOaXd6G9NDUk');
    }
  }
  //appendnew_flow_buy_electricityComponent_start

  sd_GnFOuCY1M8rEoqSR(bh) {
    try {
      this.page.user = undefined;
      this.page.benArray = undefined;
      this.page.selected = undefined;
      bh = this.sd_gSJD88CnfKGvEozs(bh);
      //appendnew_next_sd_GnFOuCY1M8rEoqSR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GnFOuCY1M8rEoqSR');
    }
  }

  sd_gSJD88CnfKGvEozs(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_LJP7U07GCLQChPnj(bh);
      //appendnew_next_sd_gSJD88CnfKGvEozs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gSJD88CnfKGvEozs');
    }
  }

  sd_LJP7U07GCLQChPnj(bh) {
    try {
      this.page.ssdurl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Rno4OEhQVlCORiaL(bh);
      //appendnew_next_sd_LJP7U07GCLQChPnj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LJP7U07GCLQChPnj');
    }
  }

  sd_Rno4OEhQVlCORiaL(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdurl + 'get-beneficiary-electricity';
      page.collection = 'beneficiary-electricity';

      bh = this.sd_Gbgac9bKVClCx6yH(bh);
      //appendnew_next_sd_Rno4OEhQVlCORiaL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rno4OEhQVlCORiaL');
    }
  }

  async sd_Gbgac9bKVClCx6yH(bh) {
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
      bh = this.sd_dNY8MfPEYD17kDAG(bh);
      //appendnew_next_sd_Gbgac9bKVClCx6yH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gbgac9bKVClCx6yH');
    }
  }

  sd_dNY8MfPEYD17kDAG(bh) {
    try {
      const page = this.page;
      bh.beneficiaries = page.results.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });
      page.benArray = bh.beneficiaries;
      //appendnew_next_sd_dNY8MfPEYD17kDAG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dNY8MfPEYD17kDAG');
    }
  }

  sd_6HiFRhzbHYhSN1Be(bh) {
    try {
      const page = this.page;
      page.selected = bh.input.Index;

      bh = this.sd_n7gHGsIp9RCqVyuj(bh);
      //appendnew_next_sd_6HiFRhzbHYhSN1Be
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6HiFRhzbHYhSN1Be');
    }
  }

  sd_n7gHGsIp9RCqVyuj(bh) {
    try {
      sessionStorage.setItem('electricBen', JSON.stringify(this.page.selected));
      //appendnew_next_sd_n7gHGsIp9RCqVyuj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n7gHGsIp9RCqVyuj');
    }
  }

  async sd_jQumYFVMcdw7ayhy(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_jQumYFVMcdw7ayhy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jQumYFVMcdw7ayhy');
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
  //appendnew_flow_buy_electricityComponent_Catch
}
