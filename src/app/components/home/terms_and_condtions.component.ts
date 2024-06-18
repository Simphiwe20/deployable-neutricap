// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { confirm_detailsComponent } from 'app/components/confirm_details.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-terms_and_condtions',
  templateUrl: './terms_and_condtions.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class terms_and_condtionsComponent {
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
      this.sd_gp97hZvnRNmjgWYT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_gp97hZvnRNmjgWYT(bh) {
    try {
      bh = this.sd_IwL1A08qBE32T3Ij(bh);
      //appendnew_next_sd_gp97hZvnRNmjgWYT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gp97hZvnRNmjgWYT');
    }
  }

  cancel(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_bCy9QmlCF52c6Ram(bh);
      //appendnew_next_cancel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lcP0mhsKdILy91Jb');
    }
  }

  proceed(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_CL6h1jdmw3K7I1Sb(bh);
      //appendnew_next_proceed
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CKmUENhREYNFglUf');
    }
  }
  //appendnew_flow_terms_and_condtionsComponent_start

  sd_IwL1A08qBE32T3Ij(bh) {
    try {
      //appendnew_next_sd_IwL1A08qBE32T3Ij
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IwL1A08qBE32T3Ij');
    }
  }

  sd_bCy9QmlCF52c6Ram(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      //appendnew_next_sd_bCy9QmlCF52c6Ram
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bCy9QmlCF52c6Ram');
    }
  }

  sd_CL6h1jdmw3K7I1Sb(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      bh = this.sd_psRcxfg2EioCPzxw(bh);
      //appendnew_next_sd_CL6h1jdmw3K7I1Sb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CL6h1jdmw3K7I1Sb');
    }
  }

  sd_psRcxfg2EioCPzxw(bh) {
    try {
      const confirm_detailsDialog = this.__page_injector__.get(MatDialog);
      const confirm_detailsDialogRef = confirm_detailsDialog.open(
        confirm_detailsComponent,
        {}
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_psRcxfg2EioCPzxw');
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
  //appendnew_flow_terms_and_condtionsComponent_Catch
}
