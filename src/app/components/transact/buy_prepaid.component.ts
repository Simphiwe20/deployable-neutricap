// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-buy_prepaid',
  templateUrl: './buy_prepaid.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_prepaidComponent {
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
      this.sd_ggt2meNZFITLAtSS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ggt2meNZFITLAtSS(bh) {
    try {
      bh = this.sd_eRPEZf3wmpsSG7xX(bh);
      //appendnew_next_sd_ggt2meNZFITLAtSS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ggt2meNZFITLAtSS');
    }
  }

  addBen(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_wr3840V8vLMaAHu1(bh);
      //appendnew_next_addBen
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_apes67a8xbDUAgXM');
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
      bh = this.sd_XoZjO57HGC3vhutc(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3QEh7Oe3EbAgBQDo');
    }
  }
  //appendnew_flow_buy_prepaidComponent_start

  sd_eRPEZf3wmpsSG7xX(bh) {
    try {
      this.page.submitted = false;
      this.page.user = undefined;
      this.page.prepaid = this.page.prepaid;
      this.page.menu = undefined;
      this.page.routeData = undefined;
      this.page.networks = undefined;
      bh = this.sd_YkqQWirAUoZD8L7O(bh);
      //appendnew_next_sd_eRPEZf3wmpsSG7xX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eRPEZf3wmpsSG7xX');
    }
  }

  sd_YkqQWirAUoZD8L7O(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_M53KjF9stPfYauYD(bh);
      //appendnew_next_sd_YkqQWirAUoZD8L7O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YkqQWirAUoZD8L7O');
    }
  }

  sd_M53KjF9stPfYauYD(bh) {
    try {
      const page = this.page;
      page.prepaid = {
        cellphone: '',
        benName: '',
        belongsTo: page.result.accountNumber,
        network: '',
        createdDate: new Date(),
      };

      console.log(page.result);

      page.menu = ['Cell C', 'Vodacom', 'MTN', 'Telkom'];
      //appendnew_next_sd_M53KjF9stPfYauYD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M53KjF9stPfYauYD');
    }
  }

  sd_wr3840V8vLMaAHu1(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_yk3MmJ8ZWqQmV65b(bh);
      //appendnew_next_sd_wr3840V8vLMaAHu1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wr3840V8vLMaAHu1');
    }
  }

  async sd_yk3MmJ8ZWqQmV65b(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2p42kMIVJi6GZBAZ(bh);
      } else {
        bh = await this.sd_2OjN65Yh3Aa3k3hS(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yk3MmJ8ZWqQmV65b');
    }
  }

  sd_2p42kMIVJi6GZBAZ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Ke yona', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_eKLO3P7pK4ghZNPz(bh);
      //appendnew_next_sd_2p42kMIVJi6GZBAZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2p42kMIVJi6GZBAZ');
    }
  }

  sd_eKLO3P7pK4ghZNPz(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_duFQsPROes1xWyJy(bh);
      //appendnew_next_sd_eKLO3P7pK4ghZNPz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eKLO3P7pK4ghZNPz');
    }
  }

  sd_duFQsPROes1xWyJy(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'add-beneficiary-airtime';
      bh.body = page.prepaid;

      console.log(bh.body);

      page.routeData = {
        routeData: JSON.stringify(page.prepaid),
        _type: 'prepaid',
      };
      bh = this.sd_gJCzJ6SMAK6eTgC5(bh);
      //appendnew_next_sd_duFQsPROes1xWyJy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_duFQsPROes1xWyJy');
    }
  }

  async sd_gJCzJ6SMAK6eTgC5(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      this.sd_nSj5iIfAN9TyRM0z(bh);
      bh = this.sd_GPMJF10vaUtu74Zp(bh);
      //appendnew_next_sd_gJCzJ6SMAK6eTgC5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gJCzJ6SMAK6eTgC5');
    }
  }

  sd_nSj5iIfAN9TyRM0z(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.results);
      //appendnew_next_sd_nSj5iIfAN9TyRM0z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nSj5iIfAN9TyRM0z');
    }
  }

  async sd_GPMJF10vaUtu74Zp(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      bh.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_GPMJF10vaUtu74Zp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GPMJF10vaUtu74Zp');
    }
  }

  sd_2OjN65Yh3Aa3k3hS(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Never', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_2OjN65Yh3Aa3k3hS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2OjN65Yh3Aa3k3hS');
    }
  }

  async sd_XoZjO57HGC3vhutc(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_XoZjO57HGC3vhutc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XoZjO57HGC3vhutc');
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
  //appendnew_flow_buy_prepaidComponent_Catch
}
