// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-long_card',
  templateUrl: './long_card.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class long_cardComponent {
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
      this.sd_oeK98C0MwVwJxQJr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_oeK98C0MwVwJxQJr(bh) {
    try {
      bh = this.sd_ouI8cCaFhVASRm8Y(bh);
      //appendnew_next_sd_oeK98C0MwVwJxQJr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oeK98C0MwVwJxQJr');
    }
  }

  //appendnew_flow_long_cardComponent_start

  sd_ouI8cCaFhVASRm8Y(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_cAPaYKLUwffSwu5n(bh);
      //appendnew_next_sd_ouI8cCaFhVASRm8Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ouI8cCaFhVASRm8Y');
    }
  }

  sd_cAPaYKLUwffSwu5n(bh) {
    try {
      this.page.cardsInfor = undefined;
      this.page.globalOne = undefined;
      bh = this.sd_RhOUvOnBv5xFmRDt(bh);
      //appendnew_next_sd_cAPaYKLUwffSwu5n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cAPaYKLUwffSwu5n');
    }
  }

  sd_RhOUvOnBv5xFmRDt(bh) {
    try {
      const page = this.page;
      page.cardsInfor = [
        {
          image: '../../../assets/Web/Images/savings.jpg',
          name: 'Savings Account',
          routes: '/logged_in_landing/savings_account',
        },
        {
          image: '../../../assets/Web/Images/saving_plan.jpg',
          name: 'Saving',
          routes: '/underconstruction',
        },
        {
          image: '../../../assets/Web/Images/better_living.jpg',
          name: 'Live Better',
          title: 'Live Better',
          routes: '/underconstruction',
        },
      ];

      page.globalOne = [
        {
          image: '../../../assets/Web/Images/savings.jpg',
          name: 'Savings Account',
          name1: 'Tranactional savings account',
          routes: '/logged_in_landing/savings_account',
        },
        {
          image: '../../../assets/Web/Images/saving_plan.jpg',
          name: 'Save',
          name1: 'Flexible, Fixed-Term & Tax-Free Savings',
          routes: '/logged_in_landing/savings_account',
        },
        {
          image: '../../../assets/Web/Images/insure.png',
          name: 'Insure',
          name1: 'Cover for you and your family',
          routes: '/logged_in_landing/savings_account',
        },
        {
          image: '../../../assets/Web/Images/credit.png',
          name: 'Credit',
          name1: 'Credit Card, Facility & Loan',
          routes: '/logged_in_landing/credit',
        },
      ];
      bh = this.sd_YqOri42kYUCjimZE(bh);
      //appendnew_next_sd_RhOUvOnBv5xFmRDt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RhOUvOnBv5xFmRDt');
    }
  }

  sd_YqOri42kYUCjimZE(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.router.url,
          '/logged_in_landing/explore',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Axw8rnfthbJugwRA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YqOri42kYUCjimZE');
    }
  }

  sd_Axw8rnfthbJugwRA(bh) {
    try {
      const page = this.page;
      page.cardsInfor = page.globalOne;
      //appendnew_next_sd_Axw8rnfthbJugwRA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Axw8rnfthbJugwRA');
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
  //appendnew_flow_long_cardComponent_Catch
}
