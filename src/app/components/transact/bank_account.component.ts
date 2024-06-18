// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-bank_account',
  templateUrl: './bank_account.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bank_accountComponent {
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
      this.sd_9TtGfMb30fE67Bnf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9TtGfMb30fE67Bnf(bh) {
    try {
      bh = this.sd_2XrwS0UtsmCuSrvf(bh);
      //appendnew_next_sd_9TtGfMb30fE67Bnf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9TtGfMb30fE67Bnf');
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
      bh = this.sd_XuXrQp5ySZgScyBq(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_poByWznRdhTbfCmJ');
    }
  }

  choseBank(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FUHLfQN95x4cjV0J(bh);
      //appendnew_next_choseBank
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v3uAxemuXpPAQsWz');
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
      bh = this.sd_xpIkJOajxKtZ5XDC(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_msSc8ZWG8Y85GWUB');
    }
  }
  //appendnew_flow_bank_accountComponent_start

  sd_2XrwS0UtsmCuSrvf(bh) {
    try {
      this.page.submitted = false;
      this.page.routeData = undefined;
      bh = this.sd_N6qo0aCmrvhP3EBE(bh);
      //appendnew_next_sd_2XrwS0UtsmCuSrvf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2XrwS0UtsmCuSrvf');
    }
  }

  sd_N6qo0aCmrvhP3EBE(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_0fKRhsAOH1BshTOf(bh);
      //appendnew_next_sd_N6qo0aCmrvhP3EBE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N6qo0aCmrvhP3EBE');
    }
  }

  sd_0fKRhsAOH1BshTOf(bh) {
    try {
      const page = this.page;
      let initial = page.user.fullName.split(' ')[0][0];
      let lastName = page.user.fullName.split(' ')[1];
      page.benRef = `${initial} ${lastName}`;
      console.log('Ben Ref: ', page.benRef);

      page.benDetails = {
        benName: '',
        bankName: '',
        branchCode: '',
        benRef: page.benRef,
        notification: 'None',
        belongsTo: page.user.accountNumber,
        accountNumber: '',
      };
      bh = this.sd_a6pPuZ8OF5wSJUPT(bh);
      //appendnew_next_sd_0fKRhsAOH1BshTOf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0fKRhsAOH1BshTOf');
    }
  }

  sd_a6pPuZ8OF5wSJUPT(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.routeData = route.snapshot.queryParams;
      bh = this.sd_j7djxi4X7pePCVQ3(bh);
      //appendnew_next_sd_a6pPuZ8OF5wSJUPT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a6pPuZ8OF5wSJUPT');
    }
  }

  sd_j7djxi4X7pePCVQ3(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          bh.routeData.data,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ALfvLYfc1lgPasLv(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j7djxi4X7pePCVQ3');
    }
  }

  sd_ALfvLYfc1lgPasLv(bh) {
    try {
      const page = this.page;
      page.benDetails = JSON.parse(bh.routeData.data);
      this.sd_D7Y1E17XZgA6hEyC(bh);
      //appendnew_next_sd_ALfvLYfc1lgPasLv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ALfvLYfc1lgPasLv');
    }
  }

  sd_D7Y1E17XZgA6hEyC(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.benDetails);
      //appendnew_next_sd_D7Y1E17XZgA6hEyC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D7Y1E17XZgA6hEyC');
    }
  }

  sd_XuXrQp5ySZgScyBq(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_LAZfDOSXMSXzWcXN(bh);
      //appendnew_next_sd_XuXrQp5ySZgScyBq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XuXrQp5ySZgScyBq');
    }
  }

  sd_LAZfDOSXMSXzWcXN(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      bh.url = page.ssdURL + 'get-customers';

      console.log(bh.url);

      page.submitted = true;

      page.routeData = { data: JSON.stringify(page.benDetails) };
      bh = this.sd_azbOgn0Vg6X86wDp(bh);
      //appendnew_next_sd_LAZfDOSXMSXzWcXN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LAZfDOSXMSXzWcXN');
    }
  }

  async sd_azbOgn0Vg6X86wDp(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_PLMgfl8fqEk1Npcx(bh);
      } else {
        bh = await this.sd_prHoaeZ9kGOlifn3(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_azbOgn0Vg6X86wDp');
    }
  }

  async sd_PLMgfl8fqEk1Npcx(bh) {
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
      bh = this.sd_Oc50Mh1gcSDMtX57(bh);
      //appendnew_next_sd_PLMgfl8fqEk1Npcx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PLMgfl8fqEk1Npcx');
    }
  }

  async sd_Oc50Mh1gcSDMtX57(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.benDetails.bankName,
          'Capitec Bank',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_oPGCE7Cg8zVUZ848(bh);
      } else {
        bh = await this.sd_HHAmbsX0z8stwGwR(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Oc50Mh1gcSDMtX57');
    }
  }

  sd_oPGCE7Cg8zVUZ848(bh) {
    try {
      const page = this.page;
      console.log(page.customers);
      page.isCapitecNum = page.customers.find((customer: any) => {
        if (customer.accountNumber == page.benDetails.accountNumber) {
          console.log(customer.accontNumber);
          console.log(page.benDetails.accountNumber);
          return customer;
        }
      });

      console.log(page.isCapitecNum);
      bh = this.sd_Cewpwwr15wSHzrr6(bh);
      //appendnew_next_sd_oPGCE7Cg8zVUZ848
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oPGCE7Cg8zVUZ848');
    }
  }

  async sd_Cewpwwr15wSHzrr6(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.isCapitecNum,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_CulXFBndftjpLFyX(bh);
      } else {
        bh = await this.sd_9DAehTDjOy1LSobq(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cewpwwr15wSHzrr6');
    }
  }

  async sd_CulXFBndftjpLFyX(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.isCapitecNum.accountNumber,
          this.page.user.accontNumber,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4dIzGfAZqDlHF0Eq(bh);
      } else {
        bh = await this.sd_zH8P6JqSyHyuNh4u(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CulXFBndftjpLFyX');
    }
  }

  sd_4dIzGfAZqDlHF0Eq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("You can't add your own capitec account", '0K', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_4dIzGfAZqDlHF0Eq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4dIzGfAZqDlHF0Eq');
    }
  }

  sd_zH8P6JqSyHyuNh4u(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'add-beneficiary';
      page.benDetails.createdDate = new Date();
      console.log('Adding from this bank account');

      bh.ben = { routeData: JSON.stringify(page.benDetails) };
      bh = this.sd_at48XYvjRD1eYmst(bh);
      //appendnew_next_sd_zH8P6JqSyHyuNh4u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zH8P6JqSyHyuNh4u');
    }
  }

  async sd_at48XYvjRD1eYmst(bh) {
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
      bh = this.sd_rBj1klfVgmj0ZEen(bh);
      //appendnew_next_sd_at48XYvjRD1eYmst
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_at48XYvjRD1eYmst');
    }
  }

  async sd_rBj1klfVgmj0ZEen(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.ben),
        });
      //appendnew_next_sd_rBj1klfVgmj0ZEen
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rBj1klfVgmj0ZEen');
    }
  }

  sd_9DAehTDjOy1LSobq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('This is not a capitec account', '0K', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_9DAehTDjOy1LSobq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9DAehTDjOy1LSobq');
    }
  }

  sd_HHAmbsX0z8stwGwR(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'add-beneficiary';
      page.benDetails.createdDate = new Date();
      bh.ben = { routeData: JSON.stringify(page.benDetails) };
      bh = this.sd_ANbRFdCPkApvNVBJ(bh);
      //appendnew_next_sd_HHAmbsX0z8stwGwR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HHAmbsX0z8stwGwR');
    }
  }

  async sd_ANbRFdCPkApvNVBJ(bh) {
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
      bh = this.sd_6kSWUIqfHXQgapDL(bh);
      //appendnew_next_sd_ANbRFdCPkApvNVBJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ANbRFdCPkApvNVBJ');
    }
  }

  async sd_6kSWUIqfHXQgapDL(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_6kSWUIqfHXQgapDL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6kSWUIqfHXQgapDL');
    }
  }

  sd_prHoaeZ9kGOlifn3(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Check required fields', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_prHoaeZ9kGOlifn3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_prHoaeZ9kGOlifn3');
    }
  }

  sd_FUHLfQN95x4cjV0J(bh) {
    try {
      sessionStorage.setItem('ben', JSON.stringify(this.page.newBen));
      bh = this.sd_HdF7A2BnfEocvY5P(bh);
      //appendnew_next_sd_FUHLfQN95x4cjV0J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FUHLfQN95x4cjV0J');
    }
  }

  sd_HdF7A2BnfEocvY5P(bh) {
    try {
      const page = this.page;
      page.routeData = { routeData: JSON.stringify(page.benDetails) };
      bh = this.sd_U42MkJWcVt3tLY56(bh);
      //appendnew_next_sd_HdF7A2BnfEocvY5P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HdF7A2BnfEocvY5P');
    }
  }

  async sd_U42MkJWcVt3tLY56(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/choose_banks');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_U42MkJWcVt3tLY56
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U42MkJWcVt3tLY56');
    }
  }

  async sd_xpIkJOajxKtZ5XDC(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_xpIkJOajxKtZ5XDC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xpIkJOajxKtZ5XDC');
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
  //appendnew_flow_bank_accountComponent_Catch
}
