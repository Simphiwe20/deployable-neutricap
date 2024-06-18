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
  selector: 'bh-long_card1',
  templateUrl: './long_card1.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class long_card1Component {
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
      this.sd_imEtEtjXTL2ORD73(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_imEtEtjXTL2ORD73(bh) {
    try {
      bh = this.sd_upWyUuRsoqHw7gYN(bh);
      //appendnew_next_sd_imEtEtjXTL2ORD73
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_imEtEtjXTL2ORD73');
    }
  }

  //appendnew_flow_long_card1Component_start

  sd_upWyUuRsoqHw7gYN(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_nQcmnUEbmmFRTASi(bh);
      //appendnew_next_sd_upWyUuRsoqHw7gYN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_upWyUuRsoqHw7gYN');
    }
  }

  sd_nQcmnUEbmmFRTASi(bh) {
    try {
      this.page.cardsInfor = undefined;
      this.page.transact = undefined;
      this.page.inbox = undefined;
      bh = this.sd_R7SWodKRPlzn2QHr(bh);
      //appendnew_next_sd_nQcmnUEbmmFRTASi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nQcmnUEbmmFRTASi');
    }
  }

  sd_R7SWodKRPlzn2QHr(bh) {
    try {
      const page = this.page;
      page.cardsInfor = [
        {
          card_Container: {
            title: 'Manage Card',
            cards: [
              {
                image: '../../../assets/Web/Images/stop_card.jpeg',
                name: 'Stop Card',
              },
              {
                image: '../../../assets/Web/Images/tap_to_pay.jpeg',
                name: 'Tap to pay',
              },
            ],
          },
        },
        {
          card_Container: {
            title: 'Manage daily limits',
            cards: [
              {
                name: 'Update permanent limits',
                routes: '/logged_in_landing/update_permanent_limit',
              },
              {
                name: 'Set temporary limits',
                routes: '/logged_in_landing/update_temporary_limit',
              },
            ],
          },
        },
      ];

      page.transact = [
        {
          card_Container: {
            cards: [
              {
                image: '../../../assets/Web/Images/pay_beneficiary.jpeg',
                name: 'Pay beneficiary',
                routes: '/logged_in_landing/pay_beneficiary',
              },
              {
                image: '../../../assets/Web/Images/payshap.jpeg',
                name: 'PayShap',
                routes: '/underconstruction',
              },
              {
                image: '../../../assets/Web/Images/pay_bills.jpeg',
                name: 'Pay bills',
                routes: '/underconstruction',
              },
              {
                image: '../../../assets/Web/Images/international_payment.jpeg',
                name: 'International payments',
                routes: '/underconstruction',
              },
            ],
          },
        },
        {
          card_Container: {
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
              {
                image: '../../../assets/Web/Images/lotto.jpeg',
                name: 'Play Lotto',
                routes: '/underconstruction',
              },
              {
                image: '../../../assets/Web/Images/buy_voucher.jpeg',
                name: 'Buy vouchers',
                routes: '/underconstruction',
              },
              {
                image: '../../../assets/Web/Images/renew_licence_disk.jpeg',
                name: 'Renew licence disk',
                routes: '/underconstruction',
              },
            ],
          },
        },
        {
          card_Container: {
            cards: [
              {
                image: '../../../assets/Web/Images/transfer_money.jpeg',
                name: 'Transfer money',
                routes: '/logged_in_landing/transfer_money',
              },
              {
                image: '../../../assets/Web/Images/future_dated.jpeg',
                name: 'Recurring/future-dated',
                routes: '/underconstruction',
              },
              {
                image: '../../../assets/Web/Images/send_cash.jpeg',
                name: 'Send cash',
                routes: '/logged_in_landing/send_cash',
              },
            ],
          },
        },
        {
          card_Container: {
            cards: [
              {
                image: '../../../assets/Web/Images/scan_to_pay.jpeg',
                name: 'Scan to pay',
                routes: '/scan_to_pay',
              },
              {
                image: '../../../assets/Web/Images/pay_me.jpeg',
                name: 'Pay me',
                routes: '/logged_in_landing/pay_me',
              },
              {
                image: '../../../assets/Web/Images/capitec_pay.jpeg',
                name: 'Capitec pay',
                routes: '/logged_in_landing/capitec_pay',
              },
            ],
          },
        },
        {
          card_Container: {
            cards: [
              {
                image: '../../../assets/Web/Images/debit_orders.jpeg',
                name: 'Debit orders',
                routes: '/logged_in_landing/debit_orders',
              },
              {
                image: '../../../assets/Web/Images/sars_efiling.jpeg',
                name: 'SARS eFilling',
                routes: '/logged_in_landing/sars_efilling',
              },
            ],
          },
        },
      ];

      page.inbox = [
        {
          card_Container: {
            cards: [
              {
                image: '../../../assets/Web/Images/important.jpeg',
                name: 'Keep your money safe',
                date: new Date(),
              },
              {
                image: '../../../assets/Web/Images/warning.jpeg',
                name: 'PayShap Payments',
                date: new Date(),
              },
            ],
          },
        },
      ];

      // if(page.router.url == '/logged_in_landing/transact') {
      //       page.cardsInfor = page.transact
      // }else if(page.router.url == '/logged_in_landing/messages') {
      //       page.cardsInfor = page.inbox
      // }

      console.log(page.transact);
      bh = this.sd_riMs6rwXfSCR8v1E(bh);
      //appendnew_next_sd_R7SWodKRPlzn2QHr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R7SWodKRPlzn2QHr');
    }
  }

  sd_riMs6rwXfSCR8v1E(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.router.url,
          '/logged_in_landing/transact',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_NC9lZlWR7RKMbyOg(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.router.url,
          '/logged_in_landing/messages',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_PTVeQE6CNIh6ZTJa(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_riMs6rwXfSCR8v1E');
    }
  }

  sd_NC9lZlWR7RKMbyOg(bh) {
    try {
      const page = this.page;
      page.cardsInfor = page.transact;

      //appendnew_next_sd_NC9lZlWR7RKMbyOg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NC9lZlWR7RKMbyOg');
    }
  }

  sd_PTVeQE6CNIh6ZTJa(bh) {
    try {
      const page = this.page;
      page.cardsInfor = page.inbox;

      //appendnew_next_sd_PTVeQE6CNIh6ZTJa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PTVeQE6CNIh6ZTJa');
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
  //appendnew_flow_long_card1Component_Catch
}
