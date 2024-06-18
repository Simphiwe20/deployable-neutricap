// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { terms_and_condtionsComponent } from 'app/components/home/terms_and_condtions.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-sidenav',
  templateUrl: './sidenav.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sidenavComponent {
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
      this.sd_9zi3ynftUbaH5N6S(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9zi3ynftUbaH5N6S(bh) {
    try {
      bh = this.sd_o8U93aMFu8A74mwG(bh);
      //appendnew_next_sd_9zi3ynftUbaH5N6S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9zi3ynftUbaH5N6S');
    }
  }

  sidenavshow(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_DICsI6jwZThjABaz(bh);
      //appendnew_next_sidenavshow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r7O4zdl4qvAle9JE');
    }
  }

  migrate(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xRAoQC8NON5v6DHo(bh);
      //appendnew_next_migrate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d7tqY6eyHjD9S3ef');
    }
  }
  //appendnew_flow_sidenavComponent_start

  sd_o8U93aMFu8A74mwG(bh) {
    try {
      this.page.name = undefined;
      this.page.sidenavOpen = true;
      bh = this.sd_QKP6HPEh75DvB1M9(bh);
      //appendnew_next_sd_o8U93aMFu8A74mwG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o8U93aMFu8A74mwG');
    }
  }

  sd_QKP6HPEh75DvB1M9(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_pFk4BIOonAcaIknb(bh);
      //appendnew_next_sd_QKP6HPEh75DvB1M9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QKP6HPEh75DvB1M9');
    }
  }

  sd_pFk4BIOonAcaIknb(bh) {
    try {
      const page = this.page;
      page.name = 'angel';
      console.log(page.user);
      //appendnew_next_sd_pFk4BIOonAcaIknb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pFk4BIOonAcaIknb');
    }
  }

  sd_DICsI6jwZThjABaz(bh) {
    try {
      const page = this.page;
      page.sidenavOpen = false;
      //appendnew_next_sd_DICsI6jwZThjABaz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DICsI6jwZThjABaz');
    }
  }

  async sd_xRAoQC8NON5v6DHo(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_HWnxuWLUbrvXZYay(bh);
      //appendnew_next_sd_xRAoQC8NON5v6DHo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xRAoQC8NON5v6DHo');
    }
  }

  async sd_HWnxuWLUbrvXZYay(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_sRiZcPBuJbfRnOlx(bh);
      //appendnew_next_sd_HWnxuWLUbrvXZYay
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HWnxuWLUbrvXZYay');
    }
  }

  sd_sRiZcPBuJbfRnOlx(bh) {
    try {
      const terms_and_condtionsDialog = this.__page_injector__.get(MatDialog);
      const terms_and_condtionsDialogRef = terms_and_condtionsDialog.open(
        terms_and_condtionsComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sRiZcPBuJbfRnOlx');
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
  //appendnew_flow_sidenavComponent_Catch
}
