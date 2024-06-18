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
  selector: 'bh-transfer_money',
  templateUrl: './transfer_money.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class transfer_moneyComponent {
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
      this.sd_9JJE1r6t5rU3CeIp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9JJE1r6t5rU3CeIp(bh) {
    try {
      bh = this.sd_HVeLHK8Jw8RAoyMc(bh);
      //appendnew_next_sd_9JJE1r6t5rU3CeIp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9JJE1r6t5rU3CeIp');
    }
  }

  sd_oFn7om6tiYRaFEeB(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_BMV88bZZj1DeKUop(bh);
      //appendnew_next_sd_oFn7om6tiYRaFEeB
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oFn7om6tiYRaFEeB');
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
      bh = this.sd_aXjjTpVaMLbxnEL1(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4W3fB0T1eijWqgR8');
    }
  }
  //appendnew_flow_transfer_moneyComponent_start

  sd_HVeLHK8Jw8RAoyMc(bh) {
    try {
      this.page.user = undefined;
      this.page.transferForm = undefined;
      this.page.submitted = false;
      this.page.found = undefined;
      this.page.routeData = undefined;
      bh = this.sd_3ITyf2wdKkIpAXR5(bh);
      //appendnew_next_sd_HVeLHK8Jw8RAoyMc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HVeLHK8Jw8RAoyMc');
    }
  }

  sd_3ITyf2wdKkIpAXR5(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_GtGQJ09XVou8ScNK(bh);
      //appendnew_next_sd_3ITyf2wdKkIpAXR5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3ITyf2wdKkIpAXR5');
    }
  }

  sd_GtGQJ09XVou8ScNK(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_1OTz7K2n2bDliLbt(bh);
      //appendnew_next_sd_GtGQJ09XVou8ScNK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GtGQJ09XVou8ScNK');
    }
  }

  sd_1OTz7K2n2bDliLbt(bh) {
    try {
      const page = this.page;
      page.transferForm = {
        amount: 0,
        description: '',
        transDate: new Date(),
        transType: 'Transfer Money',
        statement: 'Spaghetti',
        benName: 'Spaghetti',
        belongsTo: page.user.accountNumber,
        moneyType: 'moneyOut',
      };

      console.log(page.user);

      bh.url = bh.ssdURL + 'get-customers';
      console.log(bh.url);
      bh = this.sd_JEWugeqffCgEhoZX(bh);
      //appendnew_next_sd_1OTz7K2n2bDliLbt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1OTz7K2n2bDliLbt');
    }
  }

  async sd_JEWugeqffCgEhoZX(bh) {
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
      bh = this.sd_zWlnMfAO1K3yPVCR(bh);
      //appendnew_next_sd_JEWugeqffCgEhoZX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JEWugeqffCgEhoZX');
    }
  }

  sd_zWlnMfAO1K3yPVCR(bh) {
    try {
      const page = this.page;
      page.user = page.users.find(
        (user) => user.accountNumber == page.user.accountNumber
      );
      console.log('Logged in user: ', page.user);
      //appendnew_next_sd_zWlnMfAO1K3yPVCR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zWlnMfAO1K3yPVCR');
    }
  }

  sd_BMV88bZZj1DeKUop(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      if (page.user['available_balance']) {
        bh.current = page.user.available_balance - page.transferForm.amount;
      } else {
        bh.current = page.user['available balance'] - page.transferForm.amount;
      }
      bh.savings_new_balance =
        Number(page.user.savings_balance) + Number(page.transferForm.amount);

      bh.body = {
        email: page.user.email,
        available_balance: bh.current,
        savings_balance: bh.savings_new_balance,
      };

      bh = this.sd_orK3dWItdBCRjg43(bh);
      //appendnew_next_sd_BMV88bZZj1DeKUop
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BMV88bZZj1DeKUop');
    }
  }

  sd_orK3dWItdBCRjg43(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_XFnvsIyNTTi09BGt(bh);
      //appendnew_next_sd_orK3dWItdBCRjg43
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_orK3dWItdBCRjg43');
    }
  }

  async sd_XFnvsIyNTTi09BGt(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8t6TIkQA3SVGWSxm(bh);
      } else {
        bh = await this.sd_mnY0kuA5XYtcaIX4(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XFnvsIyNTTi09BGt');
    }
  }

  async sd_8t6TIkQA3SVGWSxm(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.user.available_balance,
          this.page.transferForm.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_mhQBu1ZVnbLTlm4V(bh);
      } else {
        bh = await this.sd_yMXFdv6cFDxX2Zn7(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8t6TIkQA3SVGWSxm');
    }
  }

  sd_mhQBu1ZVnbLTlm4V(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'transfer-money';
      bh.user = page.ssdURL + 'find-one-user';
      bh.url_update = page.ssdURL + 'update';

      bh.userEmail = {
        collection: 'users',
      };

      bh.date = page.transferForm.transDate.toDateString();
      bh.date = bh.date.split(' ');
      bh.date = `${bh.date[1]} ${bh.date[2]} ${bh.date[3]}`;

      page.message = `Capitec: Payment -R${
        page.transferForm.amount
      } from Savings Ref; ${page.transferForm.transType}. Avail R${
        page.user['available balance']
          ? page.user['available balance']
          : page.user['available_balance']
      }; ${bh.date}.info: 082 123 1234`;
      page.message = {
        message: page.message,
        read: false,
        _type: 'payment',
        belongsTo: page.transferForm.belongsTo,
      };

      console.log(page.message);

      bh = this.sd_yBIQNrSfDdeGwe8T(bh);
      //appendnew_next_sd_mhQBu1ZVnbLTlm4V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mhQBu1ZVnbLTlm4V');
    }
  }

  async sd_yBIQNrSfDdeGwe8T(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.addTransMessage(
        this.page.message
      );

      bh = this.post(bh);
      //appendnew_next_sd_yBIQNrSfDdeGwe8T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yBIQNrSfDdeGwe8T');
    }
  }

  async post(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.transferForm,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.update(bh);
      //appendnew_next_post
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hf2yfoHNlBFDBfvS');
    }
  }

  async update(bh) {
    try {
      let requestOptions = {
        url: bh.url_update,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.gett(bh);
      //appendnew_next_update
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XhuQ6ZkLo4BJkIvh');
    }
  }

  async gett(bh) {
    try {
      let requestOptions = {
        url: bh.user,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.userEmail,
      };
      bh.results_get = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_mOQFojqKR0bBHB72(bh);
      //appendnew_next_gett
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sx4hSbRoAe6nripd');
    }
  }

  sd_mOQFojqKR0bBHB72(bh) {
    try {
      const page = this.page;
      bh.newBalance = bh.results_get.filter((user: any) => {
        return user.accountNumber == page.user.accountNumber;
      });

      page.routeData = {
        routeData: JSON.stringify(page.transferForm),
        _type: 'transfer',
      };

      // page.routeData = JSON.stringify(bh.transfer)

      bh.newUser = bh.newBalance[0];
      bh = this.sd_EhCLbV6OexWFJtly(bh);
      //appendnew_next_sd_mOQFojqKR0bBHB72
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mOQFojqKR0bBHB72');
    }
  }

  sd_EhCLbV6OexWFJtly(bh) {
    try {
      localStorage.setItem('accNo', JSON.stringify(bh.newUser));
      bh = this.sd_Q1krDBj37a4s2o1o(bh);
      //appendnew_next_sd_EhCLbV6OexWFJtly
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EhCLbV6OexWFJtly');
    }
  }

  async sd_Q1krDBj37a4s2o1o(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      this.page.res = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_Q1krDBj37a4s2o1o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q1krDBj37a4s2o1o');
    }
  }

  sd_yMXFdv6cFDxX2Zn7(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("TRANSFER AMOUNT CAN'T BE MORE THAN CURRENT BALANCE", 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_yMXFdv6cFDxX2Zn7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yMXFdv6cFDxX2Zn7');
    }
  }

  sd_mnY0kuA5XYtcaIX4(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('FILL IN ALL FIELDS', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_mnY0kuA5XYtcaIX4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mnY0kuA5XYtcaIX4');
    }
  }

  async sd_aXjjTpVaMLbxnEL1(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_aXjjTpVaMLbxnEL1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aXjjTpVaMLbxnEL1');
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
  //appendnew_flow_transfer_moneyComponent_Catch
}
