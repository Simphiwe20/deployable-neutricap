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
  selector: 'bh-confirm_details',
  templateUrl: './confirm_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirm_detailsComponent {
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
      this.sd_izhRlQRcu1zBshfS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_izhRlQRcu1zBshfS(bh) {
    try {
      bh = this.sd_VhQy0vig3OA1kzEu(bh);
      //appendnew_next_sd_izhRlQRcu1zBshfS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_izhRlQRcu1zBshfS');
    }
  }

  remotePin(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_rC31Oq7XeoHG8EIH(bh);
      //appendnew_next_remotePin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wOAQkF9PJxFOn3u9');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_b38CR9DlAzhDklW7(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KBf3IN5fnfgjezJD');
    }
  }
  //appendnew_flow_confirm_detailsComponent_start

  sd_VhQy0vig3OA1kzEu(bh) {
    try {
      this.page.submitted = undefined;
      bh = this.sd_USJylmvw0CCxAS13(bh);
      //appendnew_next_sd_VhQy0vig3OA1kzEu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VhQy0vig3OA1kzEu');
    }
  }

  sd_USJylmvw0CCxAS13(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_CmrvEz1ZrxqdN3Wa(bh);
      //appendnew_next_sd_USJylmvw0CCxAS13
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_USJylmvw0CCxAS13');
    }
  }

  sd_CmrvEz1ZrxqdN3Wa(bh) {
    try {
      const page = this.page;
      console.log(page.user);

      page.migrate = {
        fullName: page.user.fullName,
        accountNumber: page.user.accountNumber,
        email: page.user.email,
        available_balance: page.user.available_balance,
        idNum: page.user.idNum,
        contacts: page.user.contacts,
        savings_balance: page.user.saving_balance,
        remotePin: '',
      };
      //appendnew_next_sd_CmrvEz1ZrxqdN3Wa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CmrvEz1ZrxqdN3Wa');
    }
  }

  sd_rC31Oq7XeoHG8EIH(bh) {
    try {
      const page = this.page;
      page.submitted = false;

      bh.body = {
        email: page.user.email,
        remotePin: page.migrate.remotePin,
      };
      bh = this.sd_5cOsZTOstboDyV4t(bh);
      //appendnew_next_sd_rC31Oq7XeoHG8EIH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rC31Oq7XeoHG8EIH');
    }
  }

  async sd_5cOsZTOstboDyV4t(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8VXydPVAWI5T0BbT(bh);
      } else {
        bh = await this.sd_fa0mvl53mOq7MG6x(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5cOsZTOstboDyV4t');
    }
  }

  sd_8VXydPVAWI5T0BbT(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_vZ81L7jffFjMszLW(bh);
      //appendnew_next_sd_8VXydPVAWI5T0BbT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8VXydPVAWI5T0BbT');
    }
  }

  sd_vZ81L7jffFjMszLW(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'log-in';
      bh = this.sd_uTKnCdeuD1u41cJX(bh);
      //appendnew_next_sd_vZ81L7jffFjMszLW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vZ81L7jffFjMszLW');
    }
  }

  async sd_uTKnCdeuD1u41cJX(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_MwtpWx7EjoXuff44(bh);
      //appendnew_next_sd_uTKnCdeuD1u41cJX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uTKnCdeuD1u41cJX');
    }
  }

  sd_MwtpWx7EjoXuff44(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_TUjIgZny1n5HwI5b(bh);
      } else {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MwtpWx7EjoXuff44');
    }
  }

  sd_TUjIgZny1n5HwI5b(bh) {
    try {
      const page = this.page;
      bh.update_url = page.ssdURL + 'update';

      bh.update_body = {
        email: page.user.email,
        registered: 'false',
      };
      bh = this.sd_OUH2CP7Qa8JQabIn(bh);
      //appendnew_next_sd_TUjIgZny1n5HwI5b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TUjIgZny1n5HwI5b');
    }
  }

  async sd_OUH2CP7Qa8JQabIn(bh) {
    try {
      let requestOptions = {
        url: bh.update_url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.update_body,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_A2bsn0LunRVWHSme(bh);
      //appendnew_next_sd_OUH2CP7Qa8JQabIn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OUH2CP7Qa8JQabIn');
    }
  }

  sd_A2bsn0LunRVWHSme(bh) {
    try {
      const page = this.page;
      bh.migrate_url = 'https://37bd-169-239-176-9.ngrok-free.app/api/register';
      bh = this.sd_NkHzkqPb5YFD7Qix(bh);
      //appendnew_next_sd_A2bsn0LunRVWHSme
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A2bsn0LunRVWHSme');
    }
  }

  async sd_NkHzkqPb5YFD7Qix(bh) {
    try {
      let requestOptions = {
        url: bh.migrate_url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.user,
      };
      this.page.results_migrate = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_JxIcDxVAPSxeQApy(bh);
      //appendnew_next_sd_NkHzkqPb5YFD7Qix
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NkHzkqPb5YFD7Qix');
    }
  }

  sd_JxIcDxVAPSxeQApy(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      bh = this.sd_gWfYb1rOgCkLWvoI(bh);
      //appendnew_next_sd_JxIcDxVAPSxeQApy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JxIcDxVAPSxeQApy');
    }
  }

  async sd_gWfYb1rOgCkLWvoI(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/ft-landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_gWfYb1rOgCkLWvoI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gWfYb1rOgCkLWvoI');
    }
  }

  sd_fa0mvl53mOq7MG6x(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('ENTER REMOTE PIN', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_fa0mvl53mOq7MG6x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fa0mvl53mOq7MG6x');
    }
  }

  sd_b38CR9DlAzhDklW7(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      //appendnew_next_sd_b38CR9DlAzhDklW7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b38CR9DlAzhDklW7');
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
  //appendnew_flow_confirm_detailsComponent_Catch
}
