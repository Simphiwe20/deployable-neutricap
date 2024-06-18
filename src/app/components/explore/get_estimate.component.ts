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
  selector: 'bh-get_estimate',
  templateUrl: './get_estimate.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class get_estimateComponent {
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
      this.sd_NObBe0iM8l3963bS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_NObBe0iM8l3963bS(bh) {
    try {
      bh = this.sd_PSA5f4hv3nde9tDq(bh);
      //appendnew_next_sd_NObBe0iM8l3963bS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NObBe0iM8l3963bS');
    }
  }

  getLoan(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_QcLOOv9drpClAf8R(bh);
      //appendnew_next_getLoan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9SXNqRKXdtHIBXr9');
    }
  }

  addBalance(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YwYVV6UFHsZe03mT(bh);
      //appendnew_next_addBalance
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NsmMGL6cf8Z4vEJI');
    }
  }
  //appendnew_flow_get_estimateComponent_start

  sd_PSA5f4hv3nde9tDq(bh) {
    try {
      this.page.submitted = false;
      this.page.user = undefined;
      this.page.loanForm = undefined;
      bh = this.sd_Fabhvkt3OE8bx2AZ(bh);
      this.sd_g8ReqdGjPxnzkpHE(bh);
      //appendnew_next_sd_PSA5f4hv3nde9tDq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PSA5f4hv3nde9tDq');
    }
  }

  sd_Fabhvkt3OE8bx2AZ(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_nSEedhxVPLBC1zCI(bh);
      //appendnew_next_sd_Fabhvkt3OE8bx2AZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fabhvkt3OE8bx2AZ');
    }
  }

  sd_nSEedhxVPLBC1zCI(bh) {
    try {
      const page = this.page;
      page.loanForm = {
        amount: '',
        months: '',
        salary: '',
        reason: '',
        email: page.user.email,
        fullName: page.user.fullName,
        accountNumber: page.user.accountNumber,
      };

      //appendnew_next_sd_nSEedhxVPLBC1zCI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nSEedhxVPLBC1zCI');
    }
  }

  sd_g8ReqdGjPxnzkpHE(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.selected);
      //appendnew_next_sd_g8ReqdGjPxnzkpHE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g8ReqdGjPxnzkpHE');
    }
  }

  sd_QcLOOv9drpClAf8R(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh = this.sd_2DoGR90xSWXujHbV(bh);
      //appendnew_next_sd_QcLOOv9drpClAf8R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QcLOOv9drpClAf8R');
    }
  }

  async sd_2DoGR90xSWXujHbV(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_QcmaC6YC3n0PCukE(bh);
      } else {
        bh = await this.sd_2BUhyhGh6oUweanQ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2DoGR90xSWXujHbV');
    }
  }

  sd_QcmaC6YC3n0PCukE(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Yes Girl', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_apIJD4PmQy2uNWAT(bh);
      //appendnew_next_sd_QcmaC6YC3n0PCukE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QcmaC6YC3n0PCukE');
    }
  }

  sd_apIJD4PmQy2uNWAT(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_dYcfqmB6pzPZ8ckt(bh);
      //appendnew_next_sd_apIJD4PmQy2uNWAT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_apIJD4PmQy2uNWAT');
    }
  }

  sd_dYcfqmB6pzPZ8ckt(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'add-loan';

      bh = this.sd_gSSwid5YoEpCPg0C(bh);
      //appendnew_next_sd_dYcfqmB6pzPZ8ckt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dYcfqmB6pzPZ8ckt');
    }
  }

  async sd_gSSwid5YoEpCPg0C(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.loanForm,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_teYW9n2H6hGislJ2(bh);
      //appendnew_next_sd_gSSwid5YoEpCPg0C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gSSwid5YoEpCPg0C');
    }
  }

  sd_teYW9n2H6hGislJ2(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Loan successfully sent', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_FIrHcfFSUN4UZI7u(bh);
      //appendnew_next_sd_teYW9n2H6hGislJ2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_teYW9n2H6hGislJ2');
    }
  }

  async sd_FIrHcfFSUN4UZI7u(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/get_estimate');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_FIrHcfFSUN4UZI7u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FIrHcfFSUN4UZI7u');
    }
  }

  sd_2BUhyhGh6oUweanQ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Haibo', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_2BUhyhGh6oUweanQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2BUhyhGh6oUweanQ');
    }
  }

  sd_YwYVV6UFHsZe03mT(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_fQ8CYhBBgYPje1eR(bh);
      //appendnew_next_sd_YwYVV6UFHsZe03mT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YwYVV6UFHsZe03mT');
    }
  }

  sd_fQ8CYhBBgYPje1eR(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-loans';

      bh.body = {
        collection: 'loans',
      };
      bh = this.sd_KXQC4M8kizhfAZEJ(bh);
      //appendnew_next_sd_fQ8CYhBBgYPje1eR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fQ8CYhBBgYPje1eR');
    }
  }

  async sd_KXQC4M8kizhfAZEJ(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.loan_res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_MJmTsCg4FUO9wm8q(bh);
      //appendnew_next_sd_KXQC4M8kizhfAZEJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KXQC4M8kizhfAZEJ');
    }
  }

  sd_MJmTsCg4FUO9wm8q(bh) {
    try {
      const page = this.page;
      bh.loans = page.loan_res.filter((user: any) => {
        return user.email == page.user.email;
      });

      console.log(bh.loans);
      bh = this.sd_RCb1yTSfRb9R7cpq(bh);
      //appendnew_next_sd_MJmTsCg4FUO9wm8q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MJmTsCg4FUO9wm8q');
    }
  }

  sd_RCb1yTSfRb9R7cpq(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.loans.status,
          'approved',
          undefined,
          undefined
        )
      ) {
      } else if (
        this.sdService.operators['eq'](
          bh.loans.status,
          'pending',
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RCb1yTSfRb9R7cpq');
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
  //appendnew_flow_get_estimateComponent_Catch
}
