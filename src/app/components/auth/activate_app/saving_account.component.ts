// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { inforComponent } from 'app/components/auth/activate_app/infor.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-saving_account',
  templateUrl: './saving_account.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class saving_accountComponent {
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
      this.sd_9utjFzd17ucYPa7E(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9utjFzd17ucYPa7E(bh) {
    try {
      bh = this.sd_OxfpvBF66qJL4jyU(bh);
      //appendnew_next_sd_9utjFzd17ucYPa7E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9utjFzd17ucYPa7E');
    }
  }

  openInfo(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FdMXZfSbe5SjG4as(bh);
      //appendnew_next_openInfo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5nu1tL9qPuuH2x6P');
    }
  }

  accNumber(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_wPot6HEP4qKPMMGw(bh);
      //appendnew_next_accNumber
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Otlqxan15c6188tr');
    }
  }
  //appendnew_flow_saving_accountComponent_start

  sd_OxfpvBF66qJL4jyU(bh) {
    try {
      this.page.submitted = false;
      this.page.accNo = { accNo: '' };
      this.page.userInfor = { email: '', accountNumber: '', fullName: '' };
      //appendnew_next_sd_OxfpvBF66qJL4jyU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OxfpvBF66qJL4jyU');
    }
  }

  sd_FdMXZfSbe5SjG4as(bh) {
    try {
      const inforDialog = this.__page_injector__.get(MatDialog);
      const inforDialogRef = inforDialog.open(inforComponent, {});
      inforDialogRef.afterOpened().subscribe((event) => {
        this.sd_OIoq9DOR6k6WJW9v(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FdMXZfSbe5SjG4as');
    }
  }

  sd_OIoq9DOR6k6WJW9v(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.infor);

      //appendnew_next_sd_OIoq9DOR6k6WJW9v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OIoq9DOR6k6WJW9v');
    }
  }

  sd_wPot6HEP4qKPMMGw(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_lomoohtD9RcmkROp(bh);
      //appendnew_next_sd_wPot6HEP4qKPMMGw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wPot6HEP4qKPMMGw');
    }
  }

  sd_lomoohtD9RcmkROp(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh.url = page.ssdUrl + 'get-customers';
      bh.collection = 'users';
      bh = this.sd_tRiMCvkOzaMM5shS(bh);
      //appendnew_next_sd_lomoohtD9RcmkROp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lomoohtD9RcmkROp');
    }
  }

  sd_tRiMCvkOzaMM5shS(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_owjXem7BnP24XSLq(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tRiMCvkOzaMM5shS');
    }
  }

  async sd_owjXem7BnP24XSLq(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.collection,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_25qbmaWtCWioINyk(bh);
      //appendnew_next_sd_owjXem7BnP24XSLq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_owjXem7BnP24XSLq');
    }
  }

  sd_25qbmaWtCWioINyk(bh) {
    try {
      const page = this.page;
      console.log(bh.result);
      bh.user = bh.result.find(
        (user: any) => user.accountNumber == page.accNo.accNo
      );

      console.log(bh.user);

      console.log(page.accNo.accNo);
      if (bh.user.accountNumber == page.accNo.accNo) {
        console.log('Account numbers match ');
      } else {
        console.log("Doesn't match");
      }
      //  if(!bh.user) {
      //           alert("user does not exist!");
      //           return
      //         } else {
      //           alert("hi")
      //           console.log(bh.user)
      //         }
      bh = this.sd_JLl3W05a99SJC5mK(bh);
      //appendnew_next_sd_25qbmaWtCWioINyk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_25qbmaWtCWioINyk');
    }
  }

  async sd_JLl3W05a99SJC5mK(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.user.accountNumber,
          this.page.accNo.accNo,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_mLYV4znYZhm2YUWA(bh);
      } else {
        bh = await this.sd_k9bjPiuJWb7fSK3t(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JLl3W05a99SJC5mK');
    }
  }

  sd_mLYV4znYZhm2YUWA(bh) {
    try {
      const page = this.page;
      page.userInfor.fullName = bh.user.fullName;
      page.userInfor.accountNumber = bh.user.accountNumber;
      page.userInfor.email = bh.user.email;

      console.log('New Infor: ', page.userInfor);
      bh = this.sd_w2oSYlhAmBXWr25j(bh);
      //appendnew_next_sd_mLYV4znYZhm2YUWA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mLYV4znYZhm2YUWA');
    }
  }

  sd_w2oSYlhAmBXWr25j(bh) {
    try {
      localStorage.setItem('accNo', JSON.stringify(this.page.userInfor));
      bh = this.sd_7CE8g6QtNrkyHw08(bh);
      //appendnew_next_sd_w2oSYlhAmBXWr25j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w2oSYlhAmBXWr25j');
    }
  }

  async sd_7CE8g6QtNrkyHw08(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/remote_app_pin');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_7CE8g6QtNrkyHw08
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7CE8g6QtNrkyHw08');
    }
  }

  sd_k9bjPiuJWb7fSK3t(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('does not exist', 'ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_k9bjPiuJWb7fSK3t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k9bjPiuJWb7fSK3t');
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
  //appendnew_flow_saving_accountComponent_Catch
}
