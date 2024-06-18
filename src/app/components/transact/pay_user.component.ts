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
  selector: 'bh-pay_user',
  templateUrl: './pay_user.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pay_userComponent {
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
      this.sd_ALDaNOXxkNjfA91l(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ALDaNOXxkNjfA91l(bh) {
    try {
      bh = this.sd_6osKV4KRTsH0Agg3(bh);
      //appendnew_next_sd_ALDaNOXxkNjfA91l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ALDaNOXxkNjfA91l');
    }
  }

  pay(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_4fDLnHQZIgXLTS7J(bh);
      //appendnew_next_pay
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0QzAQMQjTp1C0EK7');
    }
  }

  search(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_Qy38iquir4RoJF9J(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_faGhQAhXNvCOwAOc');
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
      bh = this.sd_Nr8GKo5WtGnuFd4l(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V9CpZCATjKooFB7V');
    }
  }
  //appendnew_flow_pay_userComponent_start

  sd_6osKV4KRTsH0Agg3(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_OKwdCJYrfyWRgvA7(bh);
      //appendnew_next_sd_6osKV4KRTsH0Agg3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6osKV4KRTsH0Agg3');
    }
  }

  sd_OKwdCJYrfyWRgvA7(bh) {
    try {
      this.page.routeData = undefined;
      this.page.ben = undefined;
      this.page.userInitials = undefined;
      this.page.payBen = undefined;
      this.page.submitted = false;
      this.page.transHistory = undefined;
      this.page.total = 0;
      this.page.balance = undefined;
      this.page.updateURL = undefined;
      this.page.receiver = undefined;
      this.page.customerURL = undefined;
      this.page.message = undefined;
      bh = this.sd_CbCTCOV3O1UM5x2j(bh);
      //appendnew_next_sd_OKwdCJYrfyWRgvA7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OKwdCJYrfyWRgvA7');
    }
  }

  sd_CbCTCOV3O1UM5x2j(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.routeData = route.snapshot.queryParams;
      bh = this.sd_ywZo8242QsO12AYj(bh);
      //appendnew_next_sd_CbCTCOV3O1UM5x2j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CbCTCOV3O1UM5x2j');
    }
  }

  sd_ywZo8242QsO12AYj(bh) {
    try {
      const page = this.page;
      page.routeData = JSON.parse(page.routeData.routeData);
      bh.url = page.ssdURL + 'get-payed-ben';
      page.customerURL = page.ssdURL + 'get-customers';

      console.log(page.routeData);
      bh = this.sd_V7AX2BRuCDIKb4po(bh);
      //appendnew_next_sd_ywZo8242QsO12AYj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ywZo8242QsO12AYj');
    }
  }

  sd_V7AX2BRuCDIKb4po(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_7fJfR7xvigVTc3aS(bh);
      //appendnew_next_sd_V7AX2BRuCDIKb4po
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V7AX2BRuCDIKb4po');
    }
  }

  async sd_7fJfR7xvigVTc3aS(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getCustomers();
      bh.customers = outputVariables.local.customers;

      bh = this.sd_XxZ7tpSRWmONSG5Q(bh);
      //appendnew_next_sd_7fJfR7xvigVTc3aS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7fJfR7xvigVTc3aS');
    }
  }

  async sd_XxZ7tpSRWmONSG5Q(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getMoneyBen();
      bh.moneyBen = outputVariables.local.moneyBen;

      bh = this.sd_XfzfxDHNcyO4hDmg(bh);
      //appendnew_next_sd_XxZ7tpSRWmONSG5Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XxZ7tpSRWmONSG5Q');
    }
  }

  async sd_XfzfxDHNcyO4hDmg(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.transHistory = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_67AoEICJUKzIO63L(bh);
      //appendnew_next_sd_XfzfxDHNcyO4hDmg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XfzfxDHNcyO4hDmg');
    }
  }

  sd_67AoEICJUKzIO63L(bh) {
    try {
      const page = this.page;
      page.user = bh.customers.find(
        (customer) => page.user.accountNumber == customer.accountNumber
      );

      console.log('User: ', page.user);
      bh = this.sd_wRh8rtDphhWOFkM3(bh);
      //appendnew_next_sd_67AoEICJUKzIO63L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_67AoEICJUKzIO63L');
    }
  }

  async sd_wRh8rtDphhWOFkM3(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.routeData.benNumber,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_7tCwvWRU9DPbITy8(bh);
      } else {
        bh = await this.sd_OxBOEpd1QeA4Gj9w(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wRh8rtDphhWOFkM3');
    }
  }

  sd_7tCwvWRU9DPbITy8(bh) {
    try {
      const page = this.page;
      console.log('Customers: ', bh.customers);
      console.log('routeData: ', page.routeData);
      // page.ben = bh.customers.find((cus: any) => cus.contacts == page.routeData.benNumber)
      page.ben = page.routeData;

      console.log('Ben: ', page.ben);

      // Ben initials
      // page.benInitials = `${page.ben.fullName.split(' ')[0][0]} ${page.ben.fullName.split(' ')[page.ben.fullName.split(' ').length -1]}`
      // bh.benInitials = `${page.ben.fullName.split(' ')[0][0]} ${page.ben.fullName.split(' ')[page.ben.fullName.split(' ').length -1]}`
      // console.log(page.ben)
      // console.log(bh.benInitials)

      // User Inintials
      page.userInitials = `${page.user.fullName.split(' ')[0][0]} ${
        page.user.fullName.split(' ')[page.user.fullName.split(' ').length - 1]
      }`;

      page.payBen = {
        amount: '',
        paymentType: '',
        benRef: page.routeData.benRef,
        statement: page.routeData.benName,
        benNumber: page.routeData.benNumber,
        transDate: new Date(),
        moneyType: 'moneyOut',
        transType: 'Digital Payment',
      };

      page.available_balance =
        Math.round(page.user['available_balance'] * 100) / 100;

      console.log(page.available_balance);

      page.transHistory = page.transHistory.filter(
        (his: any, indx: number) => his.benNumber == page.routeData.benNumber
      );

      console.log(page.transHistory);

      page.transHistory.map((trans: any) => {
        if (new Date(trans.transDate).getDate() == new Date().getDate() - 1) {
          page.total += Number(trans.amount);
          trans.day = 'Yesterday';
        } else if (
          new Date(trans.transDate).getDate() == new Date().getDate()
        ) {
          trans.day = 'Today';
          page.total += Number(trans.amount);
        } else {
          trans.day = trans.transDate;
          page.total += Number(trans.amount);
        }
      });
      //appendnew_next_sd_7tCwvWRU9DPbITy8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7tCwvWRU9DPbITy8');
    }
  }

  sd_OxBOEpd1QeA4Gj9w(bh) {
    try {
      const page = this.page;
      console.log('Customers: ', bh.customers);
      console.log('routeData: ', page.routeData);
      // page.ben = bh.moneyBen.filter((cus: any) => cus.belongsTo == page.routeData.accountNumber)

      page.ben = page.routeData;

      console.log('Ben: ', page.ben);

      // User Inintials
      page.userInitials = `${page.ben.benName}`;

      page.payBen = {
        amount: '',
        paymentType: '',
        benRef: page.routeData.benRef,
        statement: page.routeData.benName,
        bankName: page.routeData.bankName,
        belongsTo: page.routeData.accountNumber,
        transDate: new Date(),
        moneyType: 'moneyOut',
        transType: 'Digital Payment',
      };

      page.available_balance =
        Math.round(page.user['available_balance'] * 100) / 100;

      console.log(page.available_balance);

      page.transHistory = page.transHistory.filter(
        (his: any, indx: number) =>
          his.accountNumber == page.routeData.accountNumber
      );

      console.log(page.transHistory);

      page.transHistory.map((trans: any) => {
        if (new Date(trans.transDate).getDate() == new Date().getDate() - 1) {
          page.total += Number(trans.amount);
          trans.day = 'Yesterday';
        } else if (
          new Date(trans.transDate).getDate() == new Date().getDate()
        ) {
          trans.day = 'Today';
          page.total += Number(trans.amount);
        } else {
          trans.day = trans.transDate;
          page.total += Number(trans.amount);
        }
      });
      //appendnew_next_sd_OxBOEpd1QeA4Gj9w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OxBOEpd1QeA4Gj9w');
    }
  }

  sd_4fDLnHQZIgXLTS7J(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_ICO37wevYxw0tp87(bh);
      //appendnew_next_sd_4fDLnHQZIgXLTS7J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4fDLnHQZIgXLTS7J');
    }
  }

  sd_ICO37wevYxw0tp87(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_oCSE1xDw0kw75STp(bh);
      } else if (
        this.sdService.operators['false'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_dG520SOVEstSWTi0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ICO37wevYxw0tp87');
    }
  }

  sd_oCSE1xDw0kw75STp(bh) {
    try {
      const page = this.page;
      if (page.user['available_balance']) {
        page.balance = page.user['available_balance'];
      } else {
        page.balance = page.user['available balance'];
      }
      bh.amount = Number(page.payBen.amount);
      console.log(typeof bh.amount);
      console.log('bal: ', page.balance);
      console.log('amount: ', bh.amount);
      bh = this.sd_n8kdlSinOYLmhTW5(bh);
      //appendnew_next_sd_oCSE1xDw0kw75STp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oCSE1xDw0kw75STp');
    }
  }

  async sd_n8kdlSinOYLmhTW5(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          bh.amount,
          this.page.balance,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ixm6rE3WTUbtW0hD(bh);
      } else {
        bh = await this.sd_pOQZLnOArFJ2If7e(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n8kdlSinOYLmhTW5');
    }
  }

  sd_ixm6rE3WTUbtW0hD(bh) {
    try {
      const page = this.page;
      console.log('Logged In User', page.user);

      if (page.user['available_balance']) {
        page.user['available_balance'] = page.balance - bh.amount;
      } else {
        page.user['available balance'] = page.balance - bh.amount;
      }

      page.routeData = {
        routeData: JSON.stringify(page.routeData),
        _type: 'payment',
      };

      bh.url = page.ssdURL + 'pay-ben';
      page.updateURL = page.sddURL + 'updateURL';

      page.payBen.belongsTo = page.user.accountNumber;
      console.log(page.payBen);

      bh.date = page.payBen.transDate.toDateString();
      bh.date = bh.date.split(' ');
      bh.date = `${bh.date[1]} ${bh.date[2]} ${bh.date[3]}`;

      page.message = `Capitec: Payment -R${
        page.payBen.amount
      } from Savings Ref; ${page.payBen.transType}. Avail R${
        page.user['available balance']
          ? page.user['available balance']
          : page.user['available_balance']
      }; ${bh.date}.info: 082 123 1234`;
      page.message = {
        message: page.message,
        read: false,
        _type: 'payment',
        belongsTo: page.payBen.belongsTo,
      };

      console.log(page.message);
      bh = this.sd_Ibt1wk6gnWWX8LdD(bh);
      //appendnew_next_sd_ixm6rE3WTUbtW0hD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ixm6rE3WTUbtW0hD');
    }
  }

  async sd_Ibt1wk6gnWWX8LdD(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.addTransMessage(
        this.page.message
      );

      bh = this.sd_WGFYGwKoSsWOwRjO(bh);
      //appendnew_next_sd_Ibt1wk6gnWWX8LdD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ibt1wk6gnWWX8LdD');
    }
  }

  async sd_WGFYGwKoSsWOwRjO(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.updateUser(
        this.page.user
      );

      bh = this.sd_kfwazcU6m6nQlbym(bh);
      //appendnew_next_sd_WGFYGwKoSsWOwRjO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WGFYGwKoSsWOwRjO');
    }
  }

  sd_kfwazcU6m6nQlbym(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(this.page.user));
      bh = this.sd_BKdzjdEhB7d9iC94(bh);
      //appendnew_next_sd_kfwazcU6m6nQlbym
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kfwazcU6m6nQlbym');
    }
  }

  async sd_BKdzjdEhB7d9iC94(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.payBen,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_HrCtVmrSucrmYJy3(bh);
      //appendnew_next_sd_BKdzjdEhB7d9iC94
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BKdzjdEhB7d9iC94');
    }
  }

  async sd_HrCtVmrSucrmYJy3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/sucess');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_HrCtVmrSucrmYJy3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HrCtVmrSucrmYJy3');
    }
  }

  sd_pOQZLnOArFJ2If7e(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("You can't pay above your balance", 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_pOQZLnOArFJ2If7e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pOQZLnOArFJ2If7e');
    }
  }

  sd_dG520SOVEstSWTi0(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All required field should be filled', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_dG520SOVEstSWTi0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dG520SOVEstSWTi0');
    }
  }

  sd_Qy38iquir4RoJF9J(bh) {
    try {
      //appendnew_next_sd_Qy38iquir4RoJF9J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qy38iquir4RoJF9J');
    }
  }

  async sd_Nr8GKo5WtGnuFd4l(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_Nr8GKo5WtGnuFd4l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nr8GKo5WtGnuFd4l');
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
  //appendnew_flow_pay_userComponent_Catch
}
