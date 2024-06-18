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
  selector: 'bh-activation_instructions',
  templateUrl: './activation_instructions.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class activation_instructionsComponent {
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
      this.sd_HMDPIUvK8uKVkIqB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_HMDPIUvK8uKVkIqB(bh) {
    try {
      bh = this.sd_mUeabtoqMQt5Okk4(bh);
      //appendnew_next_sd_HMDPIUvK8uKVkIqB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HMDPIUvK8uKVkIqB');
    }
  }

  route(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_numKQxnBkjmM5McI(bh);
      //appendnew_next_route
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X1Q56T4sYoSqZZr0');
    }
  }
  //appendnew_flow_activation_instructionsComponent_start

  sd_mUeabtoqMQt5Okk4(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_HPtLA5FT2M4iizJr(bh);
      //appendnew_next_sd_mUeabtoqMQt5Okk4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mUeabtoqMQt5Okk4');
    }
  }

  sd_HPtLA5FT2M4iizJr(bh) {
    try {
      this.page.routeData = undefined;
      this.page.pic = undefined;
      this.page.image = undefined;
      bh = this.sd_SmWsaGEK94MTZ2T7(bh);
      //appendnew_next_sd_HPtLA5FT2M4iizJr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HPtLA5FT2M4iizJr');
    }
  }

  sd_SmWsaGEK94MTZ2T7(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_HVPXsnCuTMzDvfhr(bh);
      //appendnew_next_sd_SmWsaGEK94MTZ2T7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SmWsaGEK94MTZ2T7');
    }
  }

  sd_HVPXsnCuTMzDvfhr(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + `download-picture/${page.user.email}`;
      page.image = bh.url;
      console.log(bh.url);
      bh = this.sd_epX4M9GQYUC2uVor(bh);
      //appendnew_next_sd_HVPXsnCuTMzDvfhr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HVPXsnCuTMzDvfhr');
    }
  }

  async sd_epX4M9GQYUC2uVor(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'arraybuffer',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_c6h43zBXSTxakxqZ(bh);
      this.sd_ft5oWvCsb53A7o6n(bh);
      //appendnew_next_sd_epX4M9GQYUC2uVor
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_epX4M9GQYUC2uVor');
    }
  }

  sd_c6h43zBXSTxakxqZ(bh) {
    try {
      const page = this.page;
      console.log(page.result);

      page.userImage = new Uint8Array(page.result);
      console.log('Uint8Array: ', page.userImage);
      let blob = new Blob([page.userImage], { type: 'image/png' });
      page.userImage = URL.createObjectURL(blob);
      // let buffer = Buffer.from(page.userImage)
      // console.log('Buffer: ', buffer)

      // page.userImage = 'data:image/png;base64,' + buffer.toString('base64')
      console.log('Blob: ', page.userImage);

      // page.userImage = page.userImage.getReader().read()

      // console.log("User image: ", page.userImage.getReader().read())

      //appendnew_next_sd_c6h43zBXSTxakxqZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c6h43zBXSTxakxqZ');
    }
  }

  sd_ft5oWvCsb53A7o6n(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_ft5oWvCsb53A7o6n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ft5oWvCsb53A7o6n');
    }
  }

  sd_numKQxnBkjmM5McI(bh) {
    try {
      const page = this.page;
      page.routeData = { img: page.image, data: 'activate_app' };
      // page.routeData = {routeData: JSON.stringify(page.routeData)}
      console.log(page.routeData);
      bh = this.sd_cumKsxX0Tfg64LaQ(bh);
      //appendnew_next_sd_numKQxnBkjmM5McI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_numKQxnBkjmM5McI');
    }
  }

  async sd_cumKsxX0Tfg64LaQ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/prepare_for_selfie');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      this.sd_79eYPp7Sgy7wbE4V(bh);
      //appendnew_next_sd_cumKsxX0Tfg64LaQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cumKsxX0Tfg64LaQ');
    }
  }

  sd_79eYPp7Sgy7wbE4V(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_79eYPp7Sgy7wbE4V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_79eYPp7Sgy7wbE4V');
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
  //appendnew_flow_activation_instructionsComponent_Catch
}
