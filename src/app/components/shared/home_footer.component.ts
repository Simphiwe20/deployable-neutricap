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
  selector: 'bh-home_footer',
  templateUrl: './home_footer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class home_footerComponent {
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
      this.sd_AF8lhhmyqOMFCymo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AF8lhhmyqOMFCymo(bh) {
    try {
      bh = this.sd_VlkaV0GUiqlQNcQA(bh);
      //appendnew_next_sd_AF8lhhmyqOMFCymo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AF8lhhmyqOMFCymo');
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
      bh = this.sd_NT16hPbG3ySc80z1(bh);
      //appendnew_next_getElectricity
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MqzcLtCYtKQY8GC2');
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
      bh = this.sd_43Qrw6opf1ZhVy3A(bh);
      //appendnew_next_getScan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KgCqLKxoajVHrFNC');
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
      bh = this.sd_86D2WWac7O7hItDB(bh);
      //appendnew_next_getAirtime
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pS5gQUUgm02NtcWe');
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
      bh = this.sd_4PZlrevaqDHn8ihZ(bh);
      //appendnew_next_getBeneficiary
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KSjY2sXFWAQPMRe7');
    }
  }
  //appendnew_flow_home_footerComponent_start

  sd_VlkaV0GUiqlQNcQA(bh) {
    try {
      this.page.electricity_array = undefined;
      this.page.scanned = undefined;
      this.page.airitme = undefined;
      this.page.ben = undefined;
      this.page.messages = undefined;
      bh = this.sd_7gfjrecDpNKV8VUQ(bh);
      //appendnew_next_sd_VlkaV0GUiqlQNcQA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VlkaV0GUiqlQNcQA');
    }
  }

  sd_7gfjrecDpNKV8VUQ(bh) {
    try {
      const page = this.page;
      page.menuItems = [
        {
          image: '../../../assets/Web/Images/home.PNG',
          menuName: 'Home',
          routes: '/logged_in_landing/home',
        },
        {
          image: '../../../assets/Web/Images/card.jpg',
          menuName: 'Cards',
          routes: '/logged_in_landing/cards',
        },
        {
          image: '../../../assets/Web/Images/trans.jpg',
          menuName: 'Transact',
          routes: '/logged_in_landing/transact',
        },
        {
          image: '../../../assets/Web/Images/message.png',
          menuName: 'Messages',
          routes: '/logged_in_landing/messages',
        },
        {
          image: '../../../assets/Web/Images/explore.jpg',
          menuName: 'Explore',
          routes: '/logged_in_landing/explore',
        },
      ];
      bh = this.sd_fPplJH230ZLJ37mO(bh);
      //appendnew_next_sd_7gfjrecDpNKV8VUQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7gfjrecDpNKV8VUQ');
    }
  }

  sd_fPplJH230ZLJ37mO(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_a6lxvc5gCM2PWU3i(bh);
      //appendnew_next_sd_fPplJH230ZLJ37mO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fPplJH230ZLJ37mO');
    }
  }

  async sd_a6lxvc5gCM2PWU3i(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getTransMessage();
      this.page.messages = outputVariables.local.messages;

      bh = this.sd_YszqubFNKQBwjAgy(bh);
      //appendnew_next_sd_a6lxvc5gCM2PWU3i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a6lxvc5gCM2PWU3i');
    }
  }

  sd_YszqubFNKQBwjAgy(bh) {
    try {
      const page = this.page;
      console.log(page.messages);
      console.log(page.user);
      page.messages = page.messages.filter(
        (message) => message.belongsTo == page.user.accountNumber
      );
      console.log('After 1st filter: ', page.messages);
      page.messages ==
        page.messages.filter((message) => {
          if (!message.read) return message;
        });
      console.log('After 2nd filter: ', page.messages);

      //appendnew_next_sd_YszqubFNKQBwjAgy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YszqubFNKQBwjAgy');
    }
  }

  sd_NT16hPbG3ySc80z1(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_6VoMuQorf7LMaKnp(bh);
      //appendnew_next_sd_NT16hPbG3ySc80z1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NT16hPbG3ySc80z1');
    }
  }

  sd_6VoMuQorf7LMaKnp(bh) {
    try {
      const page = this.page;
      bh.url_electric = page.ssdUrl + 'get-electricity';

      bh.body = {
        collection: 'electricity',
      };
      bh = this.sd_JOFDMgXeAz5lxj7M(bh);
      //appendnew_next_sd_6VoMuQorf7LMaKnp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6VoMuQorf7LMaKnp');
    }
  }

  async sd_JOFDMgXeAz5lxj7M(bh) {
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
      bh = this.sd_ziKfwAzWPyt7j8Oe(bh);
      //appendnew_next_sd_JOFDMgXeAz5lxj7M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JOFDMgXeAz5lxj7M');
    }
  }

  sd_ziKfwAzWPyt7j8Oe(bh) {
    try {
      const page = this.page;
      bh.electricity = page.result.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.electricity_array = bh.electricity;
      console.log(page.electricity_array);

      //appendnew_next_sd_ziKfwAzWPyt7j8Oe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ziKfwAzWPyt7j8Oe');
    }
  }

  sd_43Qrw6opf1ZhVy3A(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_jmNKUcK66maUQ6BY(bh);
      //appendnew_next_sd_43Qrw6opf1ZhVy3A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_43Qrw6opf1ZhVy3A');
    }
  }

  sd_jmNKUcK66maUQ6BY(bh) {
    try {
      const page = this.page;
      bh.url_scanned = page.ssdUrl + 'get-scanned';

      bh.body = {
        collection: 'scan_to_pay',
      };
      bh = this.sd_nQ5Ns5PuQku8Tzcs(bh);
      //appendnew_next_sd_jmNKUcK66maUQ6BY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jmNKUcK66maUQ6BY');
    }
  }

  async sd_nQ5Ns5PuQku8Tzcs(bh) {
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
      bh = this.sd_KnxvAdJnDx3RjvXV(bh);
      //appendnew_next_sd_nQ5Ns5PuQku8Tzcs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nQ5Ns5PuQku8Tzcs');
    }
  }

  sd_KnxvAdJnDx3RjvXV(bh) {
    try {
      const page = this.page;
      bh.scanner = page.results.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.scanned = bh.scanner;

      bh = this.sd_zwEQoL5X6jrVhJeC(bh);
      //appendnew_next_sd_KnxvAdJnDx3RjvXV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KnxvAdJnDx3RjvXV');
    }
  }

  sd_zwEQoL5X6jrVhJeC(bh) {
    try {
      const page = this.page;
      console.log('scanned ==>', page.scanned);

      page.contacanated = page.scanned.concat(page.electricity_array);
      console.log('new1', page.contacanated);
      console.log('elec', bh.electricity);
      //appendnew_next_sd_zwEQoL5X6jrVhJeC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zwEQoL5X6jrVhJeC');
    }
  }

  sd_86D2WWac7O7hItDB(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_WAQmMZposmlVfMHO(bh);
      //appendnew_next_sd_86D2WWac7O7hItDB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_86D2WWac7O7hItDB');
    }
  }

  sd_WAQmMZposmlVfMHO(bh) {
    try {
      const page = this.page;
      bh.url_airtime = page.ssdUrl + 'get-airtime';

      bh.body_airtime = {
        collection: 'airtime',
      };
      bh = this.sd_fTayJ1exxv9u39lS(bh);
      //appendnew_next_sd_WAQmMZposmlVfMHO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WAQmMZposmlVfMHO');
    }
  }

  async sd_fTayJ1exxv9u39lS(bh) {
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
      bh = this.sd_7sU4nMFQWXUY45eC(bh);
      //appendnew_next_sd_fTayJ1exxv9u39lS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fTayJ1exxv9u39lS');
    }
  }

  sd_7sU4nMFQWXUY45eC(bh) {
    try {
      const page = this.page;
      bh.airtime = page.results_airtime.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.airtime = bh.airtime;

      bh = this.sd_hnQoWJPWPeV3wd4Y(bh);
      //appendnew_next_sd_7sU4nMFQWXUY45eC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7sU4nMFQWXUY45eC');
    }
  }

  sd_hnQoWJPWPeV3wd4Y(bh) {
    try {
      const page = this.page;
      console.log('airtime ==>', page.airtime);
      //appendnew_next_sd_hnQoWJPWPeV3wd4Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hnQoWJPWPeV3wd4Y');
    }
  }

  sd_4PZlrevaqDHn8ihZ(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_5XlozTVYG3epixVd(bh);
      //appendnew_next_sd_4PZlrevaqDHn8ihZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4PZlrevaqDHn8ihZ');
    }
  }

  sd_5XlozTVYG3epixVd(bh) {
    try {
      const page = this.page;
      bh.url_payed = page.ssdUrl + 'get-payed-ben';

      bh.body_payed = {
        collection: 'payed-ben',
      };
      bh = this.sd_C5E4mWkqc1WHr2Cw(bh);
      //appendnew_next_sd_5XlozTVYG3epixVd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5XlozTVYG3epixVd');
    }
  }

  async sd_C5E4mWkqc1WHr2Cw(bh) {
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
      bh = this.sd_LJAZJJgsJvC8A6kQ(bh);
      //appendnew_next_sd_C5E4mWkqc1WHr2Cw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C5E4mWkqc1WHr2Cw');
    }
  }

  sd_LJAZJJgsJvC8A6kQ(bh) {
    try {
      const page = this.page;
      bh.payed_ben = page.results_payed.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      page.ben = bh.payed_ben;

      bh = this.sd_Lzh0oK7R52L4FAGL(bh);
      //appendnew_next_sd_LJAZJJgsJvC8A6kQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LJAZJJgsJvC8A6kQ');
    }
  }

  sd_Lzh0oK7R52L4FAGL(bh) {
    try {
      const page = this.page;
      console.log('beneficiary ==>', page.ben);
      page.contacanated = page.contacanated.concat(bh.payed_ben);
      console.log('new2', page.contacanated);
      //appendnew_next_sd_Lzh0oK7R52L4FAGL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lzh0oK7R52L4FAGL');
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
  //appendnew_flow_home_footerComponent_Catch
}
