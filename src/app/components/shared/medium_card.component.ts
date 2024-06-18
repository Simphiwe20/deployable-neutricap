// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { sign_inComponent } from 'app/components/PopUps/sign_in.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-medium_card',
  templateUrl: './medium_card.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class medium_cardComponent {
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
      this.sd_zH9yRGJhq9fOVEcJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zH9yRGJhq9fOVEcJ(bh) {
    try {
      bh = this.sd_JVuwiufKCahYP4tp(bh);
      //appendnew_next_sd_zH9yRGJhq9fOVEcJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zH9yRGJhq9fOVEcJ');
    }
  }

  openDialog(routes: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { routes };
      bh.local = {};
      bh = this.sd_wAQWWGn1bkfScgYs(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_js6IzSjvVrYbObgA');
    }
  }
  //appendnew_flow_medium_cardComponent_start

  sd_JVuwiufKCahYP4tp(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_TqDatvZrTQgXaayj(bh);
      //appendnew_next_sd_JVuwiufKCahYP4tp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JVuwiufKCahYP4tp');
    }
  }

  sd_TqDatvZrTQgXaayj(bh) {
    try {
      this.page.cardsInfor = undefined;
      this.page.isLanding = false;
      bh = this.sd_W30lVBTItkzfqGjd(bh);
      //appendnew_next_sd_TqDatvZrTQgXaayj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TqDatvZrTQgXaayj');
    }
  }

  sd_W30lVBTItkzfqGjd(bh) {
    try {
      this.page.cardsInfor = JSON.parse(localStorage.getItem('myFav'));
      bh = this.sd_dwviufaEUSxef65M(bh);
      //appendnew_next_sd_W30lVBTItkzfqGjd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_W30lVBTItkzfqGjd');
    }
  }

  sd_dwviufaEUSxef65M(bh) {
    try {
      const page = this.page;
      console.log(page.router.url);
      if (page.router.url === '/landing') {
        page.isLanding = true;
      }

      let card = { cards: [] };
      let cards = [];
      page.cardsInfor = page.cardsInfor?.forEach((_card: any, i: number) => {
        if (card.cards.length <= 2) {
          card.cards.push(_card);
        }
        console.log(
          '2 lengths conditions',
          card.cards.length == 1 && page.cardsInfor.length - 1 == i
        );
        console.log('length condition', card.cards.length == 1);
        if (
          (card.cards.length == 1 && page.cardsInfor.length - 1 == i) ||
          card.cards.length == 2
        ) {
          cards.push(card);
          card = { cards: [] };
        }
        // if()
        // if(page.cardsInfor[i+1]){
        //    cards.push({
        //        "cards" : [].push(_card)
        //    })
        // }else{
        //     cards.push({
        //        "cards" : [].push(_card)
        //    })
        // }
      });

      console.log(cards);
      if (!cards.length) {
        page.cardsInfor = [
          {
            cards: [
              {
                image: '../../../assets/Web/Images/pay_beneficiary.jpeg',
                name: 'Pay beneficiary',
                routes: '/logged_in_landing/pay_beneficiary',
              },
              {
                image: '../../../assets/Web/Images/payshap.jpeg',
                name: 'PayShap',
                routes: '/logged_in_landing/pay_shap',
              },
            ],
          },
          {
            cards: [
              {
                image: '../../../assets/Web/Images/pay_bills.jpeg',
                name: 'Pay bills',
                routes: '/logged_in_landing/pay_bills',
              },
              {
                image: '../../../assets/Web/Images/international_payment.jpeg',
                name: 'International payments',
                routes: '/logged_in_landing/intrenational_payment',
              },
            ],
          },
          {
            cards: [
              {
                image: '../../../assets/Web/Images/mobile_prepaid.jpg',
                name: 'Buy prepaid mobile',
                routes: '/logged_in_landing/buy_prepaid_mobile',
              },
              {
                image: '../../../assets/Web/Images/electricity.jpg',
                name: 'Buy electricity',
                routes: '/logged_in_landing/buy_electricity/pay_ben_electric',
              },
            ],
          },
        ];
      } else {
        page.cardsInfor = cards;
      }
      //appendnew_next_sd_dwviufaEUSxef65M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dwviufaEUSxef65M');
    }
  }

  async sd_wAQWWGn1bkfScgYs(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isLanding,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_OnHdsQHSTs5zbViV(bh);
      } else {
        bh = await this.sd_5aXVOIOXPEgYEsp6(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wAQWWGn1bkfScgYs');
    }
  }

  sd_OnHdsQHSTs5zbViV(bh) {
    try {
      const sign_inDialog = this.__page_injector__.get(MatDialog);
      const sign_inDialogRef = sign_inDialog.open(sign_inComponent, {
        width: '100%',
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OnHdsQHSTs5zbViV');
    }
  }

  async sd_5aXVOIOXPEgYEsp6(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(bh.input.routes);
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_5aXVOIOXPEgYEsp6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5aXVOIOXPEgYEsp6');
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
  //appendnew_flow_medium_cardComponent_Catch
}
