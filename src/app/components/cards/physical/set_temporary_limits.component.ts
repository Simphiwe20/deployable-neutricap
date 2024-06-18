// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-set_temporary_limits',
  templateUrl: './set_temporary_limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class set_temporary_limitsComponent {
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
      this.sd_7sPVVw4tcW7QPwdl(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7sPVVw4tcW7QPwdl(bh) {
    try {
      bh = this.sd_ioJMVOwHjtQSgVUe(bh);
      //appendnew_next_sd_7sPVVw4tcW7QPwdl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7sPVVw4tcW7QPwdl');
    }
  }

  show(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OfVIsOQkcApx8mWl(bh);
      //appendnew_next_show
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_63L2pNyaQbb1Sb9e');
    }
  }

  updatePerm(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_fqrPUjJ70mAYPDBg(bh);
      //appendnew_next_updatePerm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O1NM9RhClYpeAYiB');
    }
  }
  //appendnew_flow_set_temporary_limitsComponent_start

  sd_ioJMVOwHjtQSgVUe(bh) {
    try {
      this.page.submitted = false;
      this.page.user = undefined;
      this.page.temp = undefined;
      this.page.isChecked = false;
      this.page.isTicked = false;
      this.page.isCorrect = false;
      this.page.card_limit = undefined;
      this.page.online_limit = undefined;
      this.page.cash_limit = undefined;
      bh = this.sd_dMrJhBcCfIBuRRfi(bh);
      //appendnew_next_sd_ioJMVOwHjtQSgVUe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ioJMVOwHjtQSgVUe');
    }
  }

  sd_dMrJhBcCfIBuRRfi(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_OYlyK2ys8A9o99Dd(bh);
      //appendnew_next_sd_dMrJhBcCfIBuRRfi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dMrJhBcCfIBuRRfi');
    }
  }

  sd_OYlyK2ys8A9o99Dd(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-customers';

      bh = this.sd_7U9OKnLQHGd6mCY1(bh);
      //appendnew_next_sd_OYlyK2ys8A9o99Dd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OYlyK2ys8A9o99Dd');
    }
  }

  sd_7U9OKnLQHGd6mCY1(bh) {
    try {
      bh.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_8ol5ll5ShYS7BMqw(bh);
      //appendnew_next_sd_7U9OKnLQHGd6mCY1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7U9OKnLQHGd6mCY1');
    }
  }

  async sd_8ol5ll5ShYS7BMqw(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.users = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_VR4d1URNOLS3UqsQ(bh);
      //appendnew_next_sd_8ol5ll5ShYS7BMqw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ol5ll5ShYS7BMqw');
    }
  }

  sd_VR4d1URNOLS3UqsQ(bh) {
    try {
      const page = this.page;
      console.log('User ', bh.result);
      page.user = page.users.find(
        (user) => user.accountNumber === bh.result.accountNumber
      );
      console.log(page.user);

      page.temp = {
        cash_withdrawals: `R${page.user.cash_withdrawal_limit_temp}`,
        card_machine: `R${page.user.card_purchases_limit_temp}`,
        online_scan: `R${page.user.online_scan_to_pay_phone_temp}`,
      };
      //appendnew_next_sd_VR4d1URNOLS3UqsQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VR4d1URNOLS3UqsQ');
    }
  }

  sd_OfVIsOQkcApx8mWl(bh) {
    try {
      //appendnew_next_sd_OfVIsOQkcApx8mWl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OfVIsOQkcApx8mWl');
    }
  }

  sd_fqrPUjJ70mAYPDBg(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_csL1XMRbiDyuag7E(bh);
      //appendnew_next_sd_fqrPUjJ70mAYPDBg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fqrPUjJ70mAYPDBg');
    }
  }

  async sd_csL1XMRbiDyuag7E(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4TwAIW3MqzWl0pbg(bh);
      } else {
        bh = await this.sd_8yuFYSRFd0h8SevV(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_csL1XMRbiDyuag7E');
    }
  }

  sd_4TwAIW3MqzWl0pbg(bh) {
    try {
      const page = this.page;
      console.log(page.perm);

      page.user.cash_withdrawal_limit_temp = Number(
        page.temp.cash_withdrawals.substr(1)
      );
      page.user.card_purchases_limit_temp = Number(
        page.temp.card_machine.substr(1)
      );
      page.user.online_scan_to_pay_phone_temp = Number(
        page.temp.online_scan.substr(1)
      );

      console.log(page.user);
      bh = this.sd_GODPDOyZaGZLBuxD(bh);
      //appendnew_next_sd_4TwAIW3MqzWl0pbg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4TwAIW3MqzWl0pbg');
    }
  }

  async sd_GODPDOyZaGZLBuxD(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          this.page.user.cash_withdrawal_limit,
          5000,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YLIznlzhWT4Y50v0(bh);
      } else {
        bh = await this.sd_y6Y3sgK5vdUKSoKq(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GODPDOyZaGZLBuxD');
    }
  }

  async sd_YLIznlzhWT4Y50v0(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          this.page.user.card_purchases_limit,
          50000,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_0UF2pWYkOSmkmXHn(bh);
      } else {
        bh = await this.sd_3XD1MU1eNNZrpevA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YLIznlzhWT4Y50v0');
    }
  }

  async sd_0UF2pWYkOSmkmXHn(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          this.page.user.online_scan_to_pay_phone,
          50000,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_oDMPVmixFAb0I9po(bh);
      } else {
        bh = await this.sd_SwWu2MYjn2gODpTj(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0UF2pWYkOSmkmXHn');
    }
  }

  sd_oDMPVmixFAb0I9po(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Vk3kAec54HmCo4hD(bh);
      //appendnew_next_sd_oDMPVmixFAb0I9po
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oDMPVmixFAb0I9po');
    }
  }

  sd_Vk3kAec54HmCo4hD(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update';

      bh = this.sd_OlpenlpWNho400AK(bh);
      //appendnew_next_sd_Vk3kAec54HmCo4hD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vk3kAec54HmCo4hD');
    }
  }

  async sd_OlpenlpWNho400AK(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.user,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_j2TEP8FyYdRbtL3E(bh);
      //appendnew_next_sd_OlpenlpWNho400AK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OlpenlpWNho400AK');
    }
  }

  sd_j2TEP8FyYdRbtL3E(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Permanent limits successfully updated', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_j2TEP8FyYdRbtL3E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j2TEP8FyYdRbtL3E');
    }
  }

  sd_SwWu2MYjn2gODpTj(bh) {
    try {
      const page = this.page;
      page.online_limit = true;
      //appendnew_next_sd_SwWu2MYjn2gODpTj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SwWu2MYjn2gODpTj');
    }
  }

  sd_3XD1MU1eNNZrpevA(bh) {
    try {
      const page = this.page;
      page.card_limit = true;
      //appendnew_next_sd_3XD1MU1eNNZrpevA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3XD1MU1eNNZrpevA');
    }
  }

  sd_y6Y3sgK5vdUKSoKq(bh) {
    try {
      const page = this.page;
      page.cash_limit = true;
      //appendnew_next_sd_y6Y3sgK5vdUKSoKq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y6Y3sgK5vdUKSoKq');
    }
  }

  sd_8yuFYSRFd0h8SevV(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_8yuFYSRFd0h8SevV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8yuFYSRFd0h8SevV');
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
  //appendnew_flow_set_temporary_limitsComponent_Catch
}
