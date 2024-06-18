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
  selector: 'bh-enter_remote_pin',
  templateUrl: './enter_remote_pin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class enter_remote_pinComponent {
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
      this.sd_5cKyaJCV93nGwrsf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_5cKyaJCV93nGwrsf(bh) {
    try {
      bh = this.sd_5c33W7dZR9yPhak3(bh);
      //appendnew_next_sd_5cKyaJCV93nGwrsf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5cKyaJCV93nGwrsf');
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
      bh = this.sd_MTuDkLpVXXt40Ru4(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GVLEUzjjfPPMksom');
    }
  }

  submitPin(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_Nf75GrS4D61HJC0W(bh);
      //appendnew_next_submitPin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lLXz6zQ1hfHKK2hx');
    }
  }

  pin(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_OcKLZTVIb1JrHcrY(bh);
      //appendnew_next_pin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8BxyLsOLa5XIsosQ');
    }
  }
  //appendnew_flow_enter_remote_pinComponent_start

  sd_5c33W7dZR9yPhak3(bh) {
    try {
      this.page.remotePin = { remotePin: '' };
      //appendnew_next_sd_5c33W7dZR9yPhak3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5c33W7dZR9yPhak3');
    }
  }

  sd_MTuDkLpVXXt40Ru4(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_8NQkzbDQ2Matuf6t(bh);
      //appendnew_next_sd_MTuDkLpVXXt40Ru4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MTuDkLpVXXt40Ru4');
    }
  }

  sd_8NQkzbDQ2Matuf6t(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh.url = page.ssdUrl + 'get-customers';
      bh.collection = 'users';
      bh = this.sd_o5gODXCH13pEkvKN(bh);
      //appendnew_next_sd_8NQkzbDQ2Matuf6t
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8NQkzbDQ2Matuf6t');
    }
  }

  sd_o5gODXCH13pEkvKN(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_R5hkVDoYsSgECEJa(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o5gODXCH13pEkvKN');
    }
  }

  async sd_R5hkVDoYsSgECEJa(bh) {
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
      bh = this.sd_qaie8aKatWjdRniB(bh);
      //appendnew_next_sd_R5hkVDoYsSgECEJa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R5hkVDoYsSgECEJa');
    }
  }

  sd_qaie8aKatWjdRniB(bh) {
    try {
      const page = this.page;
      console.log(bh.result);
      bh.user = bh.result.find(
        (user: any) => user.re == page.userPin.remotePin
      );

      console.log(bh.user);

      // console.log(page.accNo.accNo)
      // if( bh.user.accountNumber == page.accNo.accNo) {
      //     console.log('Account numbers match ')
      // }else {
      //     console.log('Doesn\'t match')
      // }
      //  if(!bh.user) {
      //           alert("user does not exist!");
      //           return
      //         } else {
      //           alert("hi")
      //           console.log(bh.user)
      //         }
      bh = this.sd_VPaApkdilwcg4cMj(bh);
      //appendnew_next_sd_qaie8aKatWjdRniB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qaie8aKatWjdRniB');
    }
  }

  async sd_VPaApkdilwcg4cMj(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.user.remotePin,
          this.page.pin.pin,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_JdCrk1LAV4NiX4sB(bh);
      } else {
        bh = await this.sd_GCNmDBEuuIF3BVXL(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VPaApkdilwcg4cMj');
    }
  }

  sd_JdCrk1LAV4NiX4sB(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('true', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_o2q5cc8zYpBisVFl(bh);
      //appendnew_next_sd_JdCrk1LAV4NiX4sB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JdCrk1LAV4NiX4sB');
    }
  }

  sd_o2q5cc8zYpBisVFl(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(bh.user));
      bh = this.sd_SlCBuWhheXfzmxWs(bh);
      //appendnew_next_sd_o2q5cc8zYpBisVFl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o2q5cc8zYpBisVFl');
    }
  }

  async sd_SlCBuWhheXfzmxWs(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_SlCBuWhheXfzmxWs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SlCBuWhheXfzmxWs');
    }
  }

  sd_GCNmDBEuuIF3BVXL(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('does not exist', 'ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_GCNmDBEuuIF3BVXL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GCNmDBEuuIF3BVXL');
    }
  }

  sd_Nf75GrS4D61HJC0W(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_l6W1niEA0hfqyxb4(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nf75GrS4D61HJC0W');
    }
  }

  async sd_l6W1niEA0hfqyxb4(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.userPin.pin,
          this.page.user[0].remotePin,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_9zp4ZRHxnodeedeB(bh);
      } else {
        bh = await this.sd_4lIXJ2ZUSZ86YYd8(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l6W1niEA0hfqyxb4');
    }
  }

  async sd_9zp4ZRHxnodeedeB(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_9zp4ZRHxnodeedeB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9zp4ZRHxnodeedeB');
    }
  }

  sd_4lIXJ2ZUSZ86YYd8(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Pin does not match', 'ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_4lIXJ2ZUSZ86YYd8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4lIXJ2ZUSZ86YYd8');
    }
  }

  sd_OcKLZTVIb1JrHcrY(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_2psBQLgPcP8d28km(bh);
      //appendnew_next_sd_OcKLZTVIb1JrHcrY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OcKLZTVIb1JrHcrY');
    }
  }

  sd_2psBQLgPcP8d28km(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh.url = page.ssdURL + 'log-in';

      console.log(bh.input.form);
      bh = this.sd_rYXNYMXOXirhGBzF(bh);
      //appendnew_next_sd_2psBQLgPcP8d28km
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2psBQLgPcP8d28km');
    }
  }

  async sd_rYXNYMXOXirhGBzF(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_FldfSXF1A1WlNleN(bh);
      } else {
        bh = await this.sd_VYPcz68JDQaqOgZg(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rYXNYMXOXirhGBzF');
    }
  }

  sd_FldfSXF1A1WlNleN(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_sBgSTvH9bAEkkWHc(bh);
      //appendnew_next_sd_FldfSXF1A1WlNleN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FldfSXF1A1WlNleN');
    }
  }

  sd_sBgSTvH9bAEkkWHc(bh) {
    try {
      const page = this.page;
      page.remotePin.email = page.result.email;
      console.log('Body: ', page.remotePin);
      bh = this.sd_l0xW7rEfbtlq3Lto(bh);
      //appendnew_next_sd_sBgSTvH9bAEkkWHc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sBgSTvH9bAEkkWHc');
    }
  }

  async sd_l0xW7rEfbtlq3Lto(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.remotePin,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_TCyg1YLAXkDoMTwT(bh);
      //appendnew_next_sd_l0xW7rEfbtlq3Lto
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l0xW7rEfbtlq3Lto');
    }
  }

  async sd_TCyg1YLAXkDoMTwT(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_TCyg1YLAXkDoMTwT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TCyg1YLAXkDoMTwT');
    }
  }

  sd_VYPcz68JDQaqOgZg(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('ENTER YOUR PIN', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_VYPcz68JDQaqOgZg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VYPcz68JDQaqOgZg');
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
  //appendnew_flow_enter_remote_pinComponent_Catch
}
