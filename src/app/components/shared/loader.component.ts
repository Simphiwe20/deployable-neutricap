// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-loader',
  templateUrl: './loader.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loaderComponent {
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
      this.sd_06ptZ6bi154Gowk0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_06ptZ6bi154Gowk0(bh) {
    try {
      bh = this.sd_FfEsPPtCW0q5qYLN(bh);
      //appendnew_next_sd_06ptZ6bi154Gowk0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_06ptZ6bi154Gowk0');
    }
  }

  start(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_q9ZVeOjlf6IFFszf(bh);
      //appendnew_next_start
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l6SWUieCagBvbrpV');
    }
  }
  //appendnew_flow_loaderComponent_start

  sd_FfEsPPtCW0q5qYLN(bh) {
    try {
      bh = this.sd_wfj5cVryklfhmG5d(bh);
      //appendnew_next_sd_FfEsPPtCW0q5qYLN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FfEsPPtCW0q5qYLN');
    }
  }

  sd_wfj5cVryklfhmG5d(bh) {
    try {
      const page = this.page;
      setTimeout(() => {
        this.start();
      }, 1000);
      //appendnew_next_sd_wfj5cVryklfhmG5d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wfj5cVryklfhmG5d');
    }
  }

  sd_q9ZVeOjlf6IFFszf(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_q3QZjXFfCK0acl9o(bh);
      this.sd_XerEkteIcZrTVZ6Z(bh);
      //appendnew_next_sd_q9ZVeOjlf6IFFszf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q9ZVeOjlf6IFFszf');
    }
  }

  async sd_q3QZjXFfCK0acl9o(bh) {
    try {
      if (
        this.sdService.operators['null'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_j4tHZgRMJlo8hRQn(bh);
      } else {
        bh = await this.sd_4sWApRe1YvlCzozW(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q3QZjXFfCK0acl9o');
    }
  }

  async sd_j4tHZgRMJlo8hRQn(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ft-landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_j4tHZgRMJlo8hRQn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j4tHZgRMJlo8hRQn');
    }
  }

  async sd_4sWApRe1YvlCzozW(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_4sWApRe1YvlCzozW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4sWApRe1YvlCzozW');
    }
  }

  sd_XerEkteIcZrTVZ6Z(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_XerEkteIcZrTVZ6Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XerEkteIcZrTVZ6Z');
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
  //appendnew_flow_loaderComponent_Catch
}
