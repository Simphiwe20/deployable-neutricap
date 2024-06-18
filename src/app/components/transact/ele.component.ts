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
  selector: 'bh-ele',
  templateUrl: './ele.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class eleComponent {
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
      this.sd_ElqLfE5Vukot2Pk2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ElqLfE5Vukot2Pk2(bh) {
    try {
      bh = this.sd_RPawcl3sEzQynRMA(bh);
      //appendnew_next_sd_ElqLfE5Vukot2Pk2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ElqLfE5Vukot2Pk2');
    }
  }

  buyElectric(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_sxOBl0AtYhmgk6mN(bh);
      //appendnew_next_buyElectric
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tnr87i7sU5qGDib3');
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
      bh = this.sd_AyMc23F67a8WKcop(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NIZ8zwFrjb4BY8vH');
    }
  }
  //appendnew_flow_eleComponent_start

  sd_RPawcl3sEzQynRMA(bh) {
    try {
      this.page.selected = undefined;
      this.page.electricForm = undefined;
      this.page.user = undefined;
      this.page.submitted = false;
      this.page.bal = undefined;
      this.page.routeData = undefined;
      this.page.message = undefined;
      bh = this.sd_Ypckas6FBahls4ox(bh);
      //appendnew_next_sd_RPawcl3sEzQynRMA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RPawcl3sEzQynRMA');
    }
  }

  sd_Ypckas6FBahls4ox(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_OPniTi0PYFf4XAOT(bh);
      //appendnew_next_sd_Ypckas6FBahls4ox
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ypckas6FBahls4ox');
    }
  }

  sd_OPniTi0PYFf4XAOT(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-customers';

      bh = this.sd_DEKJM31bAxWyDYzd(bh);
      //appendnew_next_sd_OPniTi0PYFf4XAOT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OPniTi0PYFf4XAOT');
    }
  }

  sd_DEKJM31bAxWyDYzd(bh) {
    try {
      this.page.selected = JSON.parse(sessionStorage.getItem('electricBen'));
      bh = this.sd_70nSj10BiaGC5l6z(bh);
      //appendnew_next_sd_DEKJM31bAxWyDYzd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DEKJM31bAxWyDYzd');
    }
  }

  sd_70nSj10BiaGC5l6z(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_qDYMyCcxde1rQisC(bh);
      //appendnew_next_sd_70nSj10BiaGC5l6z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_70nSj10BiaGC5l6z');
    }
  }

  async sd_qDYMyCcxde1rQisC(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_qPS2ENof2zGBzHSC(bh);
      //appendnew_next_sd_qDYMyCcxde1rQisC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qDYMyCcxde1rQisC');
    }
  }

  sd_qPS2ENof2zGBzHSC(bh) {
    try {
      const page = this.page;
      page.electricForm = {
        amount: '',
        to: page.selected.meterNumber,
        belongsTo: page.user.accountNumber,
        transDate: new Date(),
        transType: 'Electricity',
        benName: page.selected.benName,
        moneyType: 'moneyOut',
      };

      // console.log("balance ==>" ,page.user)
      console.log(page.user);
      page.user = page.res.find(
        (user) => page.user.accountNumber == user.accountNumber
      );
      console.log('user ==>', page.user);

      //appendnew_next_sd_qPS2ENof2zGBzHSC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qPS2ENof2zGBzHSC');
    }
  }

  sd_sxOBl0AtYhmgk6mN(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      if (page.user['available_balance']) {
        page.bal = page.user['available_balance'];
      } else {
        page.bal = page.user['available_balance'];
      }
      console.log(typeof page.bal);
      console.log(typeof page.electricForm.amount);
      bh = this.sd_HD6foY1u8TCHdcnM(bh);
      //appendnew_next_sd_sxOBl0AtYhmgk6mN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sxOBl0AtYhmgk6mN');
    }
  }

  async sd_HD6foY1u8TCHdcnM(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_sQgOOel4slHYkaZb(bh);
      } else {
        bh = await this.sd_idUGsFe7vL7ZiTaQ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HD6foY1u8TCHdcnM');
    }
  }

  sd_sQgOOel4slHYkaZb(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_qk0uDfeytHrhDCxl(bh);
      //appendnew_next_sd_sQgOOel4slHYkaZb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sQgOOel4slHYkaZb');
    }
  }

  async sd_qk0uDfeytHrhDCxl(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.bal,
          this.page.electricForm.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Zjl8aFu13LJgM18S(bh);
      } else {
        bh = await this.sd_fv7jO6zLohdWjKpz(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qk0uDfeytHrhDCxl');
    }
  }

  sd_Zjl8aFu13LJgM18S(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'buy-electricity';
      bh.update = page.ssdUrl + 'update';
      bh.newUser = page.ssdUrl + 'find-one-user';
      bh.difference = page.user['available_balance'] - page.electricForm.amount;

      bh.userEmail = {
        collection: 'users',
      };

      bh.body = {
        email: page.user.email,
        available_balance: bh.difference,
      };

      bh.date = page.electricForm.transDate.toDateString();
      bh.date = bh.date.split(' ');
      bh.date = `${bh.date[1]} ${bh.date[2]} ${bh.date[3]}`;

      page.message = `Capitec: Payment -R${
        page.electricForm.amount
      } from Savings Ref; ${page.electricForm.transType}. Avail R${
        page.user['available balance']
          ? page.user['available balance']
          : page.user['available_balance']
      }; ${bh.date}.info: 082 123 1234`;
      page.message = {
        message: page.message,
        read: false,
        _type: 'payment',
        belongsTo: page.electricForm.belongsTo,
      };

      console.log(page.message);

      bh = this.sd_uCiycIzJ79O6k0qN(bh);
      //appendnew_next_sd_Zjl8aFu13LJgM18S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zjl8aFu13LJgM18S');
    }
  }

  async sd_uCiycIzJ79O6k0qN(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.addTransMessage(
        this.page.message
      );

      bh = this.updateBalance(bh);
      //appendnew_next_sd_uCiycIzJ79O6k0qN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uCiycIzJ79O6k0qN');
    }
  }

  async updateBalance(bh) {
    try {
      let requestOptions = {
        url: bh.update,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.updateResults = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.buyElectricity(bh);
      //appendnew_next_updateBalance
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1PWEO0zol8akitPv');
    }
  }

  async buyElectricity(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.electricForm,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.updateUser(bh);
      //appendnew_next_buyElectricity
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pNDNsVw1uKOuTZyA');
    }
  }

  async updateUser(bh) {
    try {
      let requestOptions = {
        url: bh.newUser,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.userEmail,
      };
      this.page.updatedUser = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_2hf16kLp6PKzH5bb(bh);
      //appendnew_next_updateUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NwsIJfNo26nwwwU4');
    }
  }

  sd_2hf16kLp6PKzH5bb(bh) {
    try {
      const page = this.page;
      bh.newBalance = page.updatedUser.filter((user: any) => {
        return user.belongsTo == page.user.accountNumber;
      });

      bh.Results = bh.newBalance[0];

      page.routeData = {
        routeData: JSON.stringify(page.electricForm),
        _type: 'ele',
      };

      bh = this.sd_ESOK0J7zRg0sTlYY(bh);
      //appendnew_next_sd_2hf16kLp6PKzH5bb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2hf16kLp6PKzH5bb');
    }
  }

  sd_ESOK0J7zRg0sTlYY(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(bh.Results));
      bh = this.sd_rsiNwe2paQu9Zglr(bh);
      //appendnew_next_sd_ESOK0J7zRg0sTlYY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ESOK0J7zRg0sTlYY');
    }
  }

  async sd_rsiNwe2paQu9Zglr(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_rsiNwe2paQu9Zglr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rsiNwe2paQu9Zglr');
    }
  }

  sd_fv7jO6zLohdWjKpz(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("ELECTRICITY AMOUNT CAN'T BE MORE THAN CURRENT BALANCE", 'OK', {
          duration: 5000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      this.sd_YaWxql2wWodOZKT2(bh);
      this.sd_HQyu3iYXMDoOpTv9(bh);
      //appendnew_next_sd_fv7jO6zLohdWjKpz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fv7jO6zLohdWjKpz');
    }
  }

  sd_YaWxql2wWodOZKT2(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.bal);
      //appendnew_next_sd_YaWxql2wWodOZKT2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YaWxql2wWodOZKT2');
    }
  }

  sd_HQyu3iYXMDoOpTv9(bh) {
    try {
      console.log(
        new Date().toLocaleTimeString(),
        this.page.electricForm.amount
      );
      //appendnew_next_sd_HQyu3iYXMDoOpTv9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HQyu3iYXMDoOpTv9');
    }
  }

  sd_idUGsFe7vL7ZiTaQ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('INVALID FIELDS', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_idUGsFe7vL7ZiTaQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_idUGsFe7vL7ZiTaQ');
    }
  }

  async sd_AyMc23F67a8WKcop(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_AyMc23F67a8WKcop
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AyMc23F67a8WKcop');
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
  //appendnew_flow_eleComponent_Catch
}
