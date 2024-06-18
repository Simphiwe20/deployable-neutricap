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
  selector: 'bh-prepaid_mobile',
  templateUrl: './prepaid_mobile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class prepaid_mobileComponent {
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
      this.sd_a6sBhvhXJoLYjZ8Z(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_h81qn81w9FB08Yix(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_IT9EoIIYBKkIPGAW(bh);
      //appendnew_next_sd_h81qn81w9FB08Yix
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h81qn81w9FB08Yix');
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
      bh = this.sd_VQDePcyCXZKN6vVN(bh);
      //appendnew_next_routeBen
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jbOwQQNMGDhxz8ag');
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
      bh = this.sd_siOtqgDEepYnHgVJ(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CYzHTRqmn6SGXo3B');
    }
  }
  sd_a6sBhvhXJoLYjZ8Z(bh) {
    try {
      bh = this.sd_FjiqlzOGvFHlx960(bh);
      //appendnew_next_sd_a6sBhvhXJoLYjZ8Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a6sBhvhXJoLYjZ8Z');
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
      bh = this.sd_H1CC70JdnvJUj7Zh(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3LNgheth3KG1E0Gu');
    }
  }
  //appendnew_flow_prepaid_mobileComponent_start

  sd_IT9EoIIYBKkIPGAW(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      //appendnew_next_sd_IT9EoIIYBKkIPGAW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IT9EoIIYBKkIPGAW');
    }
  }

  sd_VQDePcyCXZKN6vVN(bh) {
    try {
      const page = this.page;
      page.routeData = { routeData: JSON.stringify(bh.input.ben) };
      bh = this.sd_jlSe5188JDxC1ehw(bh);
      //appendnew_next_sd_VQDePcyCXZKN6vVN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VQDePcyCXZKN6vVN');
    }
  }

  async sd_jlSe5188JDxC1ehw(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/pay_user');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_jlSe5188JDxC1ehw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jlSe5188JDxC1ehw');
    }
  }

  sd_siOtqgDEepYnHgVJ(bh) {
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
      //appendnew_next_sd_siOtqgDEepYnHgVJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_siOtqgDEepYnHgVJ');
    }
  }

  sd_FjiqlzOGvFHlx960(bh) {
    try {
      this.page.initials = undefined;
      this.page.searchValue = undefined;
      bh = this.sd_BXQIbf3F22gMNuPk(bh);
      //appendnew_next_sd_FjiqlzOGvFHlx960
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FjiqlzOGvFHlx960');
    }
  }

  sd_BXQIbf3F22gMNuPk(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_JdjvJT6p0Tr28ypJ(bh);
      //appendnew_next_sd_BXQIbf3F22gMNuPk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BXQIbf3F22gMNuPk');
    }
  }

  sd_JdjvJT6p0Tr28ypJ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-beneficiary-money';
      console.log(bh.url);
      bh = this.sd_gh2xd36Ve3gfMBXt(bh);
      //appendnew_next_sd_JdjvJT6p0Tr28ypJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JdjvJT6p0Tr28ypJ');
    }
  }

  async sd_gh2xd36Ve3gfMBXt(bh) {
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
      bh = this.sd_5OF3UPUkrMHYNg2w(bh);
      //appendnew_next_sd_gh2xd36Ve3gfMBXt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gh2xd36Ve3gfMBXt');
    }
  }

  sd_5OF3UPUkrMHYNg2w(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_xPxqDRfBvxyaSEfA(bh);
      //appendnew_next_sd_5OF3UPUkrMHYNg2w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5OF3UPUkrMHYNg2w');
    }
  }

  sd_xPxqDRfBvxyaSEfA(bh) {
    try {
      this.page.ssdurl = bh.system.environment.properties.ssdURL;
      bh = this.sd_UHZLfmenRpyBI3yS(bh);
      //appendnew_next_sd_xPxqDRfBvxyaSEfA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xPxqDRfBvxyaSEfA');
    }
  }

  sd_UHZLfmenRpyBI3yS(bh) {
    try {
      const page = this.page; // bh.url = page.ssdurl + "get-beneficiary-electricity";
      // page.collection = "beneficiary-electricity";

      console.log(page.user);
      console.log('Beneficiaries: ', page.ben);

      page.ben = page.ben.filter(
        (ben) => ben.belongsTo === page.user.accountNumber
      );

      console.log(page.ben);
      //appendnew_next_sd_UHZLfmenRpyBI3yS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UHZLfmenRpyBI3yS');
    }
  }

  async sd_H1CC70JdnvJUj7Zh(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_H1CC70JdnvJUj7Zh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H1CC70JdnvJUj7Zh');
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
  //appendnew_flow_prepaid_mobileComponent_Catch
}
