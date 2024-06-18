// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-scan_to_pay',
  templateUrl: './scan_to_pay.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class scan_to_payComponent {
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
      this.sd_3atS8q01zOCtM5Yg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3atS8q01zOCtM5Yg(bh) {
    try {
      bh = this.sd_u10wDnqCbZP2hgf7(bh);
      //appendnew_next_sd_3atS8q01zOCtM5Yg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3atS8q01zOCtM5Yg');
    }
  }

  viewData(action: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { action };
      bh.local = {};
      bh = this.sd_iDWBGrb7ZN7K6OJV(bh);
      //appendnew_next_viewData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rWyRUT8P5BOi0lE2');
    }
  }
  //appendnew_flow_scan_to_payComponent_start

  sd_u10wDnqCbZP2hgf7(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_tSQIFFsqjdZkMzg4(bh);
      //appendnew_next_sd_u10wDnqCbZP2hgf7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u10wDnqCbZP2hgf7');
    }
  }

  sd_tSQIFFsqjdZkMzg4(bh) {
    try {
      bh = this.sd_X1SJJgzmSEpUaVyB(bh);
      //appendnew_next_sd_tSQIFFsqjdZkMzg4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tSQIFFsqjdZkMzg4');
    }
  }

  sd_X1SJJgzmSEpUaVyB(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_6BmF5ejuGonayvMQ(bh);
      //appendnew_next_sd_X1SJJgzmSEpUaVyB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X1SJJgzmSEpUaVyB');
    }
  }

  sd_6BmF5ejuGonayvMQ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-customers';

      bh = this.sd_YjqP2EpUYnLjmXpa(bh);
      //appendnew_next_sd_6BmF5ejuGonayvMQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6BmF5ejuGonayvMQ');
    }
  }

  async sd_YjqP2EpUYnLjmXpa(bh) {
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
      bh = this.sd_3iGopO9FNSmkC2BZ(bh);
      //appendnew_next_sd_YjqP2EpUYnLjmXpa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YjqP2EpUYnLjmXpa');
    }
  }

  sd_3iGopO9FNSmkC2BZ(bh) {
    try {
      const page = this.page;
      page.user = page.users.find(
        (user) => user.accountNumber === page.user.accountNumber
      );

      console.log('User: ', page.user);
      //appendnew_next_sd_3iGopO9FNSmkC2BZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3iGopO9FNSmkC2BZ');
    }
  }

  sd_iDWBGrb7ZN7K6OJV(bh) {
    try {
      const page = this.page;
      console.log('Scan data: ', bh.input);

      if (bh.input.action) {
        const data = JSON.stringify(bh.input.action.data.value[0].value);
        const parsed = JSON.parse(data);
        bh.scanned = JSON.parse(parsed);
        bh.scanned.belongsTo = page.user.accountNumber;
        bh.scanned.transDate = new Date();
        bh.scanned.transType = 'scan_to_pay';
        bh.scanned.statement = bh.scanned.itemName;
        bh.scanned.moneyType = 'moneyOut';
      }

      bh.userEmail = {
        collection: 'users',
      };

      bh = this.sd_PyKIvgf5KrzauESS(bh);
      //appendnew_next_sd_iDWBGrb7ZN7K6OJV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iDWBGrb7ZN7K6OJV');
    }
  }

  sd_PyKIvgf5KrzauESS(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_y7ZFKYoAHH0A5PQC(bh);
      //appendnew_next_sd_PyKIvgf5KrzauESS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PyKIvgf5KrzauESS');
    }
  }

  async sd_y7ZFKYoAHH0A5PQC(bh) {
    try {
      if (
        this.sdService.operators['gte'](
          this.page.user.available_balance,
          bh.scanned.amount,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_joqKwNT4ZT8rNFeF(bh);
      } else {
        bh = await this.sd_654F5tvgLuk8O2PK(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y7ZFKYoAHH0A5PQC');
    }
  }

  sd_joqKwNT4ZT8rNFeF(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'scan';
      bh.url_scan = page.ssdUrl + 'update';
      bh.newUser = page.ssdUrl + 'find-one-user';
      bh.difference = page.user.available_balance - bh.scanned.amount;

      bh.body = {
        email: page.user.email,
        available_balance: page.user.available_balance - bh.scanned.amount,
      };

      bh.date = bh.scanned.transDate.toDateString();
      bh.date = bh.date.split(' ');
      bh.date = `${bh.date[1]} ${bh.date[2]} ${bh.date[3]}`;

      page.message = `Capitec: Payment -R${
        bh.scanned.amount
      } from Savings Ref; ${bh.scanned.transType}. Avail R${
        page.user['available balance']
          ? page.user['available balance']
          : page.user['available_balance']
      }; ${bh.date}.info: 082 123 1234`;
      page.message = {
        message: page.message,
        read: false,
        _type: 'payment',
        belongsTo: bh.scanned.belongsTo,
      };

      console.log(page.message);

      bh = this.sd_yEx1YWKthP8tTcpk(bh);
      //appendnew_next_sd_joqKwNT4ZT8rNFeF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_joqKwNT4ZT8rNFeF');
    }
  }

  async sd_yEx1YWKthP8tTcpk(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.scanned,
      };
      bh.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_4F9w4oc7ZXyCTdE7(bh);
      //appendnew_next_sd_yEx1YWKthP8tTcpk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yEx1YWKthP8tTcpk');
    }
  }

  async sd_4F9w4oc7ZXyCTdE7(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.addTransMessage(
        this.page.message
      );

      bh = this.updateBalance(bh);
      //appendnew_next_sd_4F9w4oc7ZXyCTdE7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4F9w4oc7ZXyCTdE7');
    }
  }

  async updateBalance(bh) {
    try {
      let requestOptions = {
        url: bh.url_scan,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      bh.results_balance = await this.sdService.nHttpRequest(requestOptions);
      bh = this.getUser(bh);
      //appendnew_next_updateBalance
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GrzMCJ2i4qDJOSGK');
    }
  }

  async getUser(bh) {
    try {
      let requestOptions = {
        url: bh.newUser,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.userEmail,
      };
      bh.updated = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_GkY3lk6BOBdhULHo(bh);
      //appendnew_next_getUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IHGho6068fKiY9et');
    }
  }

  sd_GkY3lk6BOBdhULHo(bh) {
    try {
      const page = this.page;
      bh.newBalance = bh.updated.find((user: any) => {
        return user.email == page.user.email;
      });

      bh = this.sd_sYrXDVqjwrsm9xwD(bh);
      //appendnew_next_sd_GkY3lk6BOBdhULHo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GkY3lk6BOBdhULHo');
    }
  }

  sd_sYrXDVqjwrsm9xwD(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(bh.newBalance));
      bh = this.sd_2v1ZO0yayUcVMDFb(bh);
      //appendnew_next_sd_sYrXDVqjwrsm9xwD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sYrXDVqjwrsm9xwD');
    }
  }

  async sd_2v1ZO0yayUcVMDFb(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/transact');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_xIpocRFFjVFYzgon(bh);
      //appendnew_next_sd_2v1ZO0yayUcVMDFb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2v1ZO0yayUcVMDFb');
    }
  }

  sd_xIpocRFFjVFYzgon(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('SCAN TO  PAY SUCCESS', 'OK', {
          duration: 6000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_xIpocRFFjVFYzgon
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xIpocRFFjVFYzgon');
    }
  }

  sd_654F5tvgLuk8O2PK(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('INSUFICIENT FUNDS FOR TRANSACTION', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_654F5tvgLuk8O2PK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_654F5tvgLuk8O2PK');
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
  //appendnew_flow_scan_to_payComponent_Catch
}
