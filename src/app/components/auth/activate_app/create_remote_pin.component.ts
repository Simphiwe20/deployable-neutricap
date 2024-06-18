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
  selector: 'bh-create_remote_pin',
  templateUrl: './create_remote_pin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class create_remote_pinComponent {
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
      this.sd_K5WCWoiwzadZofnW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_K5WCWoiwzadZofnW(bh) {
    try {
      bh = this.sd_T5Ow9Qz0IgZnlS9I(bh);
      //appendnew_next_sd_K5WCWoiwzadZofnW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K5WCWoiwzadZofnW');
    }
  }

  sd_3WQTZvnddTpQcB9m(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_IaSA3HH7SGKrCeOR(bh);
      //appendnew_next_sd_3WQTZvnddTpQcB9m
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3WQTZvnddTpQcB9m');
    }
  }
  //appendnew_flow_create_remote_pinComponent_start

  sd_T5Ow9Qz0IgZnlS9I(bh) {
    try {
      this.page.pinForm = { createPin: '', confirmPin: '' };
      this.page.user = this.page.user;
      this.page.submitted = false;
      this.page.pin = this.page.pin;
      this.page.email = this.page.email;
      bh = this.sd_tkig3xKi6iA5R0rX(bh);
      //appendnew_next_sd_T5Ow9Qz0IgZnlS9I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T5Ow9Qz0IgZnlS9I');
    }
  }

  sd_tkig3xKi6iA5R0rX(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_oMKZlag4pdS8DbDl(bh);
      //appendnew_next_sd_tkig3xKi6iA5R0rX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tkig3xKi6iA5R0rX');
    }
  }

  sd_oMKZlag4pdS8DbDl(bh) {
    try {
      const page = this.page;
      page.user = page.result;

      //appendnew_next_sd_oMKZlag4pdS8DbDl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oMKZlag4pdS8DbDl');
    }
  }

  sd_IaSA3HH7SGKrCeOR(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_8ZH14Xufv22pDJAG(bh);
      //appendnew_next_sd_IaSA3HH7SGKrCeOR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IaSA3HH7SGKrCeOR');
    }
  }

  async sd_8ZH14Xufv22pDJAG(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_0DpBm1UU56hlaWmP(bh);
      } else {
        bh = await this.sd_SVU5e9y1shkJiUI3(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8ZH14Xufv22pDJAG');
    }
  }

  sd_0DpBm1UU56hlaWmP(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('VALID', 'OK', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_JNGrxh5EnRrUyl3m(bh);
      //appendnew_next_sd_0DpBm1UU56hlaWmP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0DpBm1UU56hlaWmP');
    }
  }

  sd_JNGrxh5EnRrUyl3m(bh) {
    try {
      const page = this.page;
      page.email = page.user.email;
      page.pin = page.user.remotePin;

      bh.body = page.user;

      bh = this.sd_yO95M9Kj3sjuwb2S(bh);
      //appendnew_next_sd_JNGrxh5EnRrUyl3m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JNGrxh5EnRrUyl3m');
    }
  }

  sd_yO95M9Kj3sjuwb2S(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_FD0Re7Fkh98vlSkN(bh);
      //appendnew_next_sd_yO95M9Kj3sjuwb2S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yO95M9Kj3sjuwb2S');
    }
  }

  async sd_FD0Re7Fkh98vlSkN(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.pinForm.confirmPin,
          this.page.pinForm.createPin,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_hhzbQQKcIJRgbN4b(bh);
      } else {
        bh = await this.sd_TlmOyQyHy3JAOd8Z(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FD0Re7Fkh98vlSkN');
    }
  }

  sd_hhzbQQKcIJRgbN4b(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update';

      bh.body.remotePin = page.pinForm.createPin;

      bh = this.sd_RoQA3dmzrUDfFjKr(bh);
      //appendnew_next_sd_hhzbQQKcIJRgbN4b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hhzbQQKcIJRgbN4b');
    }
  }

  async sd_RoQA3dmzrUDfFjKr(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_czL6sLA4AwCWHMNk(bh);
      //appendnew_next_sd_RoQA3dmzrUDfFjKr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RoQA3dmzrUDfFjKr');
    }
  }

  sd_czL6sLA4AwCWHMNk(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(bh.body));
      bh = this.sd_c0s5mAXh7MXGuw9z(bh);
      //appendnew_next_sd_czL6sLA4AwCWHMNk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_czL6sLA4AwCWHMNk');
    }
  }

  async sd_c0s5mAXh7MXGuw9z(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/enter_remote_pin');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_HNRCFPczWHckqSv1(bh);
      //appendnew_next_sd_c0s5mAXh7MXGuw9z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c0s5mAXh7MXGuw9z');
    }
  }

  sd_HNRCFPczWHckqSv1(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Pin successfully updated', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_HNRCFPczWHckqSv1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HNRCFPczWHckqSv1');
    }
  }

  sd_TlmOyQyHy3JAOd8Z(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('PIN DOES NOT MATCH', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_TlmOyQyHy3JAOd8Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TlmOyQyHy3JAOd8Z');
    }
  }

  sd_SVU5e9y1shkJiUI3(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('INVALID', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_SVU5e9y1shkJiUI3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SVU5e9y1shkJiUI3');
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
  //appendnew_flow_create_remote_pinComponent_Catch
}
