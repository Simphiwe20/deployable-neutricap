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
  selector: 'bh-tailor_made_card',
  templateUrl: './tailor_made_card.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class tailor_made_cardComponent {
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
      this.sd_RkyrJRYttvjtIGnt(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RkyrJRYttvjtIGnt(bh) {
    try {
      bh = this.sd_yQ60gFGizvhn9HIB(bh);
      //appendnew_next_sd_RkyrJRYttvjtIGnt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RkyrJRYttvjtIGnt');
    }
  }

  addFav(added: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { added };
      bh.local = {};
      bh = this.sd_vDMhwGchrxYaHrMR(bh);
      //appendnew_next_addFav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TpdLqaWb2i4djwtz');
    }
  }

  deSelect(selected: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { selected };
      bh.local = {};
      bh = this.sd_JBBxMmKn8I7GmeDT(bh);
      //appendnew_next_deSelect
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8vvp2yJjBCwCFTX0');
    }
  }
  //appendnew_flow_tailor_made_cardComponent_start

  sd_yQ60gFGizvhn9HIB(bh) {
    try {
      this.page.cardsInfor = undefined;
      this.page.myFav = undefined;
      bh = this.sd_THjJlxPfVFtomdxI(bh);
      //appendnew_next_sd_yQ60gFGizvhn9HIB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yQ60gFGizvhn9HIB');
    }
  }

  sd_THjJlxPfVFtomdxI(bh) {
    try {
      const page = this.page;
      page.cardsInfor = [
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
        {
          image: '../../../assets/Web/Images/debit_orders.jpeg',
          name: 'Debit orders',
          routes: '/underconstruction',
        },
        {
          image: '../../../assets/Web/Images/sars_efiling.jpeg',
          name: 'SARS eFilling',
          routes: '/underconstruction',
        },
      ];
      bh = this.sd_zFlZ9zmn3yH12Kfr(bh);
      //appendnew_next_sd_THjJlxPfVFtomdxI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_THjJlxPfVFtomdxI');
    }
  }

  sd_zFlZ9zmn3yH12Kfr(bh) {
    try {
      this.page.myFav = JSON.parse(localStorage.getItem('myFav'));
      bh = this.sd_ovCvHDZkrfq1N9Hu(bh);
      //appendnew_next_sd_zFlZ9zmn3yH12Kfr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zFlZ9zmn3yH12Kfr');
    }
  }

  async sd_ovCvHDZkrfq1N9Hu(bh) {
    try {
      if (
        this.sdService.operators['null'](
          this.page.myFav,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_WPzWXkMnmpKcSSIh(bh);
      } else {
        bh = await this.sd_IBH7HEuAObFkhqbr(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ovCvHDZkrfq1N9Hu');
    }
  }

  sd_WPzWXkMnmpKcSSIh(bh) {
    try {
      const page = this.page;
      page.myFav = [];

      //appendnew_next_sd_WPzWXkMnmpKcSSIh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WPzWXkMnmpKcSSIh');
    }
  }

  sd_IBH7HEuAObFkhqbr(bh) {
    try {
      const page = this.page;
      let cardsInforStr = [];
      let myFavStr = [];
      console.log(page.myFav);

      page.cardsInfor.forEach((card: any, indx: number) => {
        let cardStr = JSON.stringify(card);
        cardsInforStr.push(cardStr);
      });

      page.myFav.forEach((fav: any, indx: number) => {
        let favStr = JSON.stringify(fav);
        myFavStr.push(favStr);
      });

      let newCardsInfor = cardsInforStr.filter((card: any) => {
        if (!myFavStr.includes(card)) {
          return card;
        }
        // console.log(myFavStr.includes(card))
      });

      console.log('Cards infor str: ', cardsInforStr);
      console.log('My fav Str: ', myFavStr);

      console.log('New cards infor: ', newCardsInfor);

      page.cardsInfor = [];
      newCardsInfor.forEach((card: any) => {
        let parsedCard = JSON.parse(card);
        console.log('Parsed cards: ', parsedCard);
        page.cardsInfor.push(parsedCard);
      });

      console.log('Parsed cards: ', page.cardsInfor);

      //appendnew_next_sd_IBH7HEuAObFkhqbr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IBH7HEuAObFkhqbr');
    }
  }

  sd_vDMhwGchrxYaHrMR(bh) {
    try {
      if (
        this.sdService.operators['lte'](
          this.page.myFav.length,
          5,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_I3W8vVlpxdVxeUwA(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vDMhwGchrxYaHrMR');
    }
  }

  sd_I3W8vVlpxdVxeUwA(bh) {
    try {
      const page = this.page;
      console.log(page.myFav.length);
      page.myFav.push(bh.input.added);
      page.cardsInfor.splice(page.cardsInfor.indexOf(bh.input.added), 1);
      bh = this.sd_w3VyS5sQtTrOG4aL(bh);
      //appendnew_next_sd_I3W8vVlpxdVxeUwA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I3W8vVlpxdVxeUwA');
    }
  }

  sd_w3VyS5sQtTrOG4aL(bh) {
    try {
      localStorage.setItem('myFav', JSON.stringify(this.page.myFav));
      bh = this.sd_UsFwwOLuQOlGAsOg(bh);
      //appendnew_next_sd_w3VyS5sQtTrOG4aL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w3VyS5sQtTrOG4aL');
    }
  }

  sd_UsFwwOLuQOlGAsOg(bh) {
    try {
      this.page.myFav = JSON.parse(localStorage.getItem('myFav'));
      //appendnew_next_sd_UsFwwOLuQOlGAsOg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UsFwwOLuQOlGAsOg');
    }
  }

  sd_JBBxMmKn8I7GmeDT(bh) {
    try {
      const page = this.page; // page.myFav.push(bh.input.selected)
      page.cardsInfor.unshift(bh.input.selected);
      page.myFav.splice(page.myFav.indexOf(bh.input.selected), 1);
      bh = this.sd_eb79FmqwtjcyQOOU(bh);
      //appendnew_next_sd_JBBxMmKn8I7GmeDT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JBBxMmKn8I7GmeDT');
    }
  }

  sd_eb79FmqwtjcyQOOU(bh) {
    try {
      localStorage.setItem('myFav', JSON.stringify(this.page.myFav));
      bh = this.sd_dRUFpYPAOMHpacA8(bh);
      //appendnew_next_sd_eb79FmqwtjcyQOOU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eb79FmqwtjcyQOOU');
    }
  }

  sd_dRUFpYPAOMHpacA8(bh) {
    try {
      this.page.myFav = JSON.parse(localStorage.getItem('myFav'));
      //appendnew_next_sd_dRUFpYPAOMHpacA8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dRUFpYPAOMHpacA8');
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
  //appendnew_flow_tailor_made_cardComponent_Catch
}
