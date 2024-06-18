// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-update_permanent_limits',
  templateUrl: './update_permanent_limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class update_permanent_limitsComponent {
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
      this.sd_bfApQau7rm5BSggd(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bfApQau7rm5BSggd(bh) {
    try {
      bh = this.sd_McqC2bcbekB3X9qo(bh);
      //appendnew_next_sd_bfApQau7rm5BSggd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bfApQau7rm5BSggd');
    }
  }

  updatePerm(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_UoR3N2LOezVoGzZT(bh);
      //appendnew_next_updatePerm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9KZv2RncQO2OEjVt');
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
      bh = this.sd_sdVWcxFBtJt69MNp(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u1qnw1XLoFIzTeAR');
    }
  }
  //appendnew_flow_update_permanent_limitsComponent_start

  sd_McqC2bcbekB3X9qo(bh) {
    try {
      this.page.submitted = undefined;
      this.page.user = undefined;
      this.page.perm = undefined;
      this.page.cash_limit = undefined;
      this.page.online_limit = undefined;
      this.page.card_limit = undefined;
      bh = this.sd_oJLjMNgssetpTbjO(bh);
      //appendnew_next_sd_McqC2bcbekB3X9qo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_McqC2bcbekB3X9qo');
    }
  }

  sd_oJLjMNgssetpTbjO(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_eOQWbhnv1HXUlxyQ(bh);
      //appendnew_next_sd_oJLjMNgssetpTbjO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oJLjMNgssetpTbjO');
    }
  }

  sd_eOQWbhnv1HXUlxyQ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-customers';

      bh = this.sd_mitctppfkplUIjOk(bh);
      //appendnew_next_sd_eOQWbhnv1HXUlxyQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eOQWbhnv1HXUlxyQ');
    }
  }

  sd_mitctppfkplUIjOk(bh) {
    try {
      bh.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_xgywkZQ26f37cTSm(bh);
      //appendnew_next_sd_mitctppfkplUIjOk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mitctppfkplUIjOk');
    }
  }

  async sd_xgywkZQ26f37cTSm(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.users = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_TERta0VjKJRaWevk(bh);
      //appendnew_next_sd_xgywkZQ26f37cTSm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xgywkZQ26f37cTSm');
    }
  }

  sd_TERta0VjKJRaWevk(bh) {
    try {
      const page = this.page;
      console.log('User ', bh.result);
      page.user = page.users.find(
        (user) => user.accountNumber === bh.result.accountNumber
      );
      console.log(page.user);

      page.perm = {
        cash_withdrawals_perm: `R${page.user.cash_withdrawal_limit}`,
        card_machine_perm: `R${page.user.card_purchases_limit}`,
        online_scan_perm: `R${page.user.online_scan_to_pay_phone}`,
      };
      //appendnew_next_sd_TERta0VjKJRaWevk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TERta0VjKJRaWevk');
    }
  }

  sd_UoR3N2LOezVoGzZT(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_oUPQxZ4v5f7zDtxA(bh);
      //appendnew_next_sd_UoR3N2LOezVoGzZT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UoR3N2LOezVoGzZT');
    }
  }

  async sd_oUPQxZ4v5f7zDtxA(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_9Nso4U7zi5Ru7vZr(bh);
      } else {
        bh = await this.sd_wdTQmhnvrX0bNhwe(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oUPQxZ4v5f7zDtxA');
    }
  }

  sd_9Nso4U7zi5Ru7vZr(bh) {
    try {
      const page = this.page;
      console.log(page.perm);

      page.user.cash_withdrawal_limit = Number(
        page.perm.cash_withdrawals_perm.substr(1)
      );
      page.user.card_purchases_limit = Number(
        page.perm.card_machine_perm.substr(1)
      );
      page.user.online_scan_to_pay_phone = Number(
        page.perm.online_scan_perm.substr(1)
      );

      console.log(page.user);
      bh = this.sd_I7fxJxLMm5UyNuaW(bh);
      //appendnew_next_sd_9Nso4U7zi5Ru7vZr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Nso4U7zi5Ru7vZr');
    }
  }

  async sd_I7fxJxLMm5UyNuaW(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          this.page.user.cash_withdrawal_limit,
          5000,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_fa9dNXB26XlXIndg(bh);
      } else {
        bh = await this.sd_ngLXDhCTRUehT6Xz(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I7fxJxLMm5UyNuaW');
    }
  }

  async sd_fa9dNXB26XlXIndg(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          this.page.user.card_purchases_limit,
          50000,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SPysi8N9aIwqGO6V(bh);
      } else {
        bh = await this.sd_lUDVeCl2Gq5t8L2d(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fa9dNXB26XlXIndg');
    }
  }

  async sd_SPysi8N9aIwqGO6V(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          this.page.user.online_scan_to_pay_phone,
          50000,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_1k50Gxk7T11n99Y8(bh);
      } else {
        bh = await this.sd_slOnP62hTbCZeTet(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SPysi8N9aIwqGO6V');
    }
  }

  sd_1k50Gxk7T11n99Y8(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_7j7Wcpx8CSu9qsVu(bh);
      //appendnew_next_sd_1k50Gxk7T11n99Y8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1k50Gxk7T11n99Y8');
    }
  }

  sd_7j7Wcpx8CSu9qsVu(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update';

      bh = this.sd_L4sN7rUf0h2gM5aS(bh);
      //appendnew_next_sd_7j7Wcpx8CSu9qsVu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7j7Wcpx8CSu9qsVu');
    }
  }

  async sd_L4sN7rUf0h2gM5aS(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.user,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_gMbfVjlrqDYY9614(bh);
      //appendnew_next_sd_L4sN7rUf0h2gM5aS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L4sN7rUf0h2gM5aS');
    }
  }

  sd_gMbfVjlrqDYY9614(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Permanent limits successfully updated', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_gMbfVjlrqDYY9614
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gMbfVjlrqDYY9614');
    }
  }

  sd_slOnP62hTbCZeTet(bh) {
    try {
      const page = this.page;
      page.online_limit = true;
      //appendnew_next_sd_slOnP62hTbCZeTet
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_slOnP62hTbCZeTet');
    }
  }

  sd_lUDVeCl2Gq5t8L2d(bh) {
    try {
      const page = this.page;
      page.card_limit = true;
      //appendnew_next_sd_lUDVeCl2Gq5t8L2d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lUDVeCl2Gq5t8L2d');
    }
  }

  sd_ngLXDhCTRUehT6Xz(bh) {
    try {
      const page = this.page;
      page.cash_limit = true;
      //appendnew_next_sd_ngLXDhCTRUehT6Xz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ngLXDhCTRUehT6Xz');
    }
  }

  sd_wdTQmhnvrX0bNhwe(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_wdTQmhnvrX0bNhwe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wdTQmhnvrX0bNhwe');
    }
  }

  async sd_sdVWcxFBtJt69MNp(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_sdVWcxFBtJt69MNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sdVWcxFBtJt69MNp');
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
  //appendnew_flow_update_permanent_limitsComponent_Catch
}
