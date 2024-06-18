// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ft_landing',
  templateUrl: './ft_landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ft_landingComponent {
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
      this.sd_IlYBtzF7lNSUS4C7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IlYBtzF7lNSUS4C7(bh) {
    try {
      bh = this.sd_yJKGCJnUP14qfurL(bh);
      //appendnew_next_sd_IlYBtzF7lNSUS4C7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IlYBtzF7lNSUS4C7');
    }
  }

  toggle(doing: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { doing };
      bh.local = {};
      bh = this.sd_FqGOOwmvstX9QSyj(bh);
      //appendnew_next_toggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kLwFxLDrCSx2njEU');
    }
  }

  secondToggle(For: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { For };
      bh.local = {};
      bh = this.sd_tYa9FYGPl2JlsbDy(bh);
      //appendnew_next_secondToggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fnsCRP4cE6AznV2U');
    }
  }
  //appendnew_flow_ft_landingComponent_start

  sd_yJKGCJnUP14qfurL(bh) {
    try {
      this.page.toggleValue = undefined;
      this.page.toggled = false;
      this.page.secondToggled = false;
      this.page.signingIn = undefined;
      this.page.forMySelf = undefined;
      this.page.routes = undefined;
      bh = this.sd_KyjpI80hBNTvXWRy(bh);
      //appendnew_next_sd_yJKGCJnUP14qfurL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yJKGCJnUP14qfurL');
    }
  }

  sd_KyjpI80hBNTvXWRy(bh) {
    try {
      const page = this.page;
      page.toggle = {
        toggle1: '',
        toggle2: '',
      };

      console.log('NEW CHANGES');
      //appendnew_next_sd_KyjpI80hBNTvXWRy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KyjpI80hBNTvXWRy');
    }
  }

  sd_FqGOOwmvstX9QSyj(bh) {
    try {
      const page = this.page;
      page.toggled = true;
      console.log(bh.input.doing);

      bh = this.checkDoing(bh);
      //appendnew_next_sd_FqGOOwmvstX9QSyj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FqGOOwmvstX9QSyj');
    }
  }

  async checkDoing(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.doing,
          'sign-in',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ZyY81xufkWwNr5mm(bh);
      } else {
        bh = await this.sd_iq3b8JdZ2fpE987l(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mxgyZcmuHHOrDk57');
    }
  }

  sd_ZyY81xufkWwNr5mm(bh) {
    try {
      const page = this.page;
      page.signingIn = true;
      console.log(bh.input.doing);
      //appendnew_next_sd_ZyY81xufkWwNr5mm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZyY81xufkWwNr5mm');
    }
  }

  sd_iq3b8JdZ2fpE987l(bh) {
    try {
      const page = this.page;
      page.signingIn = false;
      console.log(bh.input.doing);
      console.log(bh);

      //appendnew_next_sd_iq3b8JdZ2fpE987l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iq3b8JdZ2fpE987l');
    }
  }

  sd_tYa9FYGPl2JlsbDy(bh) {
    try {
      const page = this.page;
      page.secondToggled = true;
      bh = this.sd_Gu1eTAgXqVcMa0mh(bh);
      //appendnew_next_sd_tYa9FYGPl2JlsbDy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tYa9FYGPl2JlsbDy');
    }
  }

  async sd_Gu1eTAgXqVcMa0mh(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.For,
          'myself',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_WzZv1hHhQBToQwpq(bh);
      } else {
        bh = await this.sd_Cyw1RaNSYYYytPlg(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gu1eTAgXqVcMa0mh');
    }
  }

  sd_WzZv1hHhQBToQwpq(bh) {
    try {
      const page = this.page;
      page.forMySelf = true;
      console.log(bh.input.For);

      bh = this.sd_BssnCf0DfEhhlJUR(bh);
      //appendnew_next_sd_WzZv1hHhQBToQwpq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WzZv1hHhQBToQwpq');
    }
  }

  async sd_BssnCf0DfEhhlJUR(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.signingIn,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_6uZRrWhAfiWxYKbq(bh);
      } else {
        bh = await this.sd_7sF8DuIjEeC4jBxb(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BssnCf0DfEhhlJUR');
    }
  }

  sd_6uZRrWhAfiWxYKbq(bh) {
    try {
      const page = this.page;
      page.routes = '/sign_in_stepper';
      //appendnew_next_sd_6uZRrWhAfiWxYKbq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6uZRrWhAfiWxYKbq');
    }
  }

  sd_7sF8DuIjEeC4jBxb(bh) {
    try {
      const page = this.page;
      page.routes = '/sign_up_stepper';

      //appendnew_next_sd_7sF8DuIjEeC4jBxb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7sF8DuIjEeC4jBxb');
    }
  }

  sd_Cyw1RaNSYYYytPlg(bh) {
    try {
      const page = this.page;
      page.forMySelf = false;
      console.log(bh.input.For);

      bh = this.sd_fVq7anyGYvaGUfxW(bh);
      //appendnew_next_sd_Cyw1RaNSYYYytPlg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cyw1RaNSYYYytPlg');
    }
  }

  async sd_fVq7anyGYvaGUfxW(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.signingIn,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_1JdgMnGF8MyQYljb(bh);
      } else {
        bh = await this.sd_7XlgcTX4ZOW2CeOO(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fVq7anyGYvaGUfxW');
    }
  }

  sd_1JdgMnGF8MyQYljb(bh) {
    try {
      const page = this.page;
      page.routes = '/company_activate';

      //appendnew_next_sd_1JdgMnGF8MyQYljb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1JdgMnGF8MyQYljb');
    }
  }

  sd_7XlgcTX4ZOW2CeOO(bh) {
    try {
      const page = this.page;
      page.routes = '/company_open_account';

      //appendnew_next_sd_7XlgcTX4ZOW2CeOO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7XlgcTX4ZOW2CeOO');
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
  //appendnew_flow_ft_landingComponent_Catch
}
