// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-buy_airtime',
  templateUrl: './buy_airtime.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_airtimeComponent {
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
      this.sd_qgOl7xPfpLhk11jg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qgOl7xPfpLhk11jg(bh) {
    try {
      bh = this.sd_CwMcluLfsmHhIPWt(bh);
      //appendnew_next_sd_qgOl7xPfpLhk11jg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qgOl7xPfpLhk11jg');
    }
  }

  buyAirtime(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_vLWb1y6VuxvPdhHG(bh);
      //appendnew_next_buyAirtime
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SpmgPe4nQNjEepkr');
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
      bh = this.sd_iK5tvYSxJS5dICmj(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_24fumwFjUgAxEt03');
    }
  }
  //appendnew_flow_buy_airtimeComponent_start

  sd_CwMcluLfsmHhIPWt(bh) {
    try {
      this.page.user = undefined;
      this.page.airArray = undefined;
      this.page.submitted = false;
      this.page.airtimeForm = undefined;
      bh = this.sd_zSKtOWO9bkwO9ge0(bh);
      //appendnew_next_sd_CwMcluLfsmHhIPWt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CwMcluLfsmHhIPWt');
    }
  }

  sd_zSKtOWO9bkwO9ge0(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.ben = route.snapshot.queryParams;
      bh = this.sd_JvH1qg9AIVxPAmsH(bh);
      //appendnew_next_sd_zSKtOWO9bkwO9ge0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zSKtOWO9bkwO9ge0');
    }
  }

  sd_JvH1qg9AIVxPAmsH(bh) {
    try {
      const page = this.page; // page.electricForm = {
      //     amount: "",
      //     to: page.selected.meterNumber,
      //     from: page.user.accountNumber
      // }

      // console.log(page.electricForm)

      page.ben = JSON.parse(page.ben.routeData);

      //appendnew_next_sd_JvH1qg9AIVxPAmsH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JvH1qg9AIVxPAmsH');
    }
  }

  sd_vLWb1y6VuxvPdhHG(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh = this.sd_onROqHqUyLBJ7PMu(bh);
      //appendnew_next_sd_vLWb1y6VuxvPdhHG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vLWb1y6VuxvPdhHG');
    }
  }

  async sd_onROqHqUyLBJ7PMu(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_eJMq9gjTFISbYfuh(bh);
      } else {
        bh = await this.sd_0jVYYb1Z5EeZxLcF(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_onROqHqUyLBJ7PMu');
    }
  }

  sd_eJMq9gjTFISbYfuh(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Yes Girl', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_b35Fpz8VAc4LXN6u(bh);
      //appendnew_next_sd_eJMq9gjTFISbYfuh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eJMq9gjTFISbYfuh');
    }
  }

  sd_b35Fpz8VAc4LXN6u(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_sawGifx5X9xOPMTQ(bh);
      //appendnew_next_sd_b35Fpz8VAc4LXN6u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b35Fpz8VAc4LXN6u');
    }
  }

  sd_sawGifx5X9xOPMTQ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'buy-airtime';

      bh = this.sd_KdGpmXUoMa47uI0L(bh);
      //appendnew_next_sd_sawGifx5X9xOPMTQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sawGifx5X9xOPMTQ');
    }
  }

  async sd_KdGpmXUoMa47uI0L(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.airtimeForm,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_MzHXeeI7ABNylgVK(bh);
      //appendnew_next_sd_KdGpmXUoMa47uI0L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KdGpmXUoMa47uI0L');
    }
  }

  async sd_MzHXeeI7ABNylgVK(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/buy-prepaid-mobile');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_MzHXeeI7ABNylgVK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MzHXeeI7ABNylgVK');
    }
  }

  sd_0jVYYb1Z5EeZxLcF(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Haibo', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_0jVYYb1Z5EeZxLcF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0jVYYb1Z5EeZxLcF');
    }
  }

  async sd_iK5tvYSxJS5dICmj(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_iK5tvYSxJS5dICmj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iK5tvYSxJS5dICmj');
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
  //appendnew_flow_buy_airtimeComponent_Catch
}
