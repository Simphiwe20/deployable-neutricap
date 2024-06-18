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
  selector: 'bh-cellphone',
  templateUrl: './cellphone.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class cellphoneComponent {
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
      this.sd_EvOjhlbEB71ykLuV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EvOjhlbEB71ykLuV(bh) {
    try {
      bh = this.sd_rTnAgKOWPRBTKAfp(bh);
      //appendnew_next_sd_EvOjhlbEB71ykLuV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EvOjhlbEB71ykLuV');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_BNRoTWy6w9Y5sL14(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FkoO8G1NKZ6EdS3P');
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
      bh = this.sd_ytdEEKTJiEmE1EwH(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vuBnuigTM9Ernh6i');
    }
  }
  //appendnew_flow_cellphoneComponent_start

  sd_rTnAgKOWPRBTKAfp(bh) {
    try {
      this.page.user = undefined;
      this.page.benRef = undefined;
      this.page.benDetails = undefined;
      this.page.submitted = false;
      this.page.isCapitecNum = true;
      bh = this.sd_tdOIGVSlQsQfcpFO(bh);
      //appendnew_next_sd_rTnAgKOWPRBTKAfp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rTnAgKOWPRBTKAfp');
    }
  }

  sd_tdOIGVSlQsQfcpFO(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_gmLEPbkMfFzGBZgi(bh);
      //appendnew_next_sd_tdOIGVSlQsQfcpFO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tdOIGVSlQsQfcpFO');
    }
  }

  sd_gmLEPbkMfFzGBZgi(bh) {
    try {
      const page = this.page;
      let initial = page.user.fullName.split(' ')[0][0];
      let lastName = page.user.fullName.split(' ')[1];
      page.benRef = `${initial} ${lastName}`;
      console.log('Ben Ref: ', page.benRef);

      page.benDetails = {
        benName: '',
        benNumber: '',
        benRef: page.benRef,
        notification: '',
        belongsTo: page.user.accountNumber,
      };
      //appendnew_next_sd_gmLEPbkMfFzGBZgi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gmLEPbkMfFzGBZgi');
    }
  }

  sd_BNRoTWy6w9Y5sL14(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_fdFVHGdfCtjWh85B(bh);
      //appendnew_next_sd_BNRoTWy6w9Y5sL14
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BNRoTWy6w9Y5sL14');
    }
  }

  sd_fdFVHGdfCtjWh85B(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      bh.url = page.ssdURL + 'get-customers';

      console.log(bh.url);

      page.submitted = true;
      bh = this.sd_ulUst75WAdqMyBs3(bh);
      //appendnew_next_sd_fdFVHGdfCtjWh85B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fdFVHGdfCtjWh85B');
    }
  }

  async sd_ulUst75WAdqMyBs3(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_sqwU9JsRJsZvpTr5(bh);
      } else {
        bh = await this.sd_QW5CFTjo4u19Jfkc(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ulUst75WAdqMyBs3');
    }
  }

  async sd_sqwU9JsRJsZvpTr5(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.customers = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_XXWYKFf2ojQk7chx(bh);
      //appendnew_next_sd_sqwU9JsRJsZvpTr5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sqwU9JsRJsZvpTr5');
    }
  }

  sd_XXWYKFf2ojQk7chx(bh) {
    try {
      const page = this.page;
      console.log(page.customers);
      page.isCapitecNum = page.customers.find((customer: any) => {
        if (customer.contacts == page.benDetails.benNumber) {
          console.log(customer.contacts);
          console.log(page.benDetails.benNumber);
          return customer;
        }
      });

      console.log(page.isCapitecNum);

      page.user = page.customers.find(
        (customer: any) => customer.accountNumber == page.user.accountNumber
      );

      console.log(page.user);
      bh = this.sd_8JjqJeUKsf7gOAlE(bh);
      //appendnew_next_sd_XXWYKFf2ojQk7chx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XXWYKFf2ojQk7chx');
    }
  }

  sd_8JjqJeUKsf7gOAlE(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.isCapitecNum,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_FSKpeqDb2eBWMfYo(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8JjqJeUKsf7gOAlE');
    }
  }

  async sd_FSKpeqDb2eBWMfYo(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.isCapitecNum.contacts,
          this.page.user.contacts,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_hm8AdCtHqndHWjeM(bh);
      } else {
        bh = await this.sd_0LB6CBTQg7NgQWSH(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FSKpeqDb2eBWMfYo');
    }
  }

  sd_hm8AdCtHqndHWjeM(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Cannot use your own number', '0K', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_hm8AdCtHqndHWjeM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hm8AdCtHqndHWjeM');
    }
  }

  sd_0LB6CBTQg7NgQWSH(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'add-beneficiary';
      page.benDetails.createdDate = new Date();
      bh.ben = { routeData: JSON.stringify(page.benDetails) };
      bh = this.sd_zbmNpZz8SQPpZfaT(bh);
      //appendnew_next_sd_0LB6CBTQg7NgQWSH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0LB6CBTQg7NgQWSH');
    }
  }

  async sd_zbmNpZz8SQPpZfaT(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.benDetails,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_BgPitruGIpXi75oG(bh);
      this.sd_id6BNyoPhv8c71a5(bh);
      //appendnew_next_sd_zbmNpZz8SQPpZfaT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zbmNpZz8SQPpZfaT');
    }
  }

  async sd_BgPitruGIpXi75oG(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      bh.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.ben),
        });
      //appendnew_next_sd_BgPitruGIpXi75oG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BgPitruGIpXi75oG');
    }
  }

  sd_id6BNyoPhv8c71a5(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_id6BNyoPhv8c71a5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_id6BNyoPhv8c71a5');
    }
  }

  sd_QW5CFTjo4u19Jfkc(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Check required fields', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_QW5CFTjo4u19Jfkc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QW5CFTjo4u19Jfkc');
    }
  }

  async sd_ytdEEKTJiEmE1EwH(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_ytdEEKTJiEmE1EwH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ytdEEKTJiEmE1EwH');
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
  //appendnew_flow_cellphoneComponent_Catch
}
