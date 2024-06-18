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
  selector: 'bh-add_electricity_ben',
  templateUrl: './add_electricity_ben.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class add_electricity_benComponent {
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
      this.sd_4pmxDWUDTCW1NkXl(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4pmxDWUDTCW1NkXl(bh) {
    try {
      bh = this.sd_VL1zlaote2UI4k8Y(bh);
      //appendnew_next_sd_4pmxDWUDTCW1NkXl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4pmxDWUDTCW1NkXl');
    }
  }

  addBeneficiary(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_caQLY02q6nk65Ws7(bh);
      //appendnew_next_addBeneficiary
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wGSCmU9uNxGGykSE');
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
      bh = this.sd_yMKS36KU4TURO3dg(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTF1lsItsaAgcdfM');
    }
  }
  //appendnew_flow_add_electricity_benComponent_start

  sd_VL1zlaote2UI4k8Y(bh) {
    try {
      this.page.electric = this.page.electric;
      this.page.user = undefined;
      this.page.submitted = false;
      this.page.routeData = undefined;
      bh = this.sd_NoX1CtqIGZCLH1i5(bh);
      //appendnew_next_sd_VL1zlaote2UI4k8Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VL1zlaote2UI4k8Y');
    }
  }

  sd_NoX1CtqIGZCLH1i5(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_lZn42Dc2ZX4U6P4q(bh);
      //appendnew_next_sd_NoX1CtqIGZCLH1i5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NoX1CtqIGZCLH1i5');
    }
  }

  sd_lZn42Dc2ZX4U6P4q(bh) {
    try {
      const page = this.page;
      page.electric = {
        meterNumber: '',
        benName: '',
        belongsTo: page.result.accountNumber,
        cellPhone: '',
      };

      //appendnew_next_sd_lZn42Dc2ZX4U6P4q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lZn42Dc2ZX4U6P4q');
    }
  }

  sd_caQLY02q6nk65Ws7(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_ZulLOSXrNMHmQzky(bh);
      //appendnew_next_sd_caQLY02q6nk65Ws7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_caQLY02q6nk65Ws7');
    }
  }

  async sd_ZulLOSXrNMHmQzky(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_eTM5HEadG8mluSeT(bh);
      } else {
        bh = await this.sd_GKVxOWd4q4y2a21K(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZulLOSXrNMHmQzky');
    }
  }

  sd_eTM5HEadG8mluSeT(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Ke yona', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_kfifbo2sIFGm5kl9(bh);
      //appendnew_next_sd_eTM5HEadG8mluSeT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eTM5HEadG8mluSeT');
    }
  }

  sd_kfifbo2sIFGm5kl9(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_LCL8IPnUcbpewMH1(bh);
      //appendnew_next_sd_kfifbo2sIFGm5kl9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kfifbo2sIFGm5kl9');
    }
  }

  sd_LCL8IPnUcbpewMH1(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'add-beneficiary-electricity';
      bh.body = page.electric;

      page.routeData = page.electric;
      page.routeData = { routeData: JSON.stringify(page.routeData) };

      bh = this.sd_YhPqqvVDcXPL2FM5(bh);
      //appendnew_next_sd_LCL8IPnUcbpewMH1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LCL8IPnUcbpewMH1');
    }
  }

  async sd_YhPqqvVDcXPL2FM5(bh) {
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
      bh = this.sd_2TVgBTSmMuYcgjkK(bh);
      //appendnew_next_sd_YhPqqvVDcXPL2FM5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YhPqqvVDcXPL2FM5');
    }
  }

  async sd_2TVgBTSmMuYcgjkK(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_2TVgBTSmMuYcgjkK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2TVgBTSmMuYcgjkK');
    }
  }

  sd_GKVxOWd4q4y2a21K(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Never', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_GKVxOWd4q4y2a21K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GKVxOWd4q4y2a21K');
    }
  }

  async sd_yMKS36KU4TURO3dg(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_yMKS36KU4TURO3dg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yMKS36KU4TURO3dg');
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
  //appendnew_flow_add_electricity_benComponent_Catch
}
