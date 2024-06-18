// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-choose_banks',
  templateUrl: './choose_banks.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class choose_banksComponent {
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
      this.sd_jCG8yh1EQ0URZNF1(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jCG8yh1EQ0URZNF1(bh) {
    try {
      bh = this.sd_cP56GcbrJzoSdH5l(bh);
      //appendnew_next_sd_jCG8yh1EQ0URZNF1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jCG8yh1EQ0URZNF1');
    }
  }

  chosenBank(bank: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { bank };
      bh.local = {};
      bh = this.sd_MHBL0c4lu9uYtrKp(bh);
      //appendnew_next_chosenBank
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ix0kJtzs0aAvGiwR');
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
      bh = this.sd_1RR6Ak7neNnzni86(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XlecMceGzJY3cw6C');
    }
  }
  //appendnew_flow_choose_banksComponent_start

  sd_cP56GcbrJzoSdH5l(bh) {
    try {
      this.page.banks = undefined;
      this.page.benDetails = undefined;
      bh = this.sd_eUoRGRXRo8pKC6Pf(bh);
      //appendnew_next_sd_cP56GcbrJzoSdH5l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cP56GcbrJzoSdH5l');
    }
  }

  sd_eUoRGRXRo8pKC6Pf(bh) {
    try {
      const page = this.page;
      page.banks = [
        { bankName: 'Capitec Bank', branchCode: '470010' },
        { bankName: 'Absa Bank', branchCode: '632005' },
        { bankName: 'First National Bank', branchCode: '250655' },
        { bankName: 'Nedbank', branchCode: '19865' },
        { bankName: 'Standard Bank', branchCode: '051001' },
      ];
      bh = this.sd_eeu8GFvkc2pFenMM(bh);
      //appendnew_next_sd_eUoRGRXRo8pKC6Pf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eUoRGRXRo8pKC6Pf');
    }
  }

  sd_eeu8GFvkc2pFenMM(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.routeData = route.snapshot.queryParams;
      bh = this.sd_hTpJLxUalXCBpUEs(bh);
      //appendnew_next_sd_eeu8GFvkc2pFenMM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eeu8GFvkc2pFenMM');
    }
  }

  sd_hTpJLxUalXCBpUEs(bh) {
    try {
      const page = this.page;
      page.benDetails = JSON.parse(bh.routeData.routeData);
      console.log(page.benDetails);
      this.sd_iB2EpwcEyfNArj8O(bh);
      //appendnew_next_sd_hTpJLxUalXCBpUEs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hTpJLxUalXCBpUEs');
    }
  }

  sd_iB2EpwcEyfNArj8O(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.benDetails);
      //appendnew_next_sd_iB2EpwcEyfNArj8O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iB2EpwcEyfNArj8O');
    }
  }

  sd_MHBL0c4lu9uYtrKp(bh) {
    try {
      const page = this.page;
      page.benDetails.bankName = bh.input.bank?.bankName;
      page.benDetails.branchCode = bh.input.bank?.branchCode;
      console.log(page.benDetails);

      page.routeData = { data: JSON.stringify(page.benDetails) };
      console.log(page.routeData);
      bh = this.sd_TcFisP25MSSjYN0F(bh);
      //appendnew_next_sd_MHBL0c4lu9uYtrKp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MHBL0c4lu9uYtrKp');
    }
  }

  async sd_TcFisP25MSSjYN0F(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/bank_account');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_TcFisP25MSSjYN0F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TcFisP25MSSjYN0F');
    }
  }

  async sd_1RR6Ak7neNnzni86(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_1RR6Ak7neNnzni86
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1RR6Ak7neNnzni86');
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
  //appendnew_flow_choose_banksComponent_Catch
}
