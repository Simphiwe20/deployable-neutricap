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
//append_imports_end

@Component({
  selector: 'bh-remote_app_pin',
  templateUrl: './remote_app_pin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class remote_app_pinComponent {
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
      this.sd_MChADEiZHUa88OVL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_MChADEiZHUa88OVL(bh) {
    try {
      bh = this.sd_E5FBRc6XCm64szHy(bh);
      //appendnew_next_sd_MChADEiZHUa88OVL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MChADEiZHUa88OVL');
    }
  }

  pin(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_80PdDmMSYwVDdopq(bh);
      //appendnew_next_pin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZdqkxdhXTqJ4TWjp');
    }
  }
  //appendnew_flow_remote_app_pinComponent_start

  sd_E5FBRc6XCm64szHy(bh) {
    try {
      this.page.remotePin = { remotePin: '', email: '' };
      this.page.submitted = false;
      //appendnew_next_sd_E5FBRc6XCm64szHy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E5FBRc6XCm64szHy');
    }
  }

  sd_80PdDmMSYwVDdopq(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_RsW8TtrHt9EABRdy(bh);
      //appendnew_next_sd_80PdDmMSYwVDdopq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_80PdDmMSYwVDdopq');
    }
  }

  sd_RsW8TtrHt9EABRdy(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh.url = page.ssdURL + 'log-in';
      bh = this.sd_JCIuNp1gZCXcVizs(bh);
      //appendnew_next_sd_RsW8TtrHt9EABRdy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RsW8TtrHt9EABRdy');
    }
  }

  async sd_JCIuNp1gZCXcVizs(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Feko1zRLdZWqtKqo(bh);
      } else {
        bh = await this.sd_oq34dTfMOwOs8e3L(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JCIuNp1gZCXcVizs');
    }
  }

  sd_Feko1zRLdZWqtKqo(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_Fp68ac5b072egagP(bh);
      //appendnew_next_sd_Feko1zRLdZWqtKqo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Feko1zRLdZWqtKqo');
    }
  }

  sd_Fp68ac5b072egagP(bh) {
    try {
      const page = this.page;
      console.log('User infor', page.result);
      page.remotePin.email = page.result.email;
      console.log('Body: ', page.remotePin);
      bh = this.sd_7qPIn8fU06SiDPm0(bh);
      //appendnew_next_sd_Fp68ac5b072egagP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fp68ac5b072egagP');
    }
  }

  async sd_7qPIn8fU06SiDPm0(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.remotePin,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_IcdPwFJiZPNPz0nT(bh);
      //appendnew_next_sd_7qPIn8fU06SiDPm0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7qPIn8fU06SiDPm0');
    }
  }

  async sd_IcdPwFJiZPNPz0nT(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/app_activation_instructions');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_IcdPwFJiZPNPz0nT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IcdPwFJiZPNPz0nT');
    }
  }

  sd_oq34dTfMOwOs8e3L(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('ENTER YOUR PIN', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_oq34dTfMOwOs8e3L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oq34dTfMOwOs8e3L');
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
  //appendnew_flow_remote_app_pinComponent_Catch
}
