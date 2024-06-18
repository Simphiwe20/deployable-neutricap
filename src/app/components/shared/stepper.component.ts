// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-stepper',
  templateUrl: './stepper.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class stepperComponent {
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
      this.sd_laE0eDvThWJOUqKM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_laE0eDvThWJOUqKM(bh) {
    try {
      bh = this.sd_Iiu2SgKx58TqgKit(bh);
      //appendnew_next_sd_laE0eDvThWJOUqKM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_laE0eDvThWJOUqKM');
    }
  }

  back(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_yGXXp5CDXEcQOWmX(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WIAOk0qXvI7ZkROw');
    }
  }
  //appendnew_flow_stepperComponent_start

  sd_Iiu2SgKx58TqgKit(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_iV85bSOc9jLk45Qk(bh);
      //appendnew_next_sd_Iiu2SgKx58TqgKit
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Iiu2SgKx58TqgKit');
    }
  }

  sd_iV85bSOc9jLk45Qk(bh) {
    try {
      this.page.openAccount = undefined;
      this.page.lastInfor = undefined;
      this.page.routes = undefined;
      this.page.doing = undefined;
      this.page.showDescription = undefined;
      bh = this.sd_HLVcXfAIYs4vqMSj(bh);
      //appendnew_next_sd_iV85bSOc9jLk45Qk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iV85bSOc9jLk45Qk');
    }
  }

  async sd_HLVcXfAIYs4vqMSj(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.router.url,
          '/sign_up_stepper',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_rGAleI0MFTXcwZXJ(bh);
      } else {
        bh = await this.sd_H2QdIIb5IXrTQB8f(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HLVcXfAIYs4vqMSj');
    }
  }

  sd_rGAleI0MFTXcwZXJ(bh) {
    try {
      const page = this.page;
      console.log(page.router.url);
      page.showDescription = true;
      page.doing = 'Open a Personal Account';
      page.stepperInfor = [
        {
          title: 'Complete basic details',
          action: 'Employment and financial information',
        },
        { title: 'Sign the agreement', action: 'Take another selfie to sign' },
        { title: 'Set your PIN', action: 'Create a 5-digits app PIN' },
      ];

      page.lastInfor = 'Start transacting';
      page.routes = '/open_account_instructions';

      console.log('NEW CHANGES !!!!');

      //appendnew_next_sd_rGAleI0MFTXcwZXJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rGAleI0MFTXcwZXJ');
    }
  }

  sd_H2QdIIb5IXrTQB8f(bh) {
    try {
      const page = this.page;
      console.log(page.router.url);
      page.showDescription = false;
      page.doing = 'Activate your app';
      page.stepperInfor = [
        {
          title: 'Enter account number',
          action: "You'll find it on you Capitec card",
        },
        { title: 'Enter PIN', action: 'Your existing banking app PIN' },
        { title: 'Verify your identity', action: 'Take a selfie' },
      ];

      page.lastInfor = 'Start using the app';
      page.routes = '/account_number';

      console.log('NEW CHANGES !!!!');
      //appendnew_next_sd_H2QdIIb5IXrTQB8f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H2QdIIb5IXrTQB8f');
    }
  }

  async sd_yGXXp5CDXEcQOWmX(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_yGXXp5CDXEcQOWmX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yGXXp5CDXEcQOWmX');
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
  //appendnew_flow_stepperComponent_Catch
}
