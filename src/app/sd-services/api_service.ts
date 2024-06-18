// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class api_service {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_api_service

  async getCustomers(...others) {
    let bh: any = {
      input: {},
      local: {
        customers: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_fqxLeQ5rHACesUM2(bh);
      //appendnew_next_getCustomers
      return (
        // formatting output variables
        {
          input: {},
          local: {
            customers: bh.local.customers,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GHNnLx5QMLnF7xNy');
    }
  }

  async getPayedBen(...others) {
    let bh: any = {
      input: {},
      local: {
        payedBen: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_KfcYzuEVjig0V1w9(bh);
      //appendnew_next_getPayedBen
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedBen: bh.local.payedBen,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9E2STombQQOmX4D');
    }
  }

  async getPayedAirtime(...others) {
    let bh: any = {
      input: {},
      local: {
        payedAirtime: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_e9aqPsbpJ0aXFGqb(bh);
      //appendnew_next_getPayedAirtime
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedAirtime: bh.local.payedAirtime,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z3d2TsvKo6PdcZbg');
    }
  }

  async getMoneyBen(...others) {
    let bh: any = {
      input: {},
      local: {
        moneyBen: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_KVt7NGYNwJrxTqPO(bh);
      //appendnew_next_getMoneyBen
      return (
        // formatting output variables
        {
          input: {},
          local: {
            moneyBen: bh.local.moneyBen,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FJofPlsHqGBkJe3O');
    }
  }

  async getPayedElec(...others) {
    let bh: any = {
      input: {},
      local: {
        payedElec: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_T79IAeLu6PXxvdql(bh);
      //appendnew_next_getPayedElec
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedElec: bh.local.payedElec,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lv9c0KuuUMuUxYte');
    }
  }

  async getTransferMoney(...others) {
    let bh: any = {
      input: {},
      local: {
        transfers: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_5tARe3LfURlAr4MB(bh);
      //appendnew_next_getTransferMoney
      return (
        // formatting output variables
        {
          input: {},
          local: {
            transfers: bh.local.transfers,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ey0IAEmoZQEG0m2M');
    }
  }

  async getScanToPays(...others) {
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_MNmXfZSoBXwLE4px(bh);
      //appendnew_next_getScanToPays
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X9Ki5udKGbeMjaKc');
    }
  }

  async backBtn(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_m4OWdOGmMIuYa2IB(bh);
      //appendnew_next_backBtn
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_crCsmk2T9Wr8C9jG');
    }
  }

  async addTransMessage(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_sJfa0G6v2cm7tZy3(bh);
      //appendnew_next_addTransMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zfYNdk36d9C7KQzH');
    }
  }

  async updateUser(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_so2YliGJxhuBdv1H(bh);
      //appendnew_next_updateUser
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lY0defyqXhQJt4BJ');
    }
  }

  async getTransMessage(...others) {
    let bh: any = {
      input: {},
      local: {
        messages: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_G5q3O9ZxQ4L60k7R(bh);
      //appendnew_next_getTransMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {
            messages: bh.local.messages,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MoMIY02qFsSklHfG');
    }
  }

  async updateTransMessage(message: any = undefined, ...others) {
    let bh: any = {
      input: {
        message,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_NifhwVNgnBWF0Txq(bh);
      //appendnew_next_updateTransMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6Sij7Ib64exZaxKV');
    }
  }
  //appendnew_flow_api_service_start

  async sd_fqxLeQ5rHACesUM2(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_K9HpgYmNHUAnzuV9(bh);
      //appendnew_next_sd_fqxLeQ5rHACesUM2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fqxLeQ5rHACesUM2');
    }
  }

  async sd_K9HpgYmNHUAnzuV9(bh) {
    try {
      bh.url = bh.ssdURL + 'get-customers';
      bh = await this.sd_bJxLJyh43MwXgsKU(bh);
      //appendnew_next_sd_K9HpgYmNHUAnzuV9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K9HpgYmNHUAnzuV9');
    }
  }

  async sd_bJxLJyh43MwXgsKU(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.customers = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_bJxLJyh43MwXgsKU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bJxLJyh43MwXgsKU');
    }
  }

  async sd_KfcYzuEVjig0V1w9(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_vtyH8nH6k9Oatibb(bh);
      //appendnew_next_sd_KfcYzuEVjig0V1w9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KfcYzuEVjig0V1w9');
    }
  }

  async sd_vtyH8nH6k9Oatibb(bh) {
    try {
      bh.url = bh.ssdURL + 'get-payed-ben';
      bh = await this.sd_WBaewLCC4fUpIakC(bh);
      //appendnew_next_sd_vtyH8nH6k9Oatibb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vtyH8nH6k9Oatibb');
    }
  }

  async sd_WBaewLCC4fUpIakC(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.payedBen = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_WBaewLCC4fUpIakC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WBaewLCC4fUpIakC');
    }
  }

  async sd_e9aqPsbpJ0aXFGqb(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_J0zqCHdVWB3AUklC(bh);
      //appendnew_next_sd_e9aqPsbpJ0aXFGqb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e9aqPsbpJ0aXFGqb');
    }
  }

  async sd_J0zqCHdVWB3AUklC(bh) {
    try {
      bh.url = bh.ssdURL + 'get-airtime';
      bh = await this.sd_o3DabrmHYg5twdEs(bh);
      //appendnew_next_sd_J0zqCHdVWB3AUklC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J0zqCHdVWB3AUklC');
    }
  }

  async sd_o3DabrmHYg5twdEs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.payedAirtime = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_o3DabrmHYg5twdEs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o3DabrmHYg5twdEs');
    }
  }

  async sd_KVt7NGYNwJrxTqPO(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_8dSDd6gXh4Z36fBw(bh);
      //appendnew_next_sd_KVt7NGYNwJrxTqPO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KVt7NGYNwJrxTqPO');
    }
  }

  async sd_8dSDd6gXh4Z36fBw(bh) {
    try {
      bh.url = bh.ssdURL + 'get-beneficiary-money';
      bh = await this.sd_f1N0Yoe4jsUcm9Rs(bh);
      //appendnew_next_sd_8dSDd6gXh4Z36fBw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8dSDd6gXh4Z36fBw');
    }
  }

  async sd_f1N0Yoe4jsUcm9Rs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.moneyBen = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_f1N0Yoe4jsUcm9Rs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f1N0Yoe4jsUcm9Rs');
    }
  }

  async sd_T79IAeLu6PXxvdql(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_wQg1DFAkEyJT5tnI(bh);
      //appendnew_next_sd_T79IAeLu6PXxvdql
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T79IAeLu6PXxvdql');
    }
  }

  async sd_wQg1DFAkEyJT5tnI(bh) {
    try {
      bh.url = bh.ssdURL + 'get-electricity';
      bh = await this.sd_wLhHq6B8nsX0Tcan(bh);
      //appendnew_next_sd_wQg1DFAkEyJT5tnI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wQg1DFAkEyJT5tnI');
    }
  }

  async sd_wLhHq6B8nsX0Tcan(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.payedElec = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_wLhHq6B8nsX0Tcan
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wLhHq6B8nsX0Tcan');
    }
  }

  async sd_5tARe3LfURlAr4MB(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_aAvFd84iLEVzEjL3(bh);
      //appendnew_next_sd_5tARe3LfURlAr4MB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5tARe3LfURlAr4MB');
    }
  }

  async sd_aAvFd84iLEVzEjL3(bh) {
    try {
      bh.url = bh.ssdURL + 'get-transfers';
      bh = await this.sd_VICE2TIOvt07QF7d(bh);
      //appendnew_next_sd_aAvFd84iLEVzEjL3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aAvFd84iLEVzEjL3');
    }
  }

  async sd_VICE2TIOvt07QF7d(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.transfers = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_VICE2TIOvt07QF7d
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VICE2TIOvt07QF7d');
    }
  }

  async sd_MNmXfZSoBXwLE4px(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_RXKZ4PGxr9qAAEto(bh);
      //appendnew_next_sd_MNmXfZSoBXwLE4px
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MNmXfZSoBXwLE4px');
    }
  }

  async sd_RXKZ4PGxr9qAAEto(bh) {
    try {
      bh.url = bh.ssdURL + 'get-scanned';
      bh = await this.sd_gYnpQ8sGpRFqdwFE(bh);
      //appendnew_next_sd_RXKZ4PGxr9qAAEto
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RXKZ4PGxr9qAAEto');
    }
  }

  async sd_gYnpQ8sGpRFqdwFE(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.data = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_gYnpQ8sGpRFqdwFE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gYnpQ8sGpRFqdwFE');
    }
  }

  async sd_m4OWdOGmMIuYa2IB(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_lOgX1OtLdbgGEDrx(bh);
      //appendnew_next_sd_m4OWdOGmMIuYa2IB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m4OWdOGmMIuYa2IB');
    }
  }

  async sd_lOgX1OtLdbgGEDrx(bh) {
    try {
      bh.location.back();
      //appendnew_next_sd_lOgX1OtLdbgGEDrx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lOgX1OtLdbgGEDrx');
    }
  }

  async sd_sJfa0G6v2cm7tZy3(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_1ICd6JvqgLGGeq76(bh);
      //appendnew_next_sd_sJfa0G6v2cm7tZy3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sJfa0G6v2cm7tZy3');
    }
  }

  async sd_1ICd6JvqgLGGeq76(bh) {
    try {
      bh.url = bh.url + 'add-messages';
      bh.message = bh.input.data;

      console.log('From Service: ', bh.message);

      // if(data._type === 'payment') {

      // }
      bh = await this.sd_C1AV4u7mYjAOeoex(bh);
      //appendnew_next_sd_1ICd6JvqgLGGeq76
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ICd6JvqgLGGeq76');
    }
  }

  async sd_C1AV4u7mYjAOeoex(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.message,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_C1AV4u7mYjAOeoex
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C1AV4u7mYjAOeoex');
    }
  }

  async sd_so2YliGJxhuBdv1H(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_fBiOvocm5DLqbORF(bh);
      //appendnew_next_sd_so2YliGJxhuBdv1H
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_so2YliGJxhuBdv1H');
    }
  }

  async sd_fBiOvocm5DLqbORF(bh) {
    try {
      bh.url = bh.url + 'update';

      bh.user = bh.input.data;
      bh = await this.sd_DqBETi9MKlf1U8IT(bh);
      //appendnew_next_sd_fBiOvocm5DLqbORF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fBiOvocm5DLqbORF');
    }
  }

  async sd_DqBETi9MKlf1U8IT(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.user,
      };
      bh.res = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_DqBETi9MKlf1U8IT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DqBETi9MKlf1U8IT');
    }
  }

  async sd_G5q3O9ZxQ4L60k7R(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_SB50TJb95C4AmLA9(bh);
      //appendnew_next_sd_G5q3O9ZxQ4L60k7R
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G5q3O9ZxQ4L60k7R');
    }
  }

  async sd_SB50TJb95C4AmLA9(bh) {
    try {
      bh.url = bh.url + 'get-messages';

      console.log('From Service: ', bh.message);

      // if(data._type === 'payment') {

      // }
      bh = await this.sd_cGLHq0aplermAVDe(bh);
      //appendnew_next_sd_SB50TJb95C4AmLA9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SB50TJb95C4AmLA9');
    }
  }

  async sd_cGLHq0aplermAVDe(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.messages = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_cGLHq0aplermAVDe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cGLHq0aplermAVDe');
    }
  }

  async sd_NifhwVNgnBWF0Txq(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_PiB0C8Y8oIElspMj(bh);
      //appendnew_next_sd_NifhwVNgnBWF0Txq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NifhwVNgnBWF0Txq');
    }
  }

  async sd_PiB0C8Y8oIElspMj(bh) {
    try {
      bh.url = bh.url + 'update-message';
      bh.message = bh.input.message;
      console.log('Update message From Service: ', bh.message);

      // if(data._type === 'payment') {

      // }
      bh = await this.sd_UUIfMEVneWZQE2Xd(bh);
      //appendnew_next_sd_PiB0C8Y8oIElspMj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PiB0C8Y8oIElspMj');
    }
  }

  async sd_UUIfMEVneWZQE2Xd(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.message,
      };
      bh.res = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_UUIfMEVneWZQE2Xd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UUIfMEVneWZQE2Xd');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_api_service_Catch
}
