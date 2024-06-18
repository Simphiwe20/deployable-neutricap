// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm',
  templateUrl: './confirm.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirmComponent {
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
      this.sd_QLWzyv6DlDVQyfJO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_QLWzyv6DlDVQyfJO(bh) {
    try {
      bh = this.sd_54vwdMofxVjGaRQc(bh);
      //appendnew_next_sd_QLWzyv6DlDVQyfJO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QLWzyv6DlDVQyfJO');
    }
  }

  closeDialog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_vuTmIqMPCabDh6aJ(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xemz5o5iCHRcIf9b');
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
      bh = this.sd_WGI00ER8gMn6lOQe(bh);
      //appendnew_next_pin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EsYtUAzDmcat5TMY');
    }
  }
  //appendnew_flow_confirmComponent_start

  sd_54vwdMofxVjGaRQc(bh) {
    try {
      //appendnew_next_sd_54vwdMofxVjGaRQc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_54vwdMofxVjGaRQc');
    }
  }

  sd_vuTmIqMPCabDh6aJ(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.dialogData);

      //appendnew_next_sd_vuTmIqMPCabDh6aJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vuTmIqMPCabDh6aJ');
    }
  }

  sd_WGI00ER8gMn6lOQe(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_eomNOZqv3doT0uyd(bh);
      //appendnew_next_sd_WGI00ER8gMn6lOQe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WGI00ER8gMn6lOQe');
    }
  }

  sd_eomNOZqv3doT0uyd(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh.url = page.ssdURL + 'log-in';

      console.log(bh.input.form);
      bh = this.sd_Az7vbfAZGQ1GDJB6(bh);
      //appendnew_next_sd_eomNOZqv3doT0uyd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eomNOZqv3doT0uyd');
    }
  }

  async sd_Az7vbfAZGQ1GDJB6(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_x5ScikLWMJG30igv(bh);
      } else {
        bh = await this.sd_5YkqmtOhcmZiQUsj(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Az7vbfAZGQ1GDJB6');
    }
  }

  sd_x5ScikLWMJG30igv(bh) {
    try {
      this.page.result = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_oCGfBgIbVw26irt1(bh);
      //appendnew_next_sd_x5ScikLWMJG30igv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x5ScikLWMJG30igv');
    }
  }

  sd_oCGfBgIbVw26irt1(bh) {
    try {
      const page = this.page;
      page.remotePin.email = page.result.email;
      console.log('Body: ', page.remotePin);
      bh = this.sd_pyxCJAZgVtIJ37WO(bh);
      //appendnew_next_sd_oCGfBgIbVw26irt1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oCGfBgIbVw26irt1');
    }
  }

  sd_pyxCJAZgVtIJ37WO(bh) {
    try {
      let outputVariables = this.closeDialog();

      bh = this.sd_mHdOmAI2kUtZTX7B(bh);
      //appendnew_next_sd_pyxCJAZgVtIJ37WO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pyxCJAZgVtIJ37WO');
    }
  }

  async sd_mHdOmAI2kUtZTX7B(bh) {
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
      bh = this.sd_Fg9uBIyWmxZNPkcO(bh);
      //appendnew_next_sd_mHdOmAI2kUtZTX7B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mHdOmAI2kUtZTX7B');
    }
  }

  async sd_Fg9uBIyWmxZNPkcO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_Fg9uBIyWmxZNPkcO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fg9uBIyWmxZNPkcO');
    }
  }

  sd_5YkqmtOhcmZiQUsj(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('ENTER YOUR PIN', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_5YkqmtOhcmZiQUsj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5YkqmtOhcmZiQUsj');
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
  //appendnew_flow_confirmComponent_Catch
}
