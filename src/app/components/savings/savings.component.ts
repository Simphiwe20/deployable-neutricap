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
  selector: 'bh-savings',
  templateUrl: './savings.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class savingsComponent {
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
      this.sd_2Z167GCwTiVxajnR(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2Z167GCwTiVxajnR(bh) {
    try {
      bh = this.sd_NcxYGB4Zjw58EuAK(bh);
      //appendnew_next_sd_2Z167GCwTiVxajnR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2Z167GCwTiVxajnR');
    }
  }

  //appendnew_flow_savingsComponent_start

  sd_NcxYGB4Zjw58EuAK(bh) {
    try {
      this.page.user = this.page.user;
      this.page.message = this.page.message;
      this.page.array = undefined;
      this.page.moneyOut = undefined;
      this.page.trans = undefined;
      bh = this.sd_dfCpMXjWPojUorhH(bh);
      //appendnew_next_sd_NcxYGB4Zjw58EuAK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NcxYGB4Zjw58EuAK');
    }
  }

  sd_dfCpMXjWPojUorhH(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_ws3eRWrAAi88Wt29(bh);
      //appendnew_next_sd_dfCpMXjWPojUorhH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dfCpMXjWPojUorhH');
    }
  }

  sd_ws3eRWrAAi88Wt29(bh) {
    try {
      bh.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_HLVusWP0adg7ObT2(bh);
      //appendnew_next_sd_ws3eRWrAAi88Wt29
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ws3eRWrAAi88Wt29');
    }
  }

  sd_HLVusWP0adg7ObT2(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'get-customers';

      bh = this.sd_13UF8k1s3DBqPXpA(bh);
      //appendnew_next_sd_HLVusWP0adg7ObT2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HLVusWP0adg7ObT2');
    }
  }

  async sd_13UF8k1s3DBqPXpA(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_D19pftqT303eqcka(bh);
      //appendnew_next_sd_13UF8k1s3DBqPXpA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_13UF8k1s3DBqPXpA');
    }
  }

  sd_D19pftqT303eqcka(bh) {
    try {
      const page = this.page;
      page.user = bh.res.find((user) => user.email === bh.result.email);

      console.log(page.user);
      let savings = page.user.available_balance
        ? page.user.available_balance
        : page.user['available balance'];
      console.log(savings);
      page.available_balance = Math.round(savings * 100) / 100;
      bh = this.sd_dbRonqrl7ouRNVMj(bh);
      //appendnew_next_sd_D19pftqT303eqcka
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D19pftqT303eqcka');
    }
  }

  sd_dbRonqrl7ouRNVMj(bh) {
    try {
      const page = this.page;
      // bh.array = bh.results.filter((user: any) => {
      //   return user.to == page.user[0].accountNumber;
      // });

      // page.array = bh.array
      // console.log("answer", page.array);

      // bh.out = bh.results.filter((user:any) => {
      //   return user.from == page.user[0].accountNumber
      // })

      // page.moneyOut = bh.out
      // console.log("moneyOut", page.moneyOut)
      bh = this.sd_tApvDAUUnwH1pPm6(bh);
      //appendnew_next_sd_dbRonqrl7ouRNVMj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dbRonqrl7ouRNVMj');
    }
  }

  async sd_tApvDAUUnwH1pPm6(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getPayedBen();
      bh.payedBen = outputVariables.local.payedBen;

      bh = this.sd_P5xS9Qryy2MqhKQm(bh);
      //appendnew_next_sd_tApvDAUUnwH1pPm6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tApvDAUUnwH1pPm6');
    }
  }

  async sd_P5xS9Qryy2MqhKQm(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getPayedAirtime();
      bh.payedAirtime = outputVariables.local.payedAirtime;

      bh = this.sd_gIEUFRpCWPyourp2(bh);
      //appendnew_next_sd_P5xS9Qryy2MqhKQm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P5xS9Qryy2MqhKQm');
    }
  }

  async sd_gIEUFRpCWPyourp2(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getPayedElec();
      bh.payedElec = outputVariables.local.payedElec;

      bh = this.sd_wq3BzCgeIEAjsznB(bh);
      //appendnew_next_sd_gIEUFRpCWPyourp2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gIEUFRpCWPyourp2');
    }
  }

  async sd_wq3BzCgeIEAjsznB(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getTransferMoney();
      bh.transfers = outputVariables.local.transfers;

      bh = this.getScanned(bh);
      //appendnew_next_sd_wq3BzCgeIEAjsznB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wq3BzCgeIEAjsznB');
    }
  }

  async getScanned(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getScanToPays();
      bh.scanned = outputVariables.local.data;

      bh = this.sd_rftktp2UPREHp7RO(bh);
      //appendnew_next_getScanned
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B7CHjWG8SF1wjTbW');
    }
  }

  sd_rftktp2UPREHp7RO(bh) {
    try {
      const page = this.page;
      console.log(bh.payedBen);
      console.log(bh.payedAirtime);

      page.trans = bh.payedBen.concat(bh.payedAirtime);
      page.trans = page.trans.concat(bh.transfers);
      page.trans = page.trans.concat(bh.payedElec);
      page.trans = page.trans.concat(bh.scanned);
      console.log('Before sort', page.trans);

      page.trans = page.trans.filter(
        (trans) => trans.belongsTo === page.user.accountNumber
      );
      page.moneyOut = page.trans.filter(
        (trans) => trans.moneyType === 'moneyOut'
      );
      console.log('after sort', page.trans);

      page.trans.map((trans: any) => {
        if (new Date(trans.transDate).getDate() == new Date().getDate() - 1) {
          trans.day = 'Yesterday';
        } else if (
          new Date(trans.transDate).getDate() == new Date().getDate()
        ) {
          trans.day = 'Today';
        } else {
          trans.day = trans.transDate;
        }
      });

      console.log(page.trans);
      console.log(bh.transfers);
      console.log(bh.payedElec);
      console.log(bh.scanned);
      //appendnew_next_sd_rftktp2UPREHp7RO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rftktp2UPREHp7RO');
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
  //appendnew_flow_savingsComponent_Catch
}
