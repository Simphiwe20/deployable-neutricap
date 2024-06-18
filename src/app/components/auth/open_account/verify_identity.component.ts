// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import * as faceapi from 'face-api.js'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-verify_identity',
  templateUrl: './verify_identity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verify_identityComponent implements AfterViewInit {
  @ViewChild('image')
  public image: any = null;
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
      this.sd_i6iHe29eUO6MYHEV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_i6iHe29eUO6MYHEV(bh) {
    try {
      bh = this.sd_LylQfJPX6PSbx53x(bh);
      //appendnew_next_sd_i6iHe29eUO6MYHEV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i6iHe29eUO6MYHEV');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_iy0k1URc5RBDtesS(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r8Re82cZT1k3uHjb');
    }
  }

  fileUpload(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_ghCy4D8XsVpSIUTz(bh);
      //appendnew_next_fileUpload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TjoN80UNYFtZLJxm');
    }
  }

  fileUpload1(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_oBFkdjb8Ql3rh59x(bh);
      //appendnew_next_fileUpload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MqeKhT3sSFcWIKQ3');
    }
  }

  fileUpload2(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_w4CPRgP40r1w23vw(bh);
      //appendnew_next_fileUpload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RwTk3agOnlOs7pw7');
    }
  }

  upload(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_jDQS3uqY3c5Zipqc(bh);
      //appendnew_next_upload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EbyRnRbXd615cuEO');
    }
  }

  upload2(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_p8J0CJr3iPKt8OpJ(bh);
      //appendnew_next_upload2
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q9iR9kumFXM0USyI');
    }
  }

  upload1(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GBiU7hvutGKuTJSP(bh);
      //appendnew_next_upload1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L0DD33j8JQBJeYVe');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_IJbhT0KUb6Z1sduz(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yMqstbfvivON4QJl');
    }
  }

  showPwd(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Mf1mJXdOyWb2aIG9(bh);
      //appendnew_next_showPwd
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_caaz9ptasW1kcCsI');
    }
  }

  showRemotePin(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_pvhKmpUQCNpNwuuf(bh);
      //appendnew_next_showRemotePin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iqg8FPB6j1RYz4zC');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RenDmkz14Of1hUUb');
    }
  }

  loadModels(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GOZAPxbwYlnHc5qq(bh);
      //appendnew_next_loadModels
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_od5Y24XY2KY1Vjhg');
    }
  }

  loadModel(
    net: any = undefined,
    modelBaseUrl: any = undefined,
    manifestUrl: any = undefined,
    ...others
  ) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { net, modelBaseUrl, manifestUrl };
      bh.local = {};
      bh = this.sd_QY5eR9PE3Ee4W38D(bh);
      //appendnew_next_loadModel
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_km32ez3pcBhbFEeC');
    }
  }

  fetchBinaryFile(url: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { url };
      bh.local = {};
      bh = this.sd_2gYteBlDScNBkNSY(bh);
      //appendnew_next_fetchBinaryFile
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aiKUHNHqI9FS0j5l');
    }
  }
  //appendnew_flow_verify_identityComponent_start

  sd_LylQfJPX6PSbx53x(bh) {
    try {
      bh.faceapi = faceapi;
      bh = this.sd_iqcHnNX7jsgHG1KD(bh);
      //appendnew_next_sd_LylQfJPX6PSbx53x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LylQfJPX6PSbx53x');
    }
  }

  sd_iqcHnNX7jsgHG1KD(bh) {
    try {
      this.page.clientDetails = undefined;
      this.page.formData = undefined;
      this.page.formData1 = undefined;
      this.page.formData2 = undefined;
      this.page.file = undefined;
      this.page.file1 = undefined;
      this.page.file2 = undefined;
      this.page.uploadedImage = undefined;
      this.page.detected = undefined;
      this.page.showLoader = false;
      this.page.submitted = false;
      this.page.currentYear = undefined;
      this.page.year = undefined;
      this.page.visible = false;
      this.page.visibleRemote = false;
      bh = this.sd_vh3M7aFNa9ZH2tRe(bh);
      //appendnew_next_sd_iqcHnNX7jsgHG1KD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iqcHnNX7jsgHG1KD');
    }
  }

  sd_vh3M7aFNa9ZH2tRe(bh) {
    try {
      const page = this.page;
      page.clientDetails = {
        fullName: '',
        email: '',
        idNum: '',
        remotePin: '',
        confirmRemotePin: '',
        ID_doc: '',
        proof_of_res: '',
        picture: '',
      };

      bh = this.sd_T7mUImT8NkaF1XwY(bh);
      //appendnew_next_sd_vh3M7aFNa9ZH2tRe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vh3M7aFNa9ZH2tRe');
    }
  }

  sd_T7mUImT8NkaF1XwY(bh) {
    try {
      let outputVariables = this.loadModels();

      //appendnew_next_sd_T7mUImT8NkaF1XwY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T7mUImT8NkaF1XwY');
    }
  }

  sd_iy0k1URc5RBDtesS(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      console.log(bh.input.form);

      console.log(page.clientDetails.idNum.substring(0, 1));
      let birthYear = Number(page.clientDetails.idNum.substring(0, 2));

      if (birthYear > 24 && birthYear <= 99) {
        let year = '19' + page.clientDetails.idNum.substring(0, 2).toString();
        console.log('String year 1990s: ', year);

        birthYear = Number(year);
      } else {
        let year = '20' + page.clientDetails.idNum.substring(0, 2).toString();
        birthYear = Number(year);
        console.log('String year 200s: ', year);
      }

      page.year = 2024 - birthYear;
      console.log('Year: ', page.year);
      bh = this.sd_cshorPjbVvQz583z(bh);
      //appendnew_next_sd_iy0k1URc5RBDtesS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iy0k1URc5RBDtesS');
    }
  }

  sd_cshorPjbVvQz583z(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_YodjhkqTxOcyF5ze(bh);
      //appendnew_next_sd_cshorPjbVvQz583z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cshorPjbVvQz583z');
    }
  }

  async sd_YodjhkqTxOcyF5ze(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_lQdnzsA3YV6TT5Kt(bh);
      } else {
        bh = await this.sd_2npatBsYjuamHxnY(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YodjhkqTxOcyF5ze');
    }
  }

  async sd_2npatBsYjuamHxnY(bh) {
    try {
      if (
        this.sdService.operators['lt'](this.page.year, 16, undefined, undefined)
      ) {
        bh = this.sd_zd2IaVy3cvgg5D8H(bh);
      } else {
        bh = await this.sd_7jUDxC3dlZXWYRCN(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2npatBsYjuamHxnY');
    }
  }

  sd_zd2IaVy3cvgg5D8H(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('YOU ARE UNDER AGE TO OPEN AN ACCOUNT WITH US', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_zd2IaVy3cvgg5D8H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zd2IaVy3cvgg5D8H');
    }
  }

  async sd_7jUDxC3dlZXWYRCN(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.clientDetails.remotePin,
          this.page.clientDetails.confirmRemotePin,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YPjEtWNF1391B6dR(bh);
      } else {
        bh = await this.sd_a0P3jaHg44tcxyRy(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7jUDxC3dlZXWYRCN');
    }
  }

  sd_YPjEtWNF1391B6dR(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'registration';
      // page.showLoader = true

      bh = this.sd_Zl4sfrzKEjaCwZlN(bh);
      //appendnew_next_sd_YPjEtWNF1391B6dR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YPjEtWNF1391B6dR');
    }
  }

  sd_Zl4sfrzKEjaCwZlN(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, { image: this.image });
      bh = this.sd_SV7LEu4ccRmnkN59(bh);
      //appendnew_next_sd_Zl4sfrzKEjaCwZlN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zl4sfrzKEjaCwZlN');
    }
  }

  async sd_SV7LEu4ccRmnkN59(bh) {
    try {
      const page = this.page;
      let queryImage = bh.pageViews.image.nativeElement;
      console.log(queryImage);
      let detectqueryImage = await faceapi.detectSingleFace(
        queryImage,
        new faceapi.TinyFaceDetectorOptions()
      );
      // .withFaceLandmarks().withFaceExpressions().withFaceDescriptor()

      if (!detectqueryImage) {
        page.detected = false;
      } else {
        page.detected = true;
      }
      bh = this.sd_Vqwl6KW5osLETFZH(bh);
      //appendnew_next_sd_SV7LEu4ccRmnkN59
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SV7LEu4ccRmnkN59');
    }
  }

  async sd_Vqwl6KW5osLETFZH(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.detected,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_qi7thJp7eJAp0VNG(bh);
      } else {
        bh = await this.sd_PPDdfTlAlE3mv3QQ(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vqwl6KW5osLETFZH');
    }
  }

  sd_qi7thJp7eJAp0VNG(bh) {
    try {
      const page = this.page;
      page.showLoader = true;

      delete page.clientDetails.ID_doc;
      delete page.clientDetails.proof_of_res;
      delete page.clientDetails.picture;
      delete page.clientDetails.confirmRemotePin;
      bh = this.sd_ty5aqWnWbYQOAsji(bh);
      //appendnew_next_sd_qi7thJp7eJAp0VNG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qi7thJp7eJAp0VNG');
    }
  }

  sd_ty5aqWnWbYQOAsji(bh) {
    try {
      let outputVariables = this.upload();

      bh = this.sd_LexQ4t2N1P8VU9mC(bh);
      //appendnew_next_sd_ty5aqWnWbYQOAsji
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ty5aqWnWbYQOAsji');
    }
  }

  sd_LexQ4t2N1P8VU9mC(bh) {
    try {
      let outputVariables = this.upload1();

      bh = this.sd_I8UIvSuF16EFAFgd(bh);
      //appendnew_next_sd_LexQ4t2N1P8VU9mC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LexQ4t2N1P8VU9mC');
    }
  }

  sd_I8UIvSuF16EFAFgd(bh) {
    try {
      let outputVariables = this.upload2();

      bh = this.sd_trI7dpLHV8CdnvOf(bh);
      //appendnew_next_sd_I8UIvSuF16EFAFgd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I8UIvSuF16EFAFgd');
    }
  }

  async sd_trI7dpLHV8CdnvOf(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.clientDetails,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      this.sd_6JXYSh0xOM4Cvmne(bh);
      bh = this.sd_cMRjItrAz1TfAlWt(bh);
      //appendnew_next_sd_trI7dpLHV8CdnvOf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_trI7dpLHV8CdnvOf');
    }
  }

  sd_6JXYSh0xOM4Cvmne(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_6JXYSh0xOM4Cvmne
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6JXYSh0xOM4Cvmne');
    }
  }

  sd_cMRjItrAz1TfAlWt(bh) {
    try {
      const page = this.page;
      page.showLoader = false;
      bh.routeData = { img: page.uploadedImage, isRegister: true };
      bh = this.sd_8Szscxq0EVjTBYiF(bh);
      //appendnew_next_sd_cMRjItrAz1TfAlWt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cMRjItrAz1TfAlWt');
    }
  }

  async sd_8Szscxq0EVjTBYiF(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/prepare_for_selfie');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.routeData),
        });
      //appendnew_next_sd_8Szscxq0EVjTBYiF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Szscxq0EVjTBYiF');
    }
  }

  sd_PPDdfTlAlE3mv3QQ(bh) {
    try {
      const page = this.page;
      page.showLoader = false;
      console.log(page.detected);

      bh = this.sd_cJuyaqglzE84MFAO(bh);
      //appendnew_next_sd_PPDdfTlAlE3mv3QQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PPDdfTlAlE3mv3QQ');
    }
  }

  sd_cJuyaqglzE84MFAO(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(
          'The face on your picture is not detectable, please upload a picture with a clear face',
          'OK',
          {
            duration: 2000,
            direction: 'ltr',
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          }
        );
      //appendnew_next_sd_cJuyaqglzE84MFAO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cJuyaqglzE84MFAO');
    }
  }

  sd_a0P3jaHg44tcxyRy(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('RemotePin and confirm RemotePin should match', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_a0P3jaHg44tcxyRy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a0P3jaHg44tcxyRy');
    }
  }

  sd_lQdnzsA3YV6TT5Kt(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All the fields and documents are required', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_lQdnzsA3YV6TT5Kt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lQdnzsA3YV6TT5Kt');
    }
  }

  sd_ghCy4D8XsVpSIUTz(bh) {
    try {
      const page = this.page;
      let file: File;
      if (bh.input.event) {
        file = bh.input.event.target.files;
        page.file = file[0];
        bh.fileType = page.file['type'].split('/')[0];
        console.log('file type: ', bh.fileType);
        bh.fileType = bh.fileType == 'image' || bh.fileType == 'application';
        console.log('file type: ', bh.fileType);
      } else {
        console.log('The is no file uploaded');
      }
      bh = this.sd_WLLdP4zM3Ki4cLtG(bh);
      //appendnew_next_sd_ghCy4D8XsVpSIUTz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ghCy4D8XsVpSIUTz');
    }
  }

  sd_WLLdP4zM3Ki4cLtG(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.fileType,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xMMAL908qGIuiYNp(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WLLdP4zM3Ki4cLtG');
    }
  }

  sd_xMMAL908qGIuiYNp(bh) {
    try {
      const page = this.page;
      console.log(page.file2);
      // alert("Please select an image")
      delete page.clientDetails.ID_doc;

      bh = this.sd_pgvIqW8E1JbWlfKG(bh);
      //appendnew_next_sd_xMMAL908qGIuiYNp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xMMAL908qGIuiYNp');
    }
  }

  sd_pgvIqW8E1JbWlfKG(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Only accepts a picture', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_pgvIqW8E1JbWlfKG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pgvIqW8E1JbWlfKG');
    }
  }

  sd_oBFkdjb8Ql3rh59x(bh) {
    try {
      const page = this.page;
      let file: File;
      if (bh.input.event) {
        file = bh.input.event.target.files;
        page.file1 = file[0];
        bh.fileType = page.file1['type'].split('/')[0];
        bh.fileType = bh.fileType == 'image' || bh.fileType == 'application';
      } else {
        console.log('The is no file uploaded');
      }

      console.log('Upload proof: ', page.file1);
      bh = this.sd_h5KJ3DOJUwX9Y4so(bh);
      //appendnew_next_sd_oBFkdjb8Ql3rh59x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oBFkdjb8Ql3rh59x');
    }
  }

  sd_h5KJ3DOJUwX9Y4so(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.fileType,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_e5cm3ytWWRfz97n0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h5KJ3DOJUwX9Y4so');
    }
  }

  sd_e5cm3ytWWRfz97n0(bh) {
    try {
      const page = this.page;
      console.log(page.file2);
      // alert("Please select an image")
      delete page.clientDetails.proof_of_res;

      bh = this.sd_TlWijRmbHHT8uxK9(bh);
      //appendnew_next_sd_e5cm3ytWWRfz97n0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e5cm3ytWWRfz97n0');
    }
  }

  sd_TlWijRmbHHT8uxK9(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Only accepts a picture', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_TlWijRmbHHT8uxK9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TlWijRmbHHT8uxK9');
    }
  }

  sd_w4CPRgP40r1w23vw(bh) {
    try {
      const page = this.page;
      let file: File;
      if (bh.input.event) {
        file = bh.input.event.target.files;
        page.file2 = file[0];
        bh.fileType = page.file2['type'].split('/')[0];
        console.log(bh.fileType);
        bh.fileType = bh.fileType != 'image';
      } else {
        console.log('The is no file uploaded');
        return;
      }

      console.log(page.file2);
      console.log(bh.fileType);

      let fileReader = new FileReader();
      fileReader.readAsDataURL(page.file2);
      fileReader.onload = () => {
        let result = fileReader.result;
        page.uploadedImage = result;
      };

      bh = this.sd_tvEtJyb1Lshdqyga(bh);
      //appendnew_next_sd_w4CPRgP40r1w23vw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w4CPRgP40r1w23vw');
    }
  }

  sd_tvEtJyb1Lshdqyga(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.fileType,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ths24UaiQ5KpQReI(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tvEtJyb1Lshdqyga');
    }
  }

  sd_ths24UaiQ5KpQReI(bh) {
    try {
      const page = this.page;
      console.log(page.file2);
      // alert("Please select an image")
      delete page.clientDetails.picture;

      bh = this.sd_2oOpAwFPIbxRXAQD(bh);
      //appendnew_next_sd_ths24UaiQ5KpQReI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ths24UaiQ5KpQReI');
    }
  }

  sd_2oOpAwFPIbxRXAQD(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Only accepts a picture', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_2oOpAwFPIbxRXAQD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2oOpAwFPIbxRXAQD');
    }
  }

  sd_jDQS3uqY3c5Zipqc(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_OWfazeZy1TTRJC7Z(bh);
      //appendnew_next_sd_jDQS3uqY3c5Zipqc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jDQS3uqY3c5Zipqc');
    }
  }

  sd_OWfazeZy1TTRJC7Z(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload-ID';
      console.log(page.file);
      page.email = { email: page.clientDetails.email };

      page.formData = new FormData();
      page.formData.append('name', page.file);
      console.log('ID file name: ', page.formData.get('filename'));
      bh = this.sd_jDzfSGInPTSK1ja5(bh);
      //appendnew_next_sd_OWfazeZy1TTRJC7Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OWfazeZy1TTRJC7Z');
    }
  }

  async sd_jDzfSGInPTSK1ja5(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: this.page.email,
        params: [],
        body: this.page.formData,
      };
      this.page.idResult = await this.sdService.nHttpRequest(requestOptions);
      this.sd_MzwQKtXGUbXHRXL7(bh);
      //appendnew_next_sd_jDzfSGInPTSK1ja5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jDzfSGInPTSK1ja5');
    }
  }

  sd_MzwQKtXGUbXHRXL7(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.idResult);
      //appendnew_next_sd_MzwQKtXGUbXHRXL7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MzwQKtXGUbXHRXL7');
    }
  }

  sd_p8J0CJr3iPKt8OpJ(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_E8DzeQlntR6MgXpw(bh);
      //appendnew_next_sd_p8J0CJr3iPKt8OpJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p8J0CJr3iPKt8OpJ');
    }
  }

  sd_E8DzeQlntR6MgXpw(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload-picture';
      console.log('File 2 filename: ', page.file2.filename);
      page.email = { email: page.clientDetails.email };

      page.formData2 = new FormData();
      page.formData2.append('name', page.file2);
      console.log('Pictures: ', page.formData2);
      bh = this.sd_P1mrdIw6zytIle2B(bh);
      //appendnew_next_sd_E8DzeQlntR6MgXpw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E8DzeQlntR6MgXpw');
    }
  }

  async sd_P1mrdIw6zytIle2B(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: this.page.email,
        params: {},
        body: this.page.formData2,
      };
      this.page.pic = await this.sdService.nHttpRequest(requestOptions);
      this.sd_dZJCB8UvprZHv9My(bh);
      //appendnew_next_sd_P1mrdIw6zytIle2B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P1mrdIw6zytIle2B');
    }
  }

  sd_dZJCB8UvprZHv9My(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.pic);
      //appendnew_next_sd_dZJCB8UvprZHv9My
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dZJCB8UvprZHv9My');
    }
  }

  sd_GBiU7hvutGKuTJSP(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_GDm1BhSk7k93dxmO(bh);
      //appendnew_next_sd_GBiU7hvutGKuTJSP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GBiU7hvutGKuTJSP');
    }
  }

  sd_GDm1BhSk7k93dxmO(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'upload-proof';
      console.log(page.file1);
      page.email = { email: page.clientDetails.email };

      page.formData1 = new FormData();
      page.formData1.append('name', page.file1);
      console.log('Proof: ', page.formData1.filename);
      bh = this.sd_qkwU4mGrPepSNHo6(bh);
      //appendnew_next_sd_GDm1BhSk7k93dxmO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GDm1BhSk7k93dxmO');
    }
  }

  async sd_qkwU4mGrPepSNHo6(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: this.page.email,
        params: this.page.email,
        body: this.page.formData1,
      };
      this.page.proofOfRes = await this.sdService.nHttpRequest(requestOptions);
      this.sd_4NepmrrGzCt9YnLq(bh);
      //appendnew_next_sd_qkwU4mGrPepSNHo6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qkwU4mGrPepSNHo6');
    }
  }

  sd_4NepmrrGzCt9YnLq(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.proofOfRes);
      //appendnew_next_sd_4NepmrrGzCt9YnLq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4NepmrrGzCt9YnLq');
    }
  }

  async sd_IJbhT0KUb6Z1sduz(bh) {
    try {
      const page = this.page; // document.addEventListener('deviceready', this.onDeviceReady, false);

      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('../../assets/models'),
        await faceapi.nets.faceLandmark68Net.loadFromUri('../../assets/models'),
        await faceapi.nets.faceRecognitionNet.loadFromUri(
          '../../assets/models'
        ),
        await faceapi.nets.faceExpressionNet.loadFromUri('../../assets/models'),
      ]);

      if (window.innerWidth < 1024) {
        //  const modelPath = cordova.file.applicationDirectory + 'www/assets/models'
        // await Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri(modelPath),
        //         await faceapi.nets.faceLandmark68Net.loadFromUri(modelPath),
        //         await faceapi.nets.faceRecognitionNet.loadFromUri(modelPath),
        //         await faceapi.nets.faceExpressionNet.loadFromUri(modelPath),
        //         ]).then(() => {
        //                 console.log('Models loaded successfully')
        //         }).catch((err) => {
        //                 console.log('Error: ', err)
        //         })
        console.log('On the mobile phone');
      } else {
        // await Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri('../../assets/models'),
        //         await faceapi.nets.faceLandmark68Net.loadFromUri('../../assets/models'),
        //         await faceapi.nets.faceRecognitionNet.loadFromUri('../../assets/models'),
        //         await faceapi.nets.faceExpressionNet.loadFromUri('../../assets/models'),
        // ])
      }

      console.log('CHANGES RUNNING: ', navigator);
      //appendnew_next_sd_IJbhT0KUb6Z1sduz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IJbhT0KUb6Z1sduz');
    }
  }

  sd_Mf1mJXdOyWb2aIG9(bh) {
    try {
      const page = this.page;
      page.visible = !page.visible;
      //appendnew_next_sd_Mf1mJXdOyWb2aIG9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mf1mJXdOyWb2aIG9');
    }
  }

  sd_pvhKmpUQCNpNwuuf(bh) {
    try {
      const page = this.page;
      page.visibleRemote = !page.visibleRemote;
      //appendnew_next_sd_pvhKmpUQCNpNwuuf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pvhKmpUQCNpNwuuf');
    }
  }

  async sd_GOZAPxbwYlnHc5qq(bh) {
    try {
      const page = this.page;
      console.log('Hey');

      const modelBaseUrl =
        'https://raw.githubusercontent.com/Simphiwe20/models/main/';

      const loadAllModels = async () => {
        try {
          await faceapi.nets.tinyFaceDetector.loadFromUri(modelBaseUrl);
          await faceapi.nets.faceLandmark68Net.loadFromUri(modelBaseUrl);
          await faceapi.nets.faceRecognitionNet.loadFromUri(modelBaseUrl);
          await faceapi.nets.ssdMobilenetv1.loadFromUri(modelBaseUrl);

          console.log('All models loaded successfully');
        } catch (error) {
          console.error('Error loading models:', error);
        }
      };

      loadAllModels();

      //appendnew_next_sd_GOZAPxbwYlnHc5qq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GOZAPxbwYlnHc5qq');
    }
  }

  async sd_QY5eR9PE3Ee4W38D(bh) {
    try {
      const page = this.page;
      try {
        // Fetch the weights manifest JSON
        const response = await fetch(bh.input.manifestUrl);
        console.log('Response in the load model');
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.statusText}`);
        }
        const manifest = await response.json();
        console.log('Loaded manifest:', manifest);

        // Load weights
        const weightPaths = manifest.weights.map(
          (weight: any) => `${bh.input.modelBaseUrl}${weight.paths[0]}`
        );
        console.log('Weight paths:', weightPaths);

        const weights = await Promise.all(
          weightPaths.map((weightPath: string) =>
            this.fetchBinaryFile(weightPath)
          )
        );
        console.log('Loaded weights:', weights);

        await bh.input.net.load(weights);
        console.log(`Loaded model from manifest: ${bh.input.manifestUrl}`);
      } catch (error) {
        console.error(
          `Error loading model from ${bh.input.manifestUrl}:`,
          error
        );
        throw error;
      }
      //appendnew_next_sd_QY5eR9PE3Ee4W38D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QY5eR9PE3Ee4W38D');
    }
  }

  async sd_2gYteBlDScNBkNSY(bh) {
    try {
      const page = this.page;
      const response = await fetch(bh.input.url);
      console.log('Response in the fetch binary', response);
      if (!response.ok) {
        throw new Error(`Failed to fetch binary file: ${response.statusText}`);
      }
      return await response.arrayBuffer();
      //appendnew_next_sd_2gYteBlDScNBkNSY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2gYteBlDScNBkNSY');
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
  //appendnew_flow_verify_identityComponent_Catch
}
