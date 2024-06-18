// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-profile',
  templateUrl: './profile.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class profileComponent {
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
      this.sd_3WzYqbHoWlM3vM6c(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3WzYqbHoWlM3vM6c(bh) {
    try {
      bh = this.sd_CMSPRayg7WVF41UY(bh);
      //appendnew_next_sd_3WzYqbHoWlM3vM6c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3WzYqbHoWlM3vM6c');
    }
  }

  back(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lT7x6JewQXy5Vpf6(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VJtdk0gQo6IXGKqk');
    }
  }
  //appendnew_flow_profileComponent_start

  sd_CMSPRayg7WVF41UY(bh) {
    try {
      this.page.location = Location;
      bh = this.sd_miLhLSpqaBKVhWTQ(bh);
      //appendnew_next_sd_CMSPRayg7WVF41UY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CMSPRayg7WVF41UY');
    }
  }

  sd_miLhLSpqaBKVhWTQ(bh) {
    try {
      this.page.location = undefined;
      bh = this.sd_4vpePHhvR7aTiAzd(bh);
      //appendnew_next_sd_miLhLSpqaBKVhWTQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_miLhLSpqaBKVhWTQ');
    }
  }

  sd_4vpePHhvR7aTiAzd(bh) {
    try {
      const page = this.page;
      page.profile = [
        { icon: 'my-detail-icon.png', text: 'My details', link: '/my-details' },
        {
          icon: 'email-update-icon.png',
          text: 'My email address',
          link: '/email',
        },
        {
          icon: 'tax-icon.png',
          text: 'My tax details',
          link: '/my-tax-details',
        },
        { icon: 'agreement-icon.png', text: 'My agreement & disclamers' },
        {
          icon: 'privacy-icon.png',
          text: 'Our Primary Center',
          link: '/policy',
        },
      ];

      //appendnew_next_sd_4vpePHhvR7aTiAzd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4vpePHhvR7aTiAzd');
    }
  }

  sd_lT7x6JewQXy5Vpf6(bh) {
    try {
      const page = this.page;
      page.location.back();
      //appendnew_next_sd_lT7x6JewQXy5Vpf6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lT7x6JewQXy5Vpf6');
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
  //appendnew_flow_profileComponent_Catch
}
